import { createFancyProvider } from './provider.js'

/** Parse one exact native DSH command argument. */
export function parseModeCommandInput(rawInput) {
  if (typeof rawInput !== 'string') return undefined
  const match = /^(on|off)$/i.exec(rawInput.trim())
  if (match === null) return undefined
  return match[1].toLowerCase() === 'on'
}

/** Add the automatic-invocation overlay to one Agent's skills layer. */
export function installSessionRouting({ context, rank }) {
  const skills = context?.skills
  if (skills === undefined || typeof skills.registerProvider !== 'function') {
    throw new Error('Fancy automatic selection requires an Agent-scoped skills registry')
  }

  let disposeAutomaticProvider
  let disposed = false

  function setAutomaticSelection(enabled) {
    if (typeof enabled !== 'boolean' || disposed) return false
    if (enabled && disposeAutomaticProvider === undefined) {
      disposeAutomaticProvider = skills.registerProvider(() =>
        createFancyProvider(rank, { modelInvocable: true }))
    } else if (!enabled && disposeAutomaticProvider !== undefined) {
      const dispose = disposeAutomaticProvider
      disposeAutomaticProvider = undefined
      dispose()
    }
    return true
  }

  function dispose() {
    if (disposed) return
    disposed = true
    const disposeProvider = disposeAutomaticProvider
    disposeAutomaticProvider = undefined
    disposeProvider?.()
  }

  return { setAutomaticSelection, dispose }
}

/** Create the per-Agent Cordis plugin that owns the automatic overlay. */
export function createSessionRoutingPlugin({ rank, onController, onDisposed }) {
  function fancySessionRouting(context) {
    if (typeof context?.effect !== 'function') {
      throw new Error('Fancy automatic selection requires Cordis lifecycle effects')
    }
    const controller = installSessionRouting({ context, rank })
    onController?.(controller)
    context.effect(function* () {
      yield () => {
        controller.dispose()
        onController?.(undefined)
        onDisposed?.()
      }
    }, 'fancy-components Agent routing lifecycle')
  }
  fancySessionRouting.inject = ['skills']
  return fancySessionRouting
}
