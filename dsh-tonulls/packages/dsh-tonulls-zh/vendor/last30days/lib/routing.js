import { createSkillProvider } from './provider.js'

export function createAgentRoutingPlugin({ onController } = {}) {
  function routing(context) {
    if (typeof context?.skills?.registerProvider !== 'function') throw new Error('Bundle routing requires an Agent-scoped skills registry')
    let disposeAutomaticProvider
    const controller = {
      setAutomaticSelection(enabled) {
        if (enabled && disposeAutomaticProvider === undefined) disposeAutomaticProvider = context.skills.registerProvider(() => createSkillProvider({ modelInvocable: true }))
        else if (!enabled && disposeAutomaticProvider !== undefined) { disposeAutomaticProvider(); disposeAutomaticProvider = undefined }
      },
      dispose() { disposeAutomaticProvider?.(); disposeAutomaticProvider = undefined },
    }
    onController?.(controller)
    context.effect?.(function* () { yield () => { controller.dispose(); onController?.(undefined) } }, 'automatic skill selection lifecycle')
  }
  routing.inject = ['skills']
  return routing
}
