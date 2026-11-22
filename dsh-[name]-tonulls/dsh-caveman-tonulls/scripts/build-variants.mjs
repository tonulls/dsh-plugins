import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const config = JSON.parse(await readFile(path.join(root, 'bundle.config.json'), 'utf8'))
const projectLicense = await readFile(path.join(root, '../LICENSE'), 'utf8')
const upstreamLicense = await readFile(path.join(root, 'upstream/LICENSE'), 'utf8')
const upstreamMitLicense = await readFile(path.join(root, 'upstream/LICENSE-MIT'), 'utf8')
const upstreamNotice = await readFile(path.join(root, 'upstream/NOTICE'), 'utf8')
const upstreamLicensing = await readFile(path.join(root, 'upstream/LICENSING.md'), 'utf8')
const upstreamTrademarks = await readFile(path.join(root, 'upstream/TRADEMARKS.md'), 'utf8')
const sourceSkill = await readFile(path.join(root, 'upstream/caveman/SKILL.md'), 'utf8')
const locales = ['ru', 'en', 'zh-CN']
const suffix = { ru: 'ru', en: 'en', 'zh-CN': 'zh' }
const runtimeSourcesByLocale = Object.fromEntries(await Promise.all(locales.map(async (locale) => {
  const runtimeTemplate = path.join(root, 'packages', `dsh-caveman-tonulls-${suffix[locale]}`, 'src')
  const sources = Object.fromEntries(await Promise.all(['index.js', 'provider.js', 'mode-provider.js', 'routing.js'].map(async (file) => [file, await readFile(path.join(runtimeTemplate, file), 'utf8')])))
  return [locale, sources]
})))
const DSH_NOTES = [
  '## DSH usage boundary',
  '- Apply this style only for the current explicitly requested task or response; do not keep a session-wide mode or state.',
  '- Automatic skill selection is disabled by default and is controlled per Agent with the bundle on/off command.',
  '- Never sacrifice correctness, safety, clarity, exact code, numbers, paths, commands, or user-requested detail for brevity.',
  '- Use full sentences for warnings, questions, confirmations, and irreversible actions.',
].join('\n')

function buildAdaptedSkill() {
  const lines = sourceSkill.split('\n')
  if (lines[0]?.trim() !== '---') throw new Error('Upstream Caveman skill has no frontmatter')
  const closing = lines.indexOf('---', 1)
  if (closing < 0) throw new Error('Upstream Caveman frontmatter is unterminated')
  const body = lines.slice(closing + 1).join('\n').trim()
  const sections = body.split('\n## ')
  const adaptedSections = sections.filter((section, index) => index === 0 || !section.startsWith('Persistence\n'))
  const adaptedBody = adaptedSections.join('\n## ').replace('`/caveman-compress` exempt.', 'This skill does not compress or write files.')
  return `---\nname: caveman\ndescription: ${config.descriptions.en}\n---\n\n${adaptedBody}\n\n## DSH usage boundary\n\n${DSH_NOTES.split('\n').slice(1).map((line) => line.replace(/^- /, '- ')).join('\n')}\n`
}

const adaptedSkill = buildAdaptedSkill()
const providerSource = [
  "import { readFile } from 'node:fs/promises'",
  "import { fileURLToPath } from 'node:url'",
  '',
  `const PROVIDER_NAME = '${config.pluginName}'`,
  "const CATALOG_URL = new URL('../assets/skills/catalog.json', import.meta.url)",
  "const ASSET_BASE_URL = new URL('../assets/skills/', import.meta.url)",
  "const RESOURCE_BASE = { kind: 'directory', path: fileURLToPath(ASSET_BASE_URL) }",
  `const DSH_NOTES = ${JSON.stringify(DSH_NOTES)}`,
  'const INVOCATION = { modelInvocable: false, userInvocable: true }',
  '',
  'async function readCatalog(signal) {',
  '  signal?.throwIfAborted()',
  "  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))",
  "  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== 1) throw new Error('Caveman skill catalog is invalid')",
  '  const [entry] = catalog.entries',
  "  if (entry.name !== 'caveman' || entry.file !== 'caveman.md' || typeof entry.description !== 'string') throw new Error('Caveman catalog entry is invalid')",
  '  return entry',
  '}',
  '',
  'function stripFrontmatter(text) {',
  "  const lines = text.split(/\\r?\\n/)",
  "  if (lines[0] !== '---') throw new Error('Caveman skill is missing frontmatter')",
  "  const closing = lines.indexOf('---', 1)",
  "  if (closing < 0) throw new Error('Caveman skill frontmatter is unterminated')",
  "  return lines.slice(closing + 1).join('\\n').trim()",
  '}',
  '',
  'export function createCavemanProvider() {',
  '  return {',
  '    name: PROVIDER_NAME,',
  '    async list({ signal } = {}) {',
  '      const entry = await readCatalog(signal)',
  '      return [{ name: entry.name, description: entry.description, invocation: INVOCATION, provider: PROVIDER_NAME, source: \'bundled\', resourceBase: RESOURCE_BASE, rank: 600, locator: entry.file }]',
  '    },',
  '    async get(selected, { signal } = {}) {',
  '      signal?.throwIfAborted()',
  "      if (selected?.provider !== PROVIDER_NAME || selected.name !== 'caveman' || selected.locator !== 'caveman.md') return undefined",
  '      const entry = await readCatalog(signal)',
  "      const source = await readFile(new URL(entry.file, ASSET_BASE_URL), { encoding: 'utf8', signal })",
  '      return { name: entry.name, description: entry.description, invocation: INVOCATION, provider: PROVIDER_NAME, source: \'bundled\', resourceBase: RESOURCE_BASE, content: DSH_NOTES + \'\\n\\n\' + stripFrontmatter(source) + \'\\n\' }',
  '    },',
  '  }',
  '}',
  '',
].join('\n')

for (const locale of locales) {
  const packageName = `dsh-caveman-tonulls-${suffix[locale]}`
  const packageDir = path.join(root, 'packages', packageName)
  const assetsDir = path.join(packageDir, 'assets/skills')
  const srcDir = path.join(packageDir, 'src')
  const localeDir = path.join(packageDir, 'locale')
  await Promise.all([mkdir(assetsDir, { recursive: true }), mkdir(srcDir, { recursive: true }), mkdir(localeDir, { recursive: true })])
  await writeFile(path.join(assetsDir, 'caveman.md'), adaptedSkill)
  await writeFile(path.join(assetsDir, 'catalog.json'), JSON.stringify({ schemaVersion: 1, entries: [{ name: 'caveman', description: config.descriptions[locale], file: 'caveman.md' }] }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSE'), projectLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.LICENSE'), upstreamLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.LICENSE-MIT'), upstreamMitLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.NOTICE'), upstreamNotice)
  await writeFile(path.join(packageDir, 'UPSTREAM.LICENSING.md'), upstreamLicensing)
  await writeFile(path.join(packageDir, 'UPSTREAM.TRADEMARKS.md'), upstreamTrademarks)
  await writeFile(path.join(packageDir, 'UPSTREAM.json'), JSON.stringify({ name: config.upstreamName, url: config.upstreamUrl, commit: config.upstreamCommit, skill: 'caveman', sourceLicense: config.sourceLicense, sourceCopyright: config.sourceCopyright, adaptations: ['Removed upstream session-persistence and host-hook status behavior.', 'Restricted style to an explicit user-invoked task in the current turn.', 'Removed the host-specific caveman-compress command.'] }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSES.md'), `# License and attribution\n\nThe DSH adapter code is covered by the MIT license in LICENSE. The Caveman skill is distributed under the upstream Apache-2.0 license. Historical MIT grants and third-party notices are preserved in UPSTREAM.LICENSE-MIT and UPSTREAM.NOTICE; the upstream license rationale and trademark terms are also included.\n\nSource: [${config.upstreamName}](${config.upstreamUrl}), commit ${config.upstreamCommit}.\n`)
  for (const [file, source] of Object.entries(runtimeSourcesByLocale[locale])) await writeFile(path.join(srcDir, file), source)
  await writeFile(path.join(packageDir, 'cordis.patch.yml'), `- insert:\n    - id: ${config.pluginName}\n      name: ${packageName}\n`)
  await writeFile(path.join(localeDir, `${locale}.json`), JSON.stringify({ meta: { title: config.titles[locale], description: config.descriptions[locale] } }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'icon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#302b27"/><path d="M16 22h32M16 32h24M16 42h16" stroke="#dfb56d" stroke-width="4" stroke-linecap="round"/><circle cx="46" cy="42" r="6" fill="#83cdbd"/></svg>\n')
  await writeFile(path.join(packageDir, 'package.json'), JSON.stringify({
    name: packageName, description: config.descriptions[locale], version: '0.1.0', license: 'MIT', private: true, type: 'module', main: './src/index.js',
    exports: { '.': './src/index.js', './provider': './src/provider.js', './cordis.patch.yml': './cordis.patch.yml', './package.json': './package.json', './locale/*.json': './locale/*.json', './icon': './icon.svg' },
    files: ['README.md', 'LICENSE', 'src/*.js', 'assets/skills/*.md', 'assets/skills/catalog.json', 'UPSTREAM.json', 'UPSTREAM.LICENSE', 'UPSTREAM.LICENSE-MIT', 'UPSTREAM.NOTICE', 'UPSTREAM.LICENSING.md', 'UPSTREAM.TRADEMARKS.md', 'LICENSES.md', 'cordis.patch.yml', 'locale/*.json', 'icon.svg'],
    dsh: { bundle: { patch: './cordis.patch.yml' } },
    peerDependencies: { '@deepseek-ai/cordis': '*', '@deepseek-ai/dsh-agent': '*', '@deepseek-ai/dsh-commands': '*', '@deepseek-ai/dsh-skill': '*' },
  }, null, 2) + '\n')
}

console.log(`Built ${locales.length} Caveman package variants.`)
