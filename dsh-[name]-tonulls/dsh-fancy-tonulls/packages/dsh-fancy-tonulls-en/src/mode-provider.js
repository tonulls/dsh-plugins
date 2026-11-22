import { parseModeCommandInput } from './routing.js'

const COMMAND_NAME = 'dsh-fancy-tonulls-en'
const TEXT = {
  description: 'Enable or disable automatic selection of fancy-components for this Agent.',
  usage: `Usage: /${COMMAND_NAME} on|off`,
  unavailable: 'The Fancy Components toggle is not ready for this Agent.',
  on: 'Automatic selection of fancy-components is enabled for this Agent.',
  off: 'Automatic selection of fancy-components is disabled for this Agent.',
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
    throw new Error('dsh-fancy-tonulls-en requires the DSH commands service')
  }
  return context.commands.register(createModeCommandDefinition(options))
}

export { COMMAND_NAME }
