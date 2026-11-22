const COMMAND_NAME = 'dsh-agency-agents-tonulls'

const TEXT = {
  description: '启用或停用当前 Agent 对 Agency Agents 角色的自动选择。',
  usage: `用法：/${COMMAND_NAME} on|off`,
  unavailable: '当前 Agent 的 Agency Agents 控制尚未就绪。',
  on: '已为当前 Agent 启用 Agency Agents 角色自动选择。',
  off: '已为当前 Agent 停用 Agency Agents 角色自动选择。',
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
