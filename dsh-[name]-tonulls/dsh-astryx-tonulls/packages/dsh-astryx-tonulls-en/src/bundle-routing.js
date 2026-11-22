import { createAstryxProvider } from './provider.js'

/** Install an Agent-scoped provider overlay for model invocation. */
export function installAstryxRouting({ context, rank, onController }) {
  if (typeof context?.skills?.registerProvider !== 'function') {
    throw new Error('Astryx routing requires an Agent-scoped skills registry')
  }

  let modelInvocable = false
  let invalidate
  const disposeProvider = context.skills.registerProvider((control) => {
    invalidate = control.invalidate
    return createAstryxProvider(rank, () => ({ modelInvocable, userInvocable: true }))
  })

  const controller = {
    setAutomaticSelection(enabled) {
      if (typeof enabled !== 'boolean') throw new TypeError('Astryx selection state must be boolean')
      if (modelInvocable === enabled) return
      modelInvocable = enabled
      invalidate?.()
    },
    dispose() {
      disposeProvider()
      invalidate = undefined
    },
  }
  onController?.(controller)
  return controller
}

/** Create the plugin mounted under each DSH Agent. */
export function createAstryxRoutingPlugin({ rank, onController }) {
  function astryxRouting(context) {
    const controller = installAstryxRouting({ context, rank, onController })
    context.effect?.(function* () {
      yield () => {
        controller.dispose()
        onController?.(undefined)
      }
    }, 'Astryx per-Agent routing lifecycle')
  }
  astryxRouting.inject = ['skills']
  return astryxRouting
}
