const COMMAND_NAME = "dsh-humanizer-tonulls"
const TEXT = { description: "Включить или выключить автоматический выбор Humanizer для текущего Agent.", usage: "Формат: /dsh-humanizer-tonulls on|off", unavailable: "Переключатель Humanizer ещё не готов для этого Agent.", on: "Автоматический выбор Humanizer включён для этого Agent.", off: "Автоматический выбор Humanizer выключен для этого Agent." }
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
