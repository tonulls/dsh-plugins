import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const config = JSON.parse(await readFile(path.join(root, 'bundle.config.json'), 'utf8'))
const projectLicense = await readFile(path.join(root, '../LICENSE'), 'utf8')
const upstreamLicense = await readFile(path.join(root, 'upstream/LICENSE'), 'utf8')
const hooks = await readFile(path.join(root, 'upstream/skills/yt-script/hooks.json'), 'utf8')
const locales = ['ru', 'en', 'zh-CN']
const suffix = { ru: 'ru', en: 'en', 'zh-CN': 'zh' }
const runtimeSourcesByLocale = Object.fromEntries(await Promise.all(locales.map(async (locale) => {
  const runtimeTemplate = path.join(root, 'packages', `dsh-youtube-agent-skill-tonulls-${suffix[locale]}`, 'src')
  const sources = Object.fromEntries(await Promise.all(['index.js', 'provider.js', 'mode-provider.js', 'routing.js'].map(async (file) => [file, await readFile(path.join(runtimeTemplate, file), 'utf8')])))
  return [locale, sources]
})))
const DSH_NOTES = [
  '## DSH safety and scope',
  '- This bundle contains English prompt instructions only. It adds no Python tools, YouTube API, browser integration, credentials, or publishing capability.',
  '- Automatic selection is disabled by default and is controlled per Agent with `/dsh-youtube-agent-skill-tonulls on` and `/dsh-youtube-agent-skill-tonulls off`; direct invocation remains available. Treat every output as a draft; never upload, publish, comment, pin, heart, or modify a channel.',
  '- Use only user-provided data or explicitly authorized public research with tools available in this session. Never sign in, scrape at scale, or access account credentials.',
  '- Use voice samples supplied in this chat. Do not read host-specific profile paths or persist voice profiles without explicit permission.',
  '- The upstream scoring/data-processing Python helpers are not included. Do not claim automated scores, exact retention calculations, or platform guarantees; state limits and uncertainties.',
  '- Ask before writing any files or taking actions outside the chat. Do not invent metrics, claims, sources, or performance outcomes.',
].join('\n')

function stripFrontmatter(text, file) {
  const lines = text.split('\n')
  if (lines[0]?.trim() !== '---') throw new Error(`Skill is missing frontmatter: ${file}`)
  const closing = lines.indexOf('---', 1)
  if (closing < 0) throw new Error(`Skill frontmatter is unterminated: ${file}`)
  return lines.slice(closing + 1).join('\n').trim()
}

function removeVoiceFileAssumption(body, name) {
  const start = body.indexOf('1. Read `~/.claude/youtube/voice.md` if it exists.')
  if (start < 0) return body
  const next = body.indexOf('2. Never invent a number, a result or a source.', start)
  if (next < 0) throw new Error(`Could not adapt voice-profile instructions in ${name}`)
  return body.slice(0, start) + '1. Use only a voice profile or examples the user supplies in this chat. Do not read host-specific files or persist a profile without explicit permission.\n2. Never invent a number, a result or a source.' + body.slice(next + '2. Never invent a number, a result or a source.'.length)
}

function removeCodeFence(body, name) {
  const start = body.indexOf('```bash')
  if (start < 0) return body
  const end = body.indexOf('```', start + 7)
  if (end < 0) throw new Error(`Unterminated command block in ${name}`)
  return body.slice(0, start) + body.slice(end + 3)
}

function adaptSkill(name, source, description) {
  let body = removeVoiceFileAssumption(stripFrontmatter(source, name), name)
  if (name === 'yt-script') {
    body = body.replace('Two tools live in this folder and both actually run. Use them. Do not eyeball the hook.', 'The upstream Python scoring helper is not included in DSH. Use the bundled hook-formula reference for qualitative ideation only; never report an automated score.')
    body = removeCodeFence(body, name)
    body = body.replace('run them through `hookscore.py`,', 'assess them qualitatively;')
    body = body.replace('show the user both with their scores', 'show the two strongest with their trade-offs')
    body = body.replace('- the two best hooks with their scored panels', '- the two strongest hooks with a brief qualitative comparison')
    body = body.replace('one line naming which formula the winning hook used and why it fits this idea', 'one line naming the formula that informed the winning hook and why it fits this idea')
  } else if (name === 'yt-package') {
    body = removeCodeFence(body, name)
    body = body.replace('## Rules the tool enforces, and why', '## Qualitative heuristics, not verified platform rules')
    body = body.replace('Generate ten titles, run them all through `title.py`, show the user the top three with their scores\nand the specific issue on each. For the winner, write the thumbnail brief: the expression, the\nframing, the three words, and what the background has to do to hold contrast at feed size.', 'Generate ten title ideas, compare them qualitatively, and show the top three with trade-offs. Do not claim automated scores or present heuristics as current platform guarantees. Refine one title-thumbnail pair and draft its thumbnail brief: expression, framing, wording, and contrast.')
  } else if (name === 'yt-shorts') {
    body = body.replace('Write the\n  replacement and run it through `../yt-script/hookscore.py`.', 'Write the replacement and assess it qualitatively using the bundled yt-script skill; do not claim a score.')
  } else if (name === 'yt-audit') {
    body = body.replace('Run them through `../yt-package/title.py`.', 'Review the pairing qualitatively; the upstream title-scoring helper is not included.')
    body = body.replace('Transcribe them and score with\n   `../yt-script/hookscore.py`. This is where most channels lose.', 'Use only a transcript supplied or explicitly authorized by the user and assess the opening qualitatively; do not claim an automated score.')
    body = body.replace('**The retention shape**, if they can export it. `/yt-retention`.', '**The retention shape**, only if the user supplies the relevant export or summary; this bundle has no retention analyzer.')
  } else if (name === 'yt-seo') {
    body = body.replace('spend the effort on `/yt-package` instead.', 'spend the effort on the bundled yt-package skill instead.')
    body = body.replace('Then chapters (`/yt-chapters` writes them).', 'Then verified chapters, but only when the user supplies timestamps; this bundle has no chapter generator.')
    body = body.replace('Tags are a weak signal and YouTube has said so. Use them for disambiguation - spellings, the tool\nnames, the abbreviations people actually type - and stop. Fifteen is plenty. A wall of tags is not\na strategy and stuffing unrelated ones is against the terms.', 'Use tags sparingly for disambiguation (spellings, tool names, abbreviations), not as a substitute for a clear title and description. Do not use unrelated tags. Verify current platform guidance when policy details matter.')
  } else if (name === 'yt-comment') {
    body = body.replace('Say which ONE comment to pin and why. Pin the question the most people also have, not the nicest\none. Heart generously - it costs nothing and it is visible.', 'Recommend at most one comment to pin and explain why; never pin, heart, or reply on the channel yourself.')
    body = body.replace('Check their voice file.', 'Use only examples supplied in this chat.')
  } else if (name === 'yt-plan') {
    body = body.replace('- **Shorts from the anchor.** Three, cut from the long video, not written separately. `/yt-shorts`\n  finds them.', '- **Shorts from the anchor.** Suggest up to three candidate clips from the long video; use the bundled `yt-shorts` skill.')
  }
  return `---\nname: ${name}\ndescription: ${description}\n---\n\n${body}\n`
}

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
    `const DSH_NOTES = ${JSON.stringify(DSH_NOTES)}`,
    'const INVOCATION = { modelInvocable: false, userInvocable: true }',
    '',
    'async function readCatalog(signal) {',
    '  signal?.throwIfAborted()',
    "  const catalog = JSON.parse(await readFile(CATALOG_URL, { encoding: 'utf8', signal }))",
    `  if (catalog.schemaVersion !== 1 || !Array.isArray(catalog.entries) || catalog.entries.length !== ${config.skills.length}) throw new Error('YouTube skills catalog is invalid')`,
    '  const names = new Set()',
    '  const files = new Set()',
    '  for (const entry of catalog.entries) {',
    "    if (typeof entry.name !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.name) || names.has(entry.name)) throw new Error('Invalid or duplicate YouTube skill name')",
    "    if (typeof entry.description !== 'string' || !entry.description.trim() || !ASSET_PATH.test(entry.file) || files.has(entry.file)) throw new Error('Invalid or duplicate YouTube skill asset')",
    '    names.add(entry.name)',
    '    files.add(entry.file)',
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
    'export function createYouTubeAgentSkillProvider() {',
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
    "        content: DSH_NOTES + '\\n\\n' + stripFrontmatter(source, entry.file),",
    '      }',
    '    },',
    '  }',
    '}',
    '',
  ].join('\n')
}

for (const locale of locales) {
  const packageName = `dsh-youtube-agent-skill-tonulls-${suffix[locale]}`
  const packageDir = path.join(root, 'packages', packageName)
  const assetsDir = path.join(packageDir, 'assets/skills')
  const srcDir = path.join(packageDir, 'src')
  const localeDir = path.join(packageDir, 'locale')
  await Promise.all([mkdir(assetsDir, { recursive: true }), mkdir(srcDir, { recursive: true }), mkdir(localeDir, { recursive: true })])
  const entries = []
  for (const skill of config.skills) {
    const source = await readFile(path.join(root, skill.source), 'utf8')
    const adapted = adaptSkill(skill.name, source, skill.descriptions[locale])
    const file = `${skill.name}.md`
    await writeFile(path.join(assetsDir, file), adapted)
    entries.push({ name: skill.name, description: skill.descriptions[locale], file })
  }
  await writeFile(path.join(assetsDir, 'hooks.json'), hooks)
  await writeFile(path.join(assetsDir, 'catalog.json'), JSON.stringify({ schemaVersion: 1, entries }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSE'), projectLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.LICENSE'), upstreamLicense)
  await writeFile(path.join(packageDir, 'UPSTREAM.json'), JSON.stringify({ name: config.upstreamName, url: config.upstreamUrl, commit: config.upstreamCommit, includedSkills: config.skills.map(({ name }) => name), omittedSkills: ['yt-edit', 'yt-chapters', 'yt-retention', 'yt-viral'], omittedRuntimeFiles: ['six upstream Python tools', 'Claude plugin manifests and hooks'], sourceLicense: config.sourceLicense, sourceCopyright: config.sourceCopyright, adaptation: 'Prompt-only, user-invoked DSH skills; no YouTube integration, credentials, automated scores, or publishing.' }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'LICENSES.md'), `# License and attribution\n\nThe DSH adapter code is covered by the MIT license in LICENSE. The included upstream skill text and hook-formula data are covered by the upstream MIT license in UPSTREAM.LICENSE.\n\nSource: [${config.upstreamName}](${config.upstreamUrl}), commit ${config.upstreamCommit}.\n`)
  for (const [file, source] of Object.entries(runtimeSourcesByLocale[locale])) await writeFile(path.join(srcDir, file), source)
  await writeFile(path.join(packageDir, 'cordis.patch.yml'), `- insert:\n    - id: ${config.pluginName}\n      name: ${packageName}\n`)
  await writeFile(path.join(localeDir, `${locale}.json`), JSON.stringify({ meta: { title: config.titles[locale], description: config.descriptions[locale] } }, null, 2) + '\n')
  await writeFile(path.join(packageDir, 'icon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#282344"/><path d="M12 18h40v26H31l-11 9v-9h-8z" fill="none" stroke="#f4a85e" stroke-linejoin="round" stroke-width="3"/><path d="M21 27h22M21 35h15" stroke="#8fd2c1" stroke-linecap="round" stroke-width="3"/></svg>\n')
  await writeFile(path.join(packageDir, 'package.json'), JSON.stringify({
    name: packageName, description: config.descriptions[locale], version: '0.1.0', license: 'MIT', private: true, type: 'module', main: './src/index.js',
    exports: { '.': './src/index.js', './provider': './src/provider.js', './cordis.patch.yml': './cordis.patch.yml', './package.json': './package.json', './locale/*.json': './locale/*.json', './icon': './icon.svg' },
    files: ['README.md', 'LICENSE', 'src/*.js', 'assets/skills/*.md', 'assets/skills/*.json', 'cordis.patch.yml', 'UPSTREAM.json', 'UPSTREAM.LICENSE', 'LICENSES.md', 'locale/*.json', 'icon.svg'],
    dsh: { bundle: { patch: './cordis.patch.yml' } },
    peerDependencies: { '@deepseek-ai/cordis': '*', '@deepseek-ai/dsh-agent': '*', '@deepseek-ai/dsh-commands': '*', '@deepseek-ai/dsh-skill': '*' },
  }, null, 2) + '\n')
}

console.log(`Built ${locales.length} curated YouTube skill variants with ${config.skills.length} skills each.`)
