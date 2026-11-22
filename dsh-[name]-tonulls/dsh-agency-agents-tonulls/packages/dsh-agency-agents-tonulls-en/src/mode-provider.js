const COMMAND_NAME = 'dsh-agency-agents-tonulls'

const TEXT = {
  description: 'Enable or disable automatic selection of Agency Agents roles for this Agent.',
  usage: `Usage: /${COMMAND_NAME} on|off`,
  unavailable: 'Agency Agents controls are not ready for this Agent.',
  on: 'Automatic Agency Agents selection enabled for this Agent.',
  off: 'Automatic Agency Agents selection disabled for this Agent.',
}

/** Register the native DSH command that controls automatic role selection. */
export function registerModeCommand(context, { getRouting }) {
  if (typeof context?.commands?.register !== 'function') {
    throw new Error('dsh-agency-agents-tonulls requires the DSH commands service')
  }
  return context.commands.register({
    name: COMMAND_NAME,
    description: TEXT.description,
    input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const mode = typeof rawInput === 'string' ? /^(on|off)$/i.exec(rawInput.trim()) : null
      if (mode === null) return { kind: 'error', text: TEXT.usage }
      const routing = getRouting(agent)
      if (typeof routing?.setAutomaticSelection !== 'function') {
        return { kind: 'error', text: TEXT.unavailable }
      }
      const enabled = mode[1].toLowerCase() === 'on'
      routing.setAutomaticSelection(enabled)
      return { kind: 'success', text: TEXT[enabled ? 'on' : 'off'] }
    },
  })
}
