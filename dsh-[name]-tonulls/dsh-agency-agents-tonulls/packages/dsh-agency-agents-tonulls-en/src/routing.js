import { createAgencyAgentsProvider } from './provider.js'

/** Install an Agent-scoped provider overlay for automatic role selection. */
export function installSessionRouting({ context, rank, onController }) {
  if (context?.skills === undefined || typeof context.skills.registerProvider !== 'function') {
    throw new Error('Agency Agents routing requires an Agent-scoped skills registry')
  }

  let disposeAutomaticProvider
  function setAutomaticSelection(enabled) {
    if (enabled && disposeAutomaticProvider === undefined) {
      disposeAutomaticProvider = context.skills.registerProvider(() =>
        createAgencyAgentsProvider(rank, { modelInvocable: true }))
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
export function createSessionRoutingPlugin({ rank, onController }) {
  function agencyAgentsRouting(context) {
    const controller = installSessionRouting({ context, rank, onController })
    context.effect?.(function* () {
      yield () => {
        controller.dispose()
        onController?.(undefined)
      }
    }, 'agency-agents session routing lifecycle')
  }
  agencyAgentsRouting.inject = ['skills']
  return agencyAgentsRouting
}
