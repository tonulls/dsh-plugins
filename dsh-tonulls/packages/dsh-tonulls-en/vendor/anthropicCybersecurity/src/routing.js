import { createAnthropicCybersecurityProvider } from './provider.js'

/** Install an Agent-scoped provider overlay for automatic skill selection. */
export function installSessionRouting({ context, onController } = {}) {
  if (typeof context?.skills?.registerProvider !== 'function') {
    throw new Error('Anthropic Cybersecurity routing requires an Agent-scoped skills registry')
  }

  let disposeAutomaticProvider
  function setAutomaticSelection(enabled) {
    if (enabled && disposeAutomaticProvider === undefined) {
      disposeAutomaticProvider = context.skills.registerProvider(() =>
        createAnthropicCybersecurityProvider({ modelInvocable: true }))
    } else if (!enabled && disposeAutomaticProvider !== undefined) {
      disposeAutomaticProvider()
      disposeAutomaticProvider = undefined
    }
  }

  const controller = {
    setAutomaticSelection,
    dispose() {
      disposeAutomaticProvider?.()
      disposeAutomaticProvider = undefined
    },
  }
  onController?.(controller)
  return controller
}

/** Create the plugin mounted under each DSH Agent. */
export function createSessionRoutingPlugin({ onController } = {}) {
  function cybersecurityRouting(context) {
    const controller = installSessionRouting({ context, onController })
    context.effect?.(function* () {
      yield () => {
        controller.dispose()
        onController?.(undefined)
      }
    }, 'anthropic cybersecurity session routing lifecycle')
  }
  cybersecurityRouting.inject = ['skills']
  return cybersecurityRouting
}
