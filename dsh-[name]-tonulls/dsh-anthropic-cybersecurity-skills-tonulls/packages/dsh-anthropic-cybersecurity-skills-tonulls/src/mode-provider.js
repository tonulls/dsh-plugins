const COMMAND_NAME = 'dsh-anthropic-cybersecurity-skills-tonulls'

const TEXT = {
  description: 'Включить или выключить автоматический выбор навыков анализа журналов для этого Agent.',
  usage: `Формат: /${COMMAND_NAME} on|off`,
  unavailable: 'Переключатель навыков анализа журналов ещё не готов для этого Agent.',
  on: 'Автоматический выбор навыков анализа журналов включён для этого Agent.',
  off: 'Автоматический выбор навыков анализа журналов выключен для этого Agent.',
}

/** Register the native DSH command that controls automatic skill selection. */
export function registerModeCommand(context, { getRouting } = {}) {
  if (typeof context?.commands?.register !== 'function') {
    throw new Error('dsh-anthropic-cybersecurity-skills-tonulls requires the DSH commands service')
  }
  return context.commands.register({
    name: COMMAND_NAME,
    description: TEXT.description,
    input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const mode = typeof rawInput === 'string' ? /^(on|off)$/i.exec(rawInput.trim()) : null
      if (mode === null) return { kind: 'error', text: TEXT.usage }
      const routing = getRouting?.(agent)
      if (typeof routing?.setAutomaticSelection !== 'function') {
        return { kind: 'error', text: TEXT.unavailable }
      }
      const enabled = mode[1].toLowerCase() === 'on'
      routing.setAutomaticSelection(enabled)
      return { kind: 'success', text: TEXT[enabled ? 'on' : 'off'] }
    },
  })
}
