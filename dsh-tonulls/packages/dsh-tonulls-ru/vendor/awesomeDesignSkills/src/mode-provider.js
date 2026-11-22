const COMMAND_NAME = "dsh-awesome-design-skills-tonulls"
const TEXT = { description: "Включить или выключить автоматический выбор навыков этого bundle для текущего Agent.", usage: "Формат: /dsh-awesome-design-skills-tonulls on|off", unavailable: "Переключатель навыков ещё не готов для этого Agent.", on: "Автоматический выбор навыков включён для этого Agent.", off: "Автоматический выбор навыков выключен для этого Agent." }

export function registerModeCommand(context, { getRouting } = {}) {
  if (typeof context?.commands?.register !== 'function') throw new Error('This bundle requires the DSH commands service')
  return context.commands.register({
    name: COMMAND_NAME,
    description: TEXT.description,
    input: { hint: 'on|off' },
    handler({ agent, rawInput }) {
      const match = typeof rawInput === 'string' ? /^(on|off)$/i.exec(rawInput.trim()) : null
      if (match === null) return { kind: 'error', text: TEXT.usage }
      const routing = getRouting?.(agent)
      if (typeof routing?.setAutomaticSelection !== 'function') return { kind: 'error', text: TEXT.unavailable }
      const enabled = match[1].toLowerCase() === 'on'
      routing.setAutomaticSelection(enabled)
      return { kind: 'success', text: TEXT[enabled ? 'on' : 'off'] }
    },
  })
}
