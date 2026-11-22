const COMMAND_NAME = "dsh-humanizer-tonulls"
const TEXT = { description: "Enable or disable automatic Humanizer selection for the current Agent.", usage: "Usage: /dsh-humanizer-tonulls on|off", unavailable: "The Humanizer selector is not ready for this Agent.", on: "Automatic Humanizer selection is enabled for this Agent.", off: "Automatic Humanizer selection is disabled for this Agent." }
export function registerModeCommand(context, { getRouting } = {}) {
  if (typeof context?.commands?.register !== 'function') throw new Error('Humanizer requires the DSH commands service')
  return context.commands.register({ name: COMMAND_NAME, description: TEXT.description, input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const match = typeof rawInput === 'string' ? /^(on|off)$/i.exec(rawInput.trim()) : null
      if (!match) return { kind: 'error', text: TEXT.usage }
      const routing = getRouting?.(agent)
      if (typeof routing?.setAutomaticSelection !== 'function') return { kind: 'error', text: TEXT.unavailable }
      const enabled = match[1].toLowerCase() === 'on'; routing.setAutomaticSelection(enabled)
      return { kind: 'success', text: TEXT[enabled ? 'on' : 'off'] }
    },
  })
}
