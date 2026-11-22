const COMPONENTS = ['agents', 'skills', 'commands']
const MODE_COMMAND = /^\/dsh-ecc-(agents|skills|commands|tonulls)\s+(on|off)$/i

/** Find exact direct-user ECC mode commands; quoted or tool-originated text cannot toggle a session. */
export function parseModeCommands(messages) {
  const commands = []
  for (const message of messages ?? []) {
    if (message?.source?.kind !== 'user' || !Array.isArray(message.content)) continue
    const text = message.content
      .filter((block) => block?.type === 'text' && typeof block.text === 'string')
      .map((block) => block.text)
      .join('\n')
      .trim()
    const match = MODE_COMMAND.exec(text)
    if (match === null) continue
    commands.push({ target: match[1].toLowerCase(), enabled: match[2].toLowerCase() === 'on' })
  }
  return commands
}

/** Parse the native slash-command argument for one known ECC mode target. */
export function parseModeCommandInput(target, rawInput) {
  if (![...COMPONENTS, 'tonulls'].includes(target) || typeof rawInput !== 'string') return undefined
  const match = /^(on|off)$/i.exec(rawInput.trim())
  if (match === null) return undefined
  return { target, enabled: match[1].toLowerCase() === 'on' }
}

/** Install one Agent-scoped controller and model-invocable provider overlays. */
export function installSessionRouting({ context, providerFactories, rank }) {
  const agentContext = context
  const skills = agentContext?.skills
  if (agentContext === undefined || skills === undefined || typeof agentContext.on !== 'function') {
    throw new Error('dsh-ecc-tonulls requires an Agent-scoped context with skills and agent events')
  }

  const active = new Set()
  const disposeProviders = new Map()

  function syncProviders() {
    for (const component of COMPONENTS) {
      const enabled = active.has(component)
      const dispose = disposeProviders.get(component)
      if (enabled && dispose === undefined) {
        const factory = providerFactories[component]
        if (typeof factory !== 'function') throw new Error(`missing ECC provider factory: ${component}`)
        disposeProviders.set(component, agentContext.skills.registerProvider(() => factory(rank, {
          modelInvocable: true,
          userInvocable: false,
        })))
      } else if (!enabled && dispose !== undefined) {
        dispose()
        disposeProviders.delete(component)
      }
    }
  }

  function applyCommand({ target, enabled }) {
    if (target === 'tonulls') {
      active.clear()
      if (enabled) for (const component of COMPONENTS) active.add(component)
    } else if (COMPONENTS.includes(target) && enabled) {
      active.add(target)
    } else if (COMPONENTS.includes(target)) {
      active.delete(target)
    } else {
      return false
    }
    syncProviders()
    return true
  }

  const disposePreStep = agentContext.on('agent/pre-step', async ({ messages }, next) => {
    for (const command of parseModeCommands(messages)) applyCommand(command)
    return next()
  })

  return {
    active,
    applyCommand,
    dispose() {
      disposePreStep?.()
      for (const dispose of disposeProviders.values()) dispose()
      disposeProviders.clear()
      active.clear()
    },
  }
}

/** Create the Cordis plugin mounted under each Agent's scoped context. */
export function createSessionRoutingPlugin({ providerFactories, rank, onController }) {
  function eccSessionRouting(context) {
    const controller = installSessionRouting({ context, providerFactories, rank })
    onController?.(controller)
    context.effect?.(function* () {
      yield () => {
        controller.dispose()
        onController?.(undefined)
      }
    }, 'ecc-session-routing lifecycle')
  }
  eccSessionRouting.inject = ['skills']
  return eccSessionRouting
}

export { COMPONENTS as ECC_COMPONENTS }
