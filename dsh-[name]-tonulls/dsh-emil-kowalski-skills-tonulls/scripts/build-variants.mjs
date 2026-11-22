import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const config = JSON.parse(await readFile(path.join(root, 'bundle.config.json'), 'utf8'))
const projectLicense = await readFile(path.join(root, '../LICENSE'), 'utf8')
const upstreamLicense = await readFile(path.join(root, 'upstream/LICENSE'), 'utf8')
const locales = ['ru', 'en', 'zh-CN']
const suffix = { ru: 'ru', en: 'en', 'zh-CN': 'zh' }
const runtimeSourcesByLocale = Object.fromEntries(await Promise.all(locales.map(async (locale) => {
  const runtimeTemplate = path.join(root, 'packages', `dsh-emil-kowalski-skills-tonulls-${suffix[locale]}`, 'src')
  const sources = Object.fromEntries(await Promise.all(['index.js', 'provider.js', 'mode-provider.js', 'routing.js'].map(async (file) => [file, await readFile(path.join(runtimeTemplate, file), 'utf8')])))
  return [locale, sources]
})))
const DSH_NOTES = [
  '## DSH scope and safety',
  '- This package contains user-invoked English prompt instructions and Markdown references only; it has no executable tools, hooks, or external integrations.',
  '- Ask the user before changing files, creating plans, running installs/builds/tests/previews, deleting content, or changing dependencies. Never publish or commit without explicit permission.',
  '- These instructions do not prove visual quality. Report browser, device, accessibility, and performance checks as unverified unless actually performed in this session.',
  '- Preserve the project’s existing conventions, motion preferences, reduced-motion behavior, and accessibility requirements; do not invent support claims or measurements.',
].join('\n')

function stripFrontmatter(text, file) {
  const lines = text.split('\n')
  if (lines[0]?.trim() !== '---') throw new Error(`Skill is missing frontmatter: ${file}`)
  const closing = lines.indexOf('---', 1)
  if (closing < 0) throw new Error(`Skill frontmatter is unterminated: ${file}`)
  const body = lines.slice(closing + 1).join('\n').trim()
  if (!body) throw new Error(`Skill body is empty: ${file}`)
  return body
}

function sourceSkillName(source, file) {
  const lines = source.split('\n')
  const closing = lines.indexOf('---', 1)
  const nameLine = lines.slice(1, closing).find((line) => line.startsWith('name:'))
  const name = nameLine?.slice('name:'.length).trim()
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name ?? '')) throw new Error(`Skill name is invalid: ${file}`)
  return name
}

for (const skill of config.skills) {
  if (sourceSkillName(await readFile(path.join(root, 'upstream/skills', skill.path), 'utf8'), skill.path) !== skill.name) {
    throw new Error(`Configured name does not match upstream frontmatter: ${skill.path}`)
  }
}

function providerSource() {
  return [
    "import { readFile } from 'node:fs/promises'",
    "import { fileURLToPath } from 'node:url'",
    '',
    `const PROVIDER_NAME = '${config.pluginName}'`,
    "const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)",
    "const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)",
    "const SKILL_PATH = /^[a-z0-9]+(?:-[a-z0-9]+)*\\/SKILL\\.md$/",
    "const RESOURCE_DIR = /^[a-z0-9]+(?:-[a-z0-9]+)*\\/$/",
    `const DSH_NOTES = ${JSON.stringify(DSH_NOTES)}`,
    'const INVOCATION = { modelInvocable: false, userInvocable: true }',
    '',
    'async function readCatalog(signal) {',
    '  signal?.throwIfAborted()',
    "  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))",
    `  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== ${config.skills.length}) throw new Error('Emil Skills catalog is invalid')`,
    '  const names = new Set()',
    '  const paths = new Set()',
    '  for (const entry of catalog.entries) {',
    "    if (typeof entry.name !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name) || names.has(entry.name)) throw new Error('Invalid or duplicate skill name')",
    "    if (typeof entry.description !== 'string' || !entry.description.trim() || !SKILL_PATH.test(entry.file) || paths.has(entry.file)) throw new Error('Invalid or duplicate skill path')",
    "    if (entry.file !== `${entry.name}/SKILL.md` || entry.resourceDir !== `${entry.name}/` || !RESOURCE_DIR.test(entry.resourceDir)) throw new Error('Skill resource directory is invalid')",
    '    names.add(entry.name)',
    '    paths.add(entry.file)',
    '  }',
    '  return catalog.entries',
    '}',
    '',
    'function stripFrontmatter(text, file) {',
    "  const lines = text.split(/\\r?\\n/)",
    "  if (lines[0] !== '---') throw new Error('Skill is missing frontmatter: ' + file)",
    "  const closing = lines.indexOf('---', 1)",
    "  if (closing < 0) throw new Error('Skill frontmatter is unterminated: ' + file)",
    "  const body = lines.slice(closing + 1).join('\\n').trim()",
    "  if (!body) throw new Error('Skill body is empty: ' + file)",
    '  return body',
    '}',
    '',
    'function resourceBase(entry) {',
    "  return { kind: 'directory', path: fileURLToPath(new URL(entry.resourceDir, ASSET_BASE_URL)) }",
    '}',
    '',
    'export function createEmilSkillsProvider() {',
    '  return {',
    '    name: PROVIDER_NAME,',
    '    async list({ signal } = {}) {',
    '      return (await readCatalog(signal)).map((entry) => ({',
    '        name: entry.name, description: entry.description, invocation: INVOCATION,',
    "        provider: PROVIDER_NAME, source: 'bundled', resourceBase: resourceBase(entry), rank: 600, locator: entry.file,",
    '      }))',
    '    },',
    '    async get(selected, { signal } = {}) {',
    '      signal?.throwIfAborted()',
    "      if (selected?.provider !== PROVIDER_NAME || typeof selected.locator !== 'string') return undefined",
    '      const entry = (await readCatalog(signal)).find((candidate) => candidate.name === selected.name && candidate.file === selected.locator)',
    '      if (!entry) return undefined',
    "      const source = await readFile(new URL(entry.file, ASSET_BASE_URL), { encoding: 'utf8', signal })",
    '      return {',
    '        name: entry.name, description: entry.description, invocation: INVOCATION,',
    "        provider: PROVIDER_NAME, source: 'bundled', resourceBase: resourceBase(entry),",
    "        content: DSH_NOTES + '\\n\\n' + stripFrontmatter(source, entry.file),",
    '      }',
    '    },',
    '  }',
    '}',
    '',
  ].join('\n')
}

for (const locale of locales) {
  const packageName = `dsh-emil-kowalski-skills-tonulls-${suffix[locale]}`
  const packageDir = path.join(root, 'packages', packageName)
  const assetsDir = path.join(packageDir, 'assets/skills')
  const srcDir = path.join(packageDir, 'src')
  const localeDir = path.join(packageDir, 'locale')
  await Promise.all([mkdir(assetsDir, { recursive: true }), mkdir(srcDir, { recursive: true }), mkdir(localeDir, { recursive: true })])
  const entries = []
  for (const skill of config.skills) {
    const sourcePath = path.join(root, 'upstream/skills', skill.path)
    const targetPath = path.join(assetsDir, skill.path)
    await mkdir(path.dirname(targetPath), { recursive: true })
    await cp(sourcePath, targetPath)
    const resourceDir = skill.resourceDir
    for (const file of skill.references ?? []) {
      const refSource = path.join(root, 'upstream/skills', skill.name, file)
      const refTarget = path.join(assetsDir, skill.name, file)
      await mkdir(path.dirname(refTarget), { recursive: true })
      await cp(refSource, refTarget)
    }
    entries.push({ name: skill.name, description: skill.descriptions[locale], file: skill.path, resourceDir })
  }
  await writeFile(path.join(assetsDir, 'catalog.json'), JSON.stringify({ schemaVersion: 1, entries }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSE'), projectLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.LICENSE'), upstreamLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.json'), JSON.stringify({ name: config.upstreamName, url: config.upstreamUrl, commit: config.upstreamCommit, includedSkills: config.skills.map(({ name }) => name), adaptedFrom: { 'gestures': 'https://github.com/emilkowalski/skills/tree/64eb3deb/skills/gestures', 'learn-taste': 'https://github.com/emilkowalski/skills/tree/64eb3deb/skills/learn-taste', 'ask-emil': 'https://github.com/emilkowalski/skills/tree/64eb3deb/skills/ask-emil' }, omittedSkills: ['prototype', 'break-ui', 'pick-ui-library', 'write-swift'], sourceLicense: config.sourceLicense, sourceCopyright: config.sourceCopyright, includedReferences: config.skills.flatMap(({ name, references = [] }) => references.map((file) => `${name}/${file}`)), adaptation: 'User-invoked instructions with DSH confirmation and verification boundaries; no runtime tools or integrations.' }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSES.md'), `# License and attribution\n\nThe DSH adapter code is covered by the MIT license in LICENSE. The included upstream skill instructions and Markdown references are covered by the upstream MIT license in UPSTREAM.LICENSE.\n\nSource: [${config.upstreamName}](${config.upstreamUrl}), commit ${config.upstreamCommit}.\n`)
  for (const [file, source] of Object.entries(runtimeSourcesByLocale[locale])) await writeFile(path.join(srcDir, file), source)
  await writeFile(path.join(packageDir, 'cordis.patch.yml'), `- insert:\n    - id: ${config.pluginName}\n      name: ${packageName}\n`)
  await writeFile(path.join(localeDir, `${locale}.json`), JSON.stringify({ meta: { title: config.titles[locale], description: config.descriptions[locale] } }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'icon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#30333c"/><path d="M18 44 31 18l15 26M23 34h18" fill="none" stroke="#f1ad70" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><circle cx="48" cy="20" r="4" fill="#85d0bd"/></svg>\n')
  await writeFile(path.join(packageDir, 'README.md'), `# ${config.titles[locale]}\n\n${config.descriptions[locale]}\n\n${config.skills.length} English prompt-only skills with per-skill Markdown references. User invocation only; no executables or external integrations. Ask before editing files, installing dependencies, or running checks. See LICENSES.md and UPSTREAM.json.\n`)
  await writeFile(path.join(packageDir, 'package.json'), JSON.stringify({
    name: packageName, description: config.descriptions[locale], version: '0.1.0', license: 'MIT', private: true, type: 'module', main: './src/index.js',
    exports: { '.': './src/index.js', './provider': './src/provider.js', './cordis.patch.yml': './cordis.patch.yml', './package.json': './package.json', './locale/*.json': './locale/*.json', './icon': './icon.svg' },
    files: ['README.md', 'LICENSE', 'src/*.js', 'assets/skills/**/*.md', 'assets/skills/catalog.json', 'UPSTREAM.json', 'UPSTREAM.LICENSE', 'LICENSES.md', 'cordis.patch.yml', 'locale/*.json', 'icon.svg'],
    dsh: { bundle: { patch: './cordis.patch.yml' } },
  }, null, 2) + '\n')
}

console.log(`Built ${locales.length} Emil Skills package variants with ${config.skills.length} skills each.`)
