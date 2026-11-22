import { createHumanizerProvider } from './provider.js'
export function installSessionRouting({ context, onController } = {}) {
  if (typeof context?.skills?.registerProvider !== 'function') throw new Error('Humanizer routing requires an Agent-scoped skills registry')
  let disposeAutomaticProvider
  function setAutomaticSelection(enabled) {
    if (enabled && disposeAutomaticProvider === undefined) disposeAutomaticProvider = context.skills.registerProvider(() => createHumanizerProvider({ modelInvocable: true }))
    else if (!enabled && disposeAutomaticProvider !== undefined) { disposeAutomaticProvider(); disposeAutomaticProvider = undefined }
  }
  const controller = { setAutomaticSelection, dispose() { disposeAutomaticProvider?.(); disposeAutomaticProvider = undefined } }
  onController?.(controller); return controller
}
export function createSessionRoutingPlugin({ onController } = {}) {
  function routing(context) {
    const controller = installSessionRouting({ context, onController })
    context.effect?.(function* () { yield () => { controller.dispose(); onController?.(undefined) } }, 'humanizer automatic selection lifecycle')
  }
  routing.inject = ['skills']; return routing
}
