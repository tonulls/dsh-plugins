const COMMAND_NAME = "dsh-humanizer-tonulls"
const TEXT = { description: "为当前 Agent 启用或停用 Humanizer 自动选择。", usage: "用法：/dsh-humanizer-tonulls on|off", unavailable: "此 Agent 的 Humanizer 切换器尚未就绪。", on: "已为当前 Agent 启用 Humanizer 自动选择。", off: "已为当前 Agent 停用 Humanizer 自动选择。" }
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
