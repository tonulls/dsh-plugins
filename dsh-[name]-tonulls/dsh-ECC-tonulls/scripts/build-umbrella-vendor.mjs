import { cp, lstat, mkdir, readFile, readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const PROJECT_ROOT = fileURLToPath(new URL('../', import.meta.url))
const BUNDLE_ROOT = path.resolve(PROJECT_ROOT, 'packages', 'dsh-ecc-tonulls-en')
const VENDOR_ROOT = path.resolve(BUNDLE_ROOT, 'vendor')
const EXPECTED_VENDOR_ROOT = path.resolve(PROJECT_ROOT, 'packages', 'dsh-ecc-tonulls-en', 'vendor')
const COPY_MAPPINGS = [
  { source: 'packages/agents/src/provider.js', target: 'agents/src/provider.js' },
  { source: 'packages/agents/assets/agents', target: 'agents/assets/agents' },
  { source: 'packages/agents/assets/locales', target: 'agents/assets/locales' },
  { source: 'packages/skills/src/provider.js', target: 'skills/src/provider.js' },
  { source: 'packages/skills/LICENSES.md', target: 'skills/LICENSES.md' },
  { source: 'packages/skills/assets/catalog.json', target: 'skills/assets/catalog.json' },
  { source: 'packages/skills/assets/locales', target: 'skills/assets/locales' },
  { source: 'packages/skills/assets/skills', target: 'skills/assets/skills' },
  { source: 'packages/commands/src/provider.js', target: 'commands/src/provider.js' },
  { source: 'packages/commands/assets/catalog.json', target: 'commands/assets/catalog.json' },
  { source: 'packages/commands/assets/locales', target: 'commands/assets/locales' },
  { source: 'packages/commands/assets/commands', target: 'commands/assets/commands' },
]

if (VENDOR_ROOT !== EXPECTED_VENDOR_ROOT || !VENDOR_ROOT.startsWith(`${BUNDLE_ROOT}${path.sep}`)) {
  throw new Error(`Refusing to write outside the umbrella vendor directory: ${VENDOR_ROOT}`)
}

async function filesUnder(root) {
  const files = new Map()
  async function visit(directory, prefix = '') {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const relative = prefix === '' ? entry.name : path.join(prefix, entry.name)
      const absolute = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        await visit(absolute, relative)
      } else if (entry.isFile()) {
        files.set(relative.split(path.sep).join('/'), await readFile(absolute))
      } else {
        throw new Error(`Unsupported file type in generated vendor tree: ${absolute}`)
      }
    }
  }
  await visit(root)
  return files
}

async function expectedFiles() {
  const expected = new Map()
  for (const mapping of COPY_MAPPINGS) {
    const source = path.resolve(PROJECT_ROOT, mapping.source)
    const info = await lstat(source)
    if (info.isFile()) {
      expected.set(mapping.target, await readFile(source))
      continue
    }
    if (!info.isDirectory()) throw new Error(`Expected a file or directory: ${source}`)
    for (const [relative, contents] of await filesUnder(source)) {
      expected.set(path.posix.join(mapping.target, relative), contents)
    }
  }
  return expected
}

function compareFiles(expected, actual) {
  const missing = [...expected.keys()].filter((file) => !actual.has(file))
  const extra = [...actual.keys()].filter((file) => !expected.has(file))
  const changed = [...expected.keys()].filter((file) => actual.has(file) && !expected.get(file).equals(actual.get(file)))
  if (missing.length > 0 || extra.length > 0 || changed.length > 0) {
    const details = [
      ...missing.map((file) => `missing: ${file}`),
      ...extra.map((file) => `unexpected: ${file}`),
      ...changed.map((file) => `out of date: ${file}`),
    ]
    throw new Error(`Umbrella vendor copy is not synchronized:\n${details.join('\n')}`)
  }
}

async function checkVendor() {
  let actual = new Map()
  try {
    const info = await lstat(VENDOR_ROOT)
    if (!info.isDirectory() || info.isSymbolicLink()) throw new Error(`Vendor path must be a real directory: ${VENDOR_ROOT}`)
    actual = await filesUnder(VENDOR_ROOT)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  const expected = await expectedFiles()
  compareFiles(expected, actual)
  console.log(`Umbrella vendor is synchronized (${actual.size} files).`)
}

async function buildVendor() {
  try {
    const info = await lstat(VENDOR_ROOT)
    if (info.isSymbolicLink() || !info.isDirectory()) throw new Error(`Refusing to replace non-directory vendor path: ${VENDOR_ROOT}`)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  await rm(VENDOR_ROOT, { recursive: true, force: true })
  await mkdir(VENDOR_ROOT, { recursive: true })
  for (const mapping of COPY_MAPPINGS) {
    const source = path.resolve(PROJECT_ROOT, mapping.source)
    const target = path.resolve(VENDOR_ROOT, mapping.target)
    if (!target.startsWith(`${VENDOR_ROOT}${path.sep}`)) throw new Error(`Refusing to copy outside vendor: ${target}`)
    await mkdir(path.dirname(target), { recursive: true })
    await cp(source, target, { recursive: true, force: true, errorOnExist: false })
  }
  await checkVendor()
}

const command = process.argv[2]
if (command === '--check') {
  await checkVendor()
} else if (command === undefined) {
  await buildVendor()
} else {
  throw new Error(`Unknown argument: ${command}`)
}
