import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const config = JSON.parse(await readFile(path.join(root, 'bundle.config.json'), 'utf8'))
const license = await readFile(path.join(root, 'upstream/LICENSE'), 'utf8')
const projectLicense = await readFile(path.join(root, '../LICENSE'), 'utf8')
const locales = ['ru', 'en', 'zh-CN']
const suffix = { ru: 'ru', en: 'en', 'zh-CN': 'zh' }
const runtimeSourcesByLocale = Object.fromEntries(await Promise.all(locales.map(async (locale) => {
  const runtimeTemplate = path.join(root, 'packages', `dsh-grill-me-tonulls-${suffix[locale]}`, 'src')
  const sources = Object.fromEntries(await Promise.all(['index.js', 'provider.js', 'mode-provider.js', 'routing.js'].map(async (file) => [file, await readFile(path.join(runtimeTemplate, file), 'utf8')])))
  return [locale, sources]
})))
const dshNotes = [
  '## DSH safety and runtime notes',
  '- These skills only guide the current DSH Agent and add no tools, permissions, network access, or persistence.',
  '- Automatic selection is disabled by default and can be enabled or disabled per Agent with `/dsh-grill-me-tonulls on` and `/dsh-grill-me-tonulls off`; direct invocation remains available.',
  '- Use only tools available in this DSH session. Do not assume a separate Skill tool or sub-agent is available.',
  '- Do not implement or modify anything until the user explicitly confirms the shared understanding and requests action.',
].join('\n')
const adaptedEntry = [
  '---',
  'name: grill-me',
  `description: ${config.skills[0].descriptions.en}`,
  '---',
  '',
  'Use the bundled skill "grilling" to interview the user about a plan, decision, or idea. Apply the DSH runtime notes and wait for explicit confirmation before acting.',
  '',
].join('\n')

function providerSource() {
  return [
    "import { readFile } from 'node:fs/promises'",
    "import { fileURLToPath } from 'node:url'",
    '',
    `const PROVIDER_NAME = '${config.pluginName}'`,
    "const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)",
    "const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)",
    'const ASSET_PATH = /^[a-z0-9]+(?:-[a-z0-9]+)*\\.md$/',
    "const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(ASSET_BASE_URL) }",
    `const DSH_NOTES = ${JSON.stringify(dshNotes)}`,
    'const INVOCATION = { modelInvocable: false, userInvocable: true }',
    '',
    'async function readCatalog(signal) {',
    '  signal?.throwIfAborted()',
    "  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))",
    "  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== 2) throw new Error('Grill Me skill catalog is invalid')",
    '  const names = new Set()',
    '  for (const entry of catalog.entries) {',
    "    if (typeof entry.name !== 'string' || names.has(entry.name) || !ASSET_PATH.test(entry.file) || typeof entry.description !== 'string') throw new Error('Grill Me catalog entry is invalid')",
    '    names.add(entry.name)',
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
    'export function createGrillMeProvider() {',
    '  return {',
    '    name: PROVIDER_NAME,',
    '    async list({ signal } = {}) {',
    '      return (await readCatalog(signal)).map((entry) => ({',
    '        name: entry.name, description: entry.description, invocation: INVOCATION,',
    "        provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE, rank: 600, locator: entry.file,",
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
    "        provider: PROVIDER_NAME, source: 'bundled', resourceBase: RESOURCE_BASE,",
    "        content: DSH_NOTES + '\\n\\n' + stripFrontmatter(source, entry.file) + '\\n\\n' + DSH_NOTES,",
    '      }',
    '    },',
    '  }',
    '}',
    '',
  ].join('\n')
}

for (const locale of locales) {
  const packageName = `dsh-grill-me-tonulls-${suffix[locale]}`
  const packageDir = path.join(root, 'packages', packageName)
  const assetsDir = path.join(packageDir, 'assets/skills')
  const srcDir = path.join(packageDir, 'src')
  const localeDir = path.join(packageDir, 'locale')
  await Promise.all([mkdir(assetsDir, { recursive: true }), mkdir(srcDir, { recursive: true }), mkdir(localeDir, { recursive: true })])
  for (const skill of config.skills) {
    const text = skill.name === 'grill-me' ? adaptedEntry : await readFile(path.join(root, skill.source), 'utf8')
    await writeFile(path.join(assetsDir, skill.file), text)
  }
  const entries = config.skills.map((skill) => ({ name: skill.name, description: skill.descriptions[locale], file: skill.file }))
  await writeFile(path.join(assetsDir, 'catalog.json'), JSON.stringify({ schemaVersion: 1, entries }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSE'), projectLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.LICENSE'), license)
  await writeFile(path.join(packageDir, 'UPSTREAM.json'), JSON.stringify({ name: config.upstreamName, url: config.upstreamUrl, commit: config.upstreamCommit, sourceSkills: config.skills.map(({ name, source }) => ({ name, source })), sourceLicense: config.sourceLicense, sourceCopyright: config.sourceCopyright, adaptations: ['The grill-me entry no longer calls the host-specific Skill tool; it points to the bundled grilling skill.', 'Both skills are user-invoked by default; per-Agent automatic selection is controlled with `/dsh-grill-me-tonulls on` and `/dsh-grill-me-tonulls off`.'] }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSES.md'), `# License and attribution\n\nThe DSH adapter is covered by the MIT license in LICENSE. The bundled skills are adapted from ${config.upstreamName} under MIT; the upstream license and copyright are preserved in UPSTREAM.LICENSE.\n\nSource: [${config.upstreamName}](${config.upstreamUrl}), commit ${config.upstreamCommit}.\n`)
  for (const [file, source] of Object.entries(runtimeSourcesByLocale[locale])) await writeFile(path.join(srcDir, file), source)
  await writeFile(path.join(packageDir, 'cordis.patch.yml'), `- insert:\n    - id: ${config.pluginName}\n      name: ${packageName}\n`)
  await writeFile(path.join(localeDir, `${locale}.json`), JSON.stringify({ meta: { title: config.titles[locale], description: config.skills[0].descriptions[locale] } }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'icon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#263444"/><path d="M14 18h36M14 30h28M14 42h20" fill="none" stroke="#f5a65b" stroke-linecap="round" stroke-width="4"/><circle cx="48" cy="44" r="8" fill="none" stroke="#8bd2c1" stroke-width="3"/></svg>\n')
  await writeFile(path.join(packageDir, 'package.json'), JSON.stringify({
    name: packageName, description: config.skills[0].descriptions[locale], version: '0.1.0', license: 'MIT', private: true, type: 'module', main: './src/index.js',
    exports: { '.': './src/index.js', './provider': './src/provider.js', './cordis.patch.yml': './cordis.patch.yml', './package.json': './package.json', './locale/*.json': './locale/*.json', './icon': './icon.svg' },
    files: ['README.md', 'LICENSE', 'src/*.js', 'assets/skills/*.md', 'assets/skills/catalog.json', 'UPSTREAM.json', 'UPSTREAM.LICENSE', 'LICENSES.md', 'cordis.patch.yml', 'locale/*.json', 'icon.svg'],
    dsh: { bundle: { patch: './cordis.patch.yml' } },
    peerDependencies: { '@deepseek-ai/cordis': '*', '@deepseek-ai/dsh-agent': '*', '@deepseek-ai/dsh-commands': '*', '@deepseek-ai/dsh-skill': '*' },
  }, null, 2) + '\n')
}

console.log(`Built ${locales.length} Grill Me package variants.`)
