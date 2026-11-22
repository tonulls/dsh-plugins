const COMMAND_NAME = 'dsh-agency-agents-tonulls'

const TEXT = {
  description: 'Включить или выключить автоматический выбор ролей Agency Agents для этого Agent.',
  usage: `Формат: /${COMMAND_NAME} on|off`,
  unavailable: 'Переключатель Agency Agents ещё не готов для этого Agent.',
  on: 'Автоматический выбор ролей Agency Agents включён для этого Agent.',
  off: 'Автоматический выбор ролей Agency Agents выключен для этого Agent.',
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
