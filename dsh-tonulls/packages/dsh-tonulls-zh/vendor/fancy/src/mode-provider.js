import { parseModeCommandInput } from './routing.js'

const COMMAND_NAME = 'dsh-fancy-tonulls-zh'
const TEXT = {
  description: '为当前 Agent 启用或停用 fancy-components 自动选择。',
  usage: `用法：/${COMMAND_NAME} on|off`,
  unavailable: 'Fancy Components 切换器尚未在此 Agent 中就绪。',
  on: '已为当前 Agent 启用 fancy-components 自动选择。',
  off: '已为当前 Agent 停用 fancy-components 自动选择。',
}

/** Create the native DSH slash command for per-Agent automatic selection. */
export function createModeCommandDefinition({ getRouting } = {}) {
  if (typeof getRouting !== 'function') throw new TypeError('getRouting must be a function')
  return {
    name: COMMAND_NAME,
    description: TEXT.description,
    input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const enabled = parseModeCommandInput(rawInput)
      if (enabled === undefined) return { kind: 'error', text: TEXT.usage }
      const routing = getRouting(agent)
      if (typeof routing?.setAutomaticSelection !== 'function') {
        return { kind: 'error', text: TEXT.unavailable }
      }
      if (!routing.setAutomaticSelection(enabled)) return { kind: 'error', text: TEXT.unavailable }
      return { kind: 'success', text: TEXT[enabled ? 'on' : 'off'] }
    },
  }
}

/** Register the native DSH command and return its disposer. */
export function registerModeCommand(context, options) {
  if (typeof context?.commands?.register !== 'function') {
    throw new Error('dsh-fancy-tonulls-zh requires the DSH commands service')
  }
  return context.commands.register(createModeCommandDefinition(options))
}

export { COMMAND_NAME }
