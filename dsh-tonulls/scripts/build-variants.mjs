import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const componentDirectory = 'dsh-[name]-tonulls'
const generatedRoot = path.resolve(root, 'packages')
const baseName = 'dsh-tonulls'
const template = JSON.parse(await readFile(path.join(root, 'package.template.json'), 'utf8'))

const componentSources = [
  ['agencyAgents', 'dsh-agency-agents-tonulls', 'dsh-agency-agents-tonulls', 'src/index.js'],
  ['aks', 'dsh-AKS-tonulls', 'dsh-aks-tonulls', 'src/index.js'],
  ['anthropicCybersecurity', 'dsh-anthropic-cybersecurity-skills-tonulls', 'dsh-anthropic-cybersecurity-skills-tonulls', 'src/index.js'],
  ['archify', 'dsh-archify-tonulls', 'dsh-archify-tonulls', 'lib/index.js'],
  ['astryx', 'dsh-astryx-tonulls', 'dsh-astryx-tonulls', 'src/index.js'],
  ['awesomeCursorRules', 'dsh-awesome-cursorrules-tonulls', 'dsh-awesome-cursorrules-tonulls', 'src/index.js'],
  ['awesomeDesignSkills', 'dsh-awesome-design-skills-tonulls', 'dsh-awesome-design-skills-tonulls', 'src/index.js'],
  ['awesomeMcpServers', 'dsh-awesome-mcp-servers-tonulls', 'dsh-awesome-mcp-servers-tonulls', 'src/index.js'],
  ['browserPlaywrightCodex', 'dsh-browser-playwright-codex-tonulls', 'dsh-browser-playwright-codex-tonulls', 'src/index.js'],
  ['buildYourOwnX', 'dsh-build-your-own-x-tonulls', 'dsh-build-your-own-x-tonulls', 'src/index.js'],
  ['caveman', 'dsh-caveman-tonulls', 'dsh-caveman-tonulls', 'src/index.js'],
  ['claudeCodeSetup', 'dsh-claude-code-setup-tonulls', 'dsh-claude-code-setup-tonulls', 'src/index.js'],
  ['ecc', 'dsh-ECC-tonulls', 'dsh-ecc-tonulls', 'src/index.js'],
  ['emilKowalskiSkills', 'dsh-emil-kowalski-skills-tonulls', 'dsh-emil-kowalski-skills-tonulls', 'src/index.js'],
  ['fancy', 'dsh-fancy-tonulls', 'dsh-fancy-tonulls', 'src/index.js'],
  ['findingUnknownsSkills', 'dsh-finding-unknowns-skills-tonulls', 'dsh-finding-unknowns-skills-tonulls', 'src/index.js'],
  ['grillMe', 'dsh-grill-me-tonulls', 'dsh-grill-me-tonulls', 'src/index.js'],
  ['gsap', 'dsh-gsap-tonulls', 'dsh-gsap-tonulls', 'src/index.js'],
  ['gstack', 'dsh-gstack-tonulls', 'dsh-gstack-tonulls', 'src/index.js'],
  ['humanizer', 'dsh-humanizer-tonulls', 'dsh-humanizer-tonulls', 'src/index.js'],
  ['impeccable', 'dsh-Impeccable-tonulls', 'dsh-impeccable-tonulls', 'index.js'],
  ['last30days', 'dsh-last30days-tonulls', 'dsh-last30days-tonulls', 'lib/index.js'],
  ['lenis', 'dsh-lenis-tonulls', 'dsh-lenis-tonulls', 'src/index.js'],
  ['magicui', 'dsh-magicui-tonulls', 'dsh-magicui-tonulls', 'src/index.js'],
  ['motionReact', 'dsh-motion-react-tonulls', 'dsh-motion-react-tonulls', 'src/index.js'],
  ['p5Brush', 'dsh-p5-brush-tonulls', 'dsh-p5-brush-tonulls', 'src/index.js'],
  ['publicApis', 'dsh-public-apis-tonulls', 'dsh-public-apis-tonulls', 'src/index.js'],
  ['reactBits', 'dsh-react-bits-tonulls', 'dsh-react-bits-tonulls', 'src/index.js'],
  ['specKit', 'dsh-spec-kit-tonulls', 'dsh-spec-kit-tonulls', 'index.js'],
  ['supabase', 'dsh-supabase-tonulls', 'dsh-supabase-tonulls', 'src/index.js'],
  ['superpowers', 'dsh-superpowers-tonulls', 'dsh-superpowers-tonulls', 'src/index.js'],
  ['taste', 'dsh-taste-skill-tonulls', 'dsh-taste-skill-tonulls', 'src/index.js'],
  ['thinkingOrbs', 'dsh-thinking-orbs-tonulls', 'dsh-thinking-orbs-tonulls', 'src/index.js'],
  ['uiUxProMax', 'dsh-ui-ux-pro-max-tonulls', 'dsh-ui-ux-pro-max-tonulls', 'src/index.js'],
  ['vanta', 'dsh-vanta-tonulls', 'dsh-vanta-tonulls', 'src/index.js'],
  ['webSearch', 'dsh-web-search-plugin-tonulls', 'dsh-web-search-plugin-tonulls', 'src/index.js'],
  ['youtubeAgentSkill', 'dsh-youtube-agent-skill-tonulls', 'dsh-youtube-agent-skill-tonulls', 'src/index.js'],
].map(([key, project, packageBase, entry]) => ({ key, project, packageBase, entry }))

const labels = {
  agencyAgents: 'Agency Agents', aks: 'AKS', anthropicCybersecurity: 'Anthropic Cybersecurity Skills', archify: 'Archify',
  astryx: 'Astryx', awesomeCursorRules: 'Awesome Cursor Rules', awesomeDesignSkills: 'Awesome Design Skills',
  awesomeMcpServers: 'Awesome MCP Servers', browserPlaywrightCodex: 'Browser Playwright Codex', buildYourOwnX: 'Build Your Own X',
  caveman: 'Caveman', claudeCodeSetup: 'Claude Code Setup', ecc: 'ECC', emilKowalskiSkills: 'Emil Kowalski Skills',
  fancy: 'Fancy', findingUnknownsSkills: 'Finding Unknowns Skills', grillMe: 'Grill Me', gsap: 'GSAP', gstack: 'GStack',
  humanizer: 'Humanizer', impeccable: 'Impeccable', last30days: 'Last 30 Days', lenis: 'Lenis', magicui: 'Magic UI',
  motionReact: 'Motion React', p5Brush: 'p5 Brush', publicApis: 'Public APIs', reactBits: 'React Bits', specKit: 'Spec Kit',
  supabase: 'Supabase', superpowers: 'Superpowers', taste: 'Taste Skill', thinkingOrbs: 'Thinking Orbs',
  uiUxProMax: 'UI UX Pro Max', vanta: 'Vanta', webSearch: 'Web Search Plugin', youtubeAgentSkill: 'YouTube Agent Skill',
}

const variants = [
  { locale: 'ru', footer: '🛠️ Модифицировано с помощью Codex', description: 'Единый переключатель навыков DSH', command: 'Включить или выключить автоподбор навыков для текущего Agent.', enabled: 'Автоподбор навыков включён для этого Agent.', disabled: 'Автоподбор навыков выключен для этого Agent.', unavailable: 'Общий переключатель навыков недоступен для этого Agent.', usage: 'Формат: /dsh-tonulls on|off', partial: 'Не удалось переключить навыки: {components}. Повторите команду.', installHeading: 'Установка', installLabel: 'Установите пакет из GitHub:', summary: 'Один bundle объединяет 37 проектов с навыками для разработки, дизайна, исследований, безопасности и инструментов. `/dsh-tonulls on|off` включает или выключает их автоподбор для текущего Agent.' },
  { locale: 'en', footer: '🛠️ Modified with Codex', description: 'Unified DSH skill toggle', command: 'Enable or disable automatic selection of the bundled skills for the current Agent.', enabled: 'Automatic selection is enabled for this Agent.', disabled: 'Automatic selection is disabled for this Agent.', unavailable: 'The skill toggle is unavailable for this Agent.', usage: 'Usage: /dsh-tonulls on|off', partial: 'Could not toggle skills: {components}. Retry the command.', installHeading: 'Install', installLabel: 'Install the package from GitHub:', summary: 'One bundle combines 37 skill projects for development, design, research, security, and tools. `/dsh-tonulls on|off` enables or disables automatic selection for the current Agent.' },
  { locale: 'zh', footer: '🛠️ 使用 Codex 修改', description: 'DSH 技能统一开关', command: '为当前 Agent 启用或停用 bundle 技能的自动选择。', enabled: '已为当前 Agent 启用技能自动选择。', disabled: '已为当前 Agent 停用技能自动选择。', unavailable: '当前 Agent 的技能总开关不可用。', usage: '用法：/dsh-tonulls on|off', partial: '无法切换技能：{components}。请重试。', installHeading: '安装', installLabel: '从 GitHub 安装 package：', summary: '一个 bundle 整合 37 个面向开发、设计、研究、安全和工具使用的技能项目。`/dsh-tonulls on|off` 为当前 Agent 启用或停用自动选择。' },
]

function assertWithin(parent, target) {
  const resolvedParent = path.resolve(parent)
  const resolvedTarget = path.resolve(target)
  if (!resolvedTarget.startsWith(`${resolvedParent}${path.sep}`)) throw new Error(`Refusing to use a path outside its expected root: ${resolvedTarget}`)
  return resolvedTarget
}

async function sourcePackage(component, locale) {
  const base = path.resolve(root, '..', componentDirectory, component.project, 'packages')
  const localized = path.join(base, `${component.packageBase}-${locale}`)
  try {
    const manifest = JSON.parse(await readFile(path.join(localized, 'package.json'), 'utf8'))
    if (manifest.name === `${component.packageBase}-${locale}`) return localized
  } catch {}
  const fixed = path.join(base, component.packageBase)
  const manifest = JSON.parse(await readFile(path.join(fixed, 'package.json'), 'utf8'))
  if (manifest.name !== component.packageBase) throw new Error(`Unexpected source package name: ${fixed}`)
  return fixed
}

async function copySourcePackage(variant, component, vendorRoot) {
  const sourceRoot = await sourcePackage(component, variant.locale)
  const manifest = JSON.parse(await readFile(path.join(sourceRoot, 'package.json'), 'utf8'))
  if (typeof manifest.main !== 'string') throw new Error(`Missing source entry: ${sourceRoot}`)
  await stat(assertWithin(sourceRoot, path.resolve(sourceRoot, manifest.main)))
  const targetRoot = assertWithin(vendorRoot, path.join(vendorRoot, component.key))
  await mkdir(targetRoot, { recursive: true })
  await cp(sourceRoot, targetRoot, { recursive: true, force: true, filter(source) {
    const relative = path.relative(sourceRoot, source)
    return relative === '' || (!relative.split(path.sep).some((part) => ['node_modules', 'test', 'tests', 'coverage'].includes(part)) && !relative.endsWith('.tgz'))
  } })
  const readme = path.join(targetRoot, 'README.md')
  const markdown = await readFile(readme, 'utf8')
  const relocated = markdown.replace(/\]\(\.\.\/\.\.\/\.docs\/([^\s)]+)\)/g, (_, document) =>
    `](https://github.com/tonulls/dsh-plugins/blob/tonulls/${encodeURIComponent(componentDirectory)}/${component.project}/.docs/${document})`)
  if (relocated !== markdown) await writeFile(readme, relocated)
}

async function hideBundledSkillsFromUser(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory() && ['src', 'lib', 'vendor'].includes(entry.name)) {
      await hideBundledSkillsFromUser(target)
    } else if (entry.isDirectory() && path.basename(directory) === 'vendor') {
      await hideBundledSkillsFromUser(target)
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      const source = await readFile(target, 'utf8')
      const updated = source.replace(/userInvocable: (?:true|options\.userInvocable !== false)\b/g, 'userInvocable: false')
      if (source !== updated) await writeFile(target, updated)
    }
  }
}

async function adaptComponent(component, vendorRoot) {
  const base = path.join(vendorRoot, component.key)
  const entry = path.join(base, component.entry)
  const providerPath = (subpath) => path.join(base, subpath)
  const replaceProvider = async (subpath, transform, description) => {
    const file = providerPath(subpath)
    const source = await readFile(file, 'utf8')
    const adjusted = transform(source)
    if (adjusted === source) throw new Error(`Could not adapt ${description}: ${file}`)
    await writeFile(file, adjusted)
  }

  if (component.key === 'archify' || component.key === 'last30days') {
    const functionName = component.key === 'archify' ? 'resolveArchifySkillRoot' : 'resolveLast30DaysSkillRoot'
    const packageName = component.key === 'archify' ? 'dsh-archify-tonulls' : 'dsh-last30days-tonulls'
    const source = await readFile(entry, 'utf8')
    const adjusted = source
      .replace("import { createRequire } from 'node:module'\n", '')
      .replace("import { dirname, join } from 'node:path'", "import { dirname, join } from 'node:path'\nimport { fileURLToPath } from 'node:url'")
      .replace(new RegExp(`export function ${functionName}\\(profileBaseUrl\\) \\{[\\s\\S]*?\\n\\}`), `export function ${functionName}() {\n  return join(dirname(fileURLToPath(import.meta.url)), '..', 'skills')\n}`)
    if (adjusted === source) throw new Error(`Could not adapt ${packageName} skill path: ${entry}`)
    await writeFile(entry, adjusted)
  }

  if (component.key === 'gstack' || component.key === 'supabase') {
    const providerFile = component.key === 'gstack' ? 'src/provider.js' : 'src/provider.js'
    await replaceProvider(providerFile, (source) => source.replace(/const invocation = \{ modelInvocable: (?:true|options\.modelInvocable === true), userInvocable: true \}/, 'const invocation = { modelInvocable: options.modelInvocable === true, userInvocable: true }')
      .replace('export function createSkillsProvider(rank) {', 'export function createSkillsProvider(rank, options = {}) {')
      .replace('export function createSupabaseProvider(rank = 600) {', 'export function createSupabaseProvider(rank = 600, options = {}) {'), `${component.key} default-off invocation`)
    if (component.key === 'gstack') {
      const source = await readFile(entry, 'utf8')
      await writeFile(entry, source.replace('createSkillsProvider(SKILL_RANK)', 'createSkillsProvider(SKILL_RANK, { modelInvocable: true })'))
    }
    if (component.key === 'supabase') {
      let source = await readFile(entry, 'utf8')
      source = source.replace("  const routingByAgent = new WeakMap()", "  const routingByAgent = new WeakMap()")
      source = source.replace('createSupabaseProvider(SKILL_RANK)', 'createSupabaseProvider(SKILL_RANK, { modelInvocable: true })')
      await writeFile(entry, source)
    }
    return
  }

  if (component.key === 'ecc') {
    let source = await readFile(entry, 'utf8')
    source = source.replace("import { registerModeCommands } from './mode-provider.js'", "import { createModeCommandDefinitions } from './mode-provider.js'")
    source = source.replace(/yield registerModeCommands\(ctx, \{[\s\S]*?\n    \}\)/, `for (const definition of createModeCommandDefinitions({ descriptionLocale: BUNDLE_DESCRIPTION_LOCALE, getRouting: (agent) => routingByAgent.get(agent) })) {\n      yield ctx.commands.register(definition)\n    }`)
    if (source === await readFile(entry, 'utf8')) throw new Error(`Could not adapt ECC commands: ${entry}`)
    await writeFile(entry, source)
    await replaceProvider('src/routing.js', (routing) => routing.replace(
      'const MODE_COMMAND = /^\\/dsh-ecc-(agents|skills|commands|tonulls)\\s+(on|off)$/i',
      'const MODE_COMMAND = /$a/',
    ), 'ECC internal command routing')
  }

  if (component.key === 'impeccable') {
    await replaceProvider('index.js', (source) => source.replaceAll('invocation: { modelInvocable: true, userInvocable: true }', 'invocation: { modelInvocable: true, userInvocable: false }'), 'Impeccable direct invocation')
    return
  }
  if (component.key === 'specKit') {
    await replaceProvider('index.js', (source) => source.replaceAll('invocation: { modelInvocable: true, userInvocable: true }', 'invocation: { modelInvocable: true, userInvocable: false }'), 'Spec Kit direct invocation')
  }
}

for (const variant of variants) {
  const name = `${baseName}-${variant.locale}`
  const target = assertWithin(generatedRoot, path.join(generatedRoot, name))
  const expectedTarget = path.resolve(generatedRoot, name)
  if (target !== expectedTarget) throw new Error(`Unexpected generated package path: ${target}`)
  await mkdir(target, { recursive: true })

  const vendorRoot = assertWithin(target, path.join(target, 'vendor'))
  if (vendorRoot !== path.resolve(target, 'vendor')) throw new Error(`Unexpected vendor path: ${vendorRoot}`)
  await rm(vendorRoot, { recursive: true, force: true })
  await mkdir(vendorRoot, { recursive: true })

  for (const component of componentSources) {
    await copySourcePackage(variant, component, vendorRoot)
    await adaptComponent(component, vendorRoot)
    await hideBundledSkillsFromUser(path.join(vendorRoot, component.key))
  }
  for (const [sourceFile, targetFile] of [
    ['src/index.js', 'src/index.js'],
    ['LICENSE', 'LICENSE'],
    ['.docs/LICENSES.package.md', 'LICENSES.md'],
    ['.docs/NOTICE.package.md', 'NOTICE.md'],
  ]) {
    const source = path.resolve(root, sourceFile)
    const destination = assertWithin(target, path.join(target, targetFile))
    await mkdir(path.dirname(destination), { recursive: true })
    await cp(source, destination, { recursive: true, force: true })
  }

  const manifest = { ...template, name, version: '0.1.0', description: variant.description }
  await writeFile(path.join(target, 'package.json'), `${JSON.stringify(manifest, null, 2)}\n`)

  const patch = (await readFile(path.join(root, 'cordis.patch.yml'), 'utf8')).replaceAll('dsh-tonulls-ru', name)
  await writeFile(path.join(target, 'cordis.patch.yml'), patch)

  const localeSource = [
    `export const locale = ${JSON.stringify(variant.locale)}`,
    `export const componentLabels = Object.freeze(${JSON.stringify(labels, null, 2)})`,
    `export const strings = Object.freeze(${JSON.stringify({
      command: variant.command,
      enabled: variant.enabled,
      disabled: variant.disabled,
      unavailable: variant.unavailable,
      usage: variant.usage,
      partial: variant.partial,
    }, null, 2)})`,
    '',
  ].join('\n')
  await writeFile(path.join(target, 'src/locale.js'), localeSource)

  const fence = '`'.repeat(3)
  const publicInstall = `dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-tonulls/packages/${name}'`
  const readme = [`# ${name}`, '', variant.summary, '', `## ${variant.installHeading}`, '', variant.installLabel, '', `${fence}sh`, publicInstall, fence, '', variant.footer, ''].join('\n')
  await writeFile(path.join(target, 'README.md'), readme)
}
