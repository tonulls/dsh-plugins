const COMMAND_NAME = 'dsh-archify'
const TEXT = {
  description: 'Включить или выключить автоподбор Skill для текущего Agent.',
  usage: `Формат: /${COMMAND_NAME} on|off`,
  unavailable: 'Переключатель ещё не готов для этого Agent.',
  on: 'Автоподбор включён для этого Agent.',
  off: 'Автоподбор выключен для этого Agent.',
}

export function registerModeCommand(context, { getRouting } = {}) {
  if (typeof context?.commands?.register !== 'function') throw new Error('This bundle requires the DSH commands service')
  return context.commands.register({
    name: COMMAND_NAME,
    description: TEXT.description,
    input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const match = typeof rawInput === 'string' ? /^(on|off)$/i.exec(rawInput.trim()) : null
      if (!match) return { kind: 'error', text: TEXT.usage }
      const routing = getRouting?.(agent)
      if (typeof routing?.setAutomaticSelection !== 'function') return { kind: 'error', text: TEXT.unavailable }
      const enabled = match[1].toLowerCase() === 'on'
      routing.setAutomaticSelection(enabled)
      return { kind: 'success', text: TEXT[enabled ? 'on' : 'off'] }
    },
  })
}
