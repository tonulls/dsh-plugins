import { locale, strings, componentLabels } from './locale.js'

export const name = 'dsh-tonulls-umbrella'
export const inject = ['skills', 'agents', 'commands']

export const COMPONENTS = Object.freeze([
  { key: 'agencyAgents', command: 'dsh-agency-agents-tonulls', entry: '../vendor/agencyAgents/src/index.js' },
  { key: 'aks', command: 'dsh-aks-tonulls', entry: '../vendor/aks/src/index.js' },
  { key: 'anthropicCybersecurity', command: 'dsh-anthropic-cybersecurity-skills-tonulls', entry: '../vendor/anthropicCybersecurity/src/index.js' },
  { key: 'archify', command: 'dsh-archify', entry: '../vendor/archify/lib/index.js' },
  { key: 'astryx', command: 'dsh-astryx-tonulls', entry: '../vendor/astryx/src/index.js' },
  { key: 'awesomeCursorRules', command: 'dsh-awesome-cursorrules-tonulls', entry: '../vendor/awesomeCursorRules/src/index.js' },
  { key: 'awesomeDesignSkills', command: 'dsh-awesome-design-skills-tonulls', entry: '../vendor/awesomeDesignSkills/src/index.js' },
  { key: 'awesomeMcpServers', command: 'dsh-awesome-mcp-servers-tonulls', entry: '../vendor/awesomeMcpServers/src/index.js' },
  { key: 'browserPlaywrightCodex', command: 'dsh-browser-playwright-codex-tonulls', entry: '../vendor/browserPlaywrightCodex/src/index.js' },
  { key: 'buildYourOwnX', command: 'dsh-build-your-own-x-tonulls', entry: '../vendor/buildYourOwnX/src/index.js' },
  { key: 'caveman', command: 'dsh-caveman-tonulls', entry: '../vendor/caveman/src/index.js' },
  { key: 'claudeCodeSetup', command: 'dsh-claude-code-setup-tonulls', entry: '../vendor/claudeCodeSetup/src/index.js' },
  { key: 'ecc', command: 'dsh-ecc-tonulls', entry: '../vendor/ecc/src/index.js' },
  { key: 'emilKowalskiSkills', command: 'dsh-emil-kowalski-skills-tonulls', entry: '../vendor/emilKowalskiSkills/src/index.js' },
  { key: 'fancy', command: `dsh-fancy-tonulls-${locale}`, entry: '../vendor/fancy/src/index.js' },
  { key: 'findingUnknownsSkills', command: 'dsh-finding-unknowns-skills-tonulls', entry: '../vendor/findingUnknownsSkills/src/index.js' },
  { key: 'grillMe', command: 'dsh-grill-me-tonulls', entry: '../vendor/grillMe/src/index.js' },
  { key: 'gsap', command: 'dsh-gsap-tonulls', entry: '../vendor/gsap/src/index.js' },
  { key: 'gstack', command: 'dsh-gstack-tonulls', entry: '../vendor/gstack/src/index.js' },
  { key: 'humanizer', command: 'dsh-humanizer-tonulls', entry: '../vendor/humanizer/src/index.js' },
  { key: 'impeccable', command: 'dsh-impeccable', entry: '../vendor/impeccable/index.js' },
  { key: 'last30days', command: 'dsh-last30days', entry: '../vendor/last30days/lib/index.js' },
  { key: 'lenis', command: 'dsh-lenis-tonulls', entry: '../vendor/lenis/src/index.js' },
  { key: 'magicui', command: 'dsh-magicui-tonulls', entry: '../vendor/magicui/src/index.js' },
  { key: 'motionReact', command: 'dsh-motion-react-tonulls', entry: '../vendor/motionReact/src/index.js' },
  { key: 'p5Brush', command: 'dsh-p5-brush-tonulls', entry: '../vendor/p5Brush/src/index.js' },
  { key: 'publicApis', command: 'dsh-public-apis-tonulls', entry: '../vendor/publicApis/src/index.js' },
  { key: 'reactBits', command: 'dsh-react-bits-tonulls', entry: '../vendor/reactBits/src/index.js' },
  { key: 'specKit', command: 'dsh-spec-kit-tonulls', entry: '../vendor/specKit/index.js' },
  { key: 'supabase', command: 'dsh-supabase-tonulls', entry: '../vendor/supabase/src/index.js' },
  { key: 'superpowers', command: 'dsh-superpowers-tonulls', entry: '../vendor/superpowers/src/index.js' },
  { key: 'taste', command: 'dsh-taste-skill-tonulls', entry: '../vendor/taste/src/index.js' },
  { key: 'thinkingOrbs', command: 'dsh-thinking-orbs-tonulls', entry: '../vendor/thinkingOrbs/src/index.js' },
  { key: 'uiUxProMax', command: 'dsh-ui-ux-pro-max-tonulls', entry: '../vendor/uiUxProMax/src/index.js' },
  { key: 'vanta', command: 'dsh-vanta-tonulls', entry: '../vendor/vanta/src/index.js' },
  { key: 'webSearch', command: 'dsh-web-search-plugin-tonulls', entry: '../vendor/webSearch/src/index.js' },
  { key: 'youtubeAgentSkill', command: 'dsh-youtube-agent-skill-tonulls', entry: '../vendor/youtubeAgentSkill/src/index.js' },
])

export function parseEnabled(rawInput) {
  if (typeof rawInput !== 'string') return undefined
  const input = rawInput.trim().toLowerCase()
  return input === 'on' ? true : input === 'off' ? false : undefined
}

export async function executeComponentToggles(componentCommands, agent, enabled, signal) {
  const failures = []
  for (let index = 0; index < COMPONENTS.length; index += 1) {
    const component = COMPONENTS[index]
    if (signal?.aborted) { failures.push(...COMPONENTS.slice(index).map(({ key }) => key)); break }
    try {
      const definition = componentCommands.get(component.command)
      if (typeof definition?.handler !== 'function') { failures.push(component.key); continue }
      const result = await definition.handler({ agent, rawInput: enabled ? 'on' : 'off', attachments: [], signal })
      if (result?.kind !== 'success') failures.push(component.key)
    } catch {
      failures.push(component.key)
      if (signal?.aborted) { failures.push(...COMPONENTS.slice(index + 1).map(({ key }) => key)); break }
    }
  }
  return failures
}

export function createToggleCommand(componentCommands) {
  return {
    name: 'dsh-tonulls', description: strings.command, input: { hint: 'on|off' },
    async handler({ agent, rawInput, signal }) {
      const enabled = parseEnabled(rawInput)
      if (enabled === undefined) return { kind: 'error', text: strings.usage }
      const failures = await executeComponentToggles(componentCommands, agent, enabled, signal)
      if (failures.length) {
        const labels = [...new Set(failures)].map((key) => componentLabels[key] ?? key)
        return { kind: 'error', text: strings.partial.replace('{components}', labels.join(', ')) }
      }
      return { kind: 'success', text: strings[enabled ? 'enabled' : 'disabled'] }
    },
  }
}

function captureCommandRegistrations(context, componentCommands) {
  const commands = new Proxy(context.commands, {
    get(target, property) {
      if (property === 'register') return (definition) => {
        if (!definition || typeof definition.name !== 'string' || typeof definition.handler !== 'function') throw new TypeError('Bundled commands require a name and handler')
        if (componentCommands.has(definition.name)) throw new Error(`Duplicate bundled command: ${definition.name}`)
        componentCommands.set(definition.name, definition)
        let disposed = false
        return () => { if (disposed) return; disposed = true; if (componentCommands.get(definition.name) === definition) componentCommands.delete(definition.name) }
      }
      const value = Reflect.get(target, property, target)
      return typeof value === 'function' ? value.bind(target) : value
    },
  })
  return new Proxy(context, { get(target, property) {
    if (property === 'commands') return commands
    const value = Reflect.get(target, property, target)
    return typeof value === 'function' ? value.bind(target) : value
  } })
}

function privatePlugin(plugin, componentCommands) {
  return { ...plugin, apply(context, config) { return plugin.apply(captureCommandRegistrations(context, componentCommands), config) } }
}

export async function mountComponentPlugins(ctx, plugins, componentCommands = new Map()) {
  if (!ctx || typeof ctx.plugin !== 'function') throw new TypeError('A Cordis plugin context is required')
  if (!Array.isArray(plugins) || plugins.length !== COMPONENTS.length) throw new TypeError(`Exactly ${COMPONENTS.length} component plugins are required`)
  const names = new Set()
  const fibers = []
  try {
    for (const plugin of plugins) {
      if (!plugin || typeof plugin.name !== 'string' || typeof plugin.apply !== 'function') throw new TypeError('Each component must export a named Cordis plugin')
      if (names.has(plugin.name)) throw new Error(`Duplicate component plugin: ${plugin.name}`)
      names.add(plugin.name)
      fibers.push(ctx.plugin(privatePlugin(plugin, componentCommands)))
    }
    await Promise.all(fibers.map((fiber) => fiber.await()))
    return fibers
  } catch (error) { await Promise.allSettled(fibers.map((fiber) => fiber.dispose())); throw error }
}

export async function registerBundle(ctx, plugins) {
  if (typeof ctx?.commands?.register !== 'function' || typeof ctx.effect !== 'function') throw new Error('dsh-tonulls requires DSH commands and Cordis lifecycle services')
  const componentCommands = new Map()
  const fibers = await mountComponentPlugins(ctx, plugins, componentCommands)
  try { ctx.effect(function* () { yield ctx.commands.register(createToggleCommand(componentCommands)) }, 'dsh-tonulls master toggle') }
  catch (error) { await Promise.allSettled(fibers.map((fiber) => fiber.dispose())); throw error }
}

export async function apply(ctx) {
  const plugins = await Promise.all(COMPONENTS.map(({ entry }) => import(entry)))
  return registerBundle(ctx, plugins)
}

export { locale }
