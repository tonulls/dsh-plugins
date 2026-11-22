import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { describe, it } from 'node:test'
import { assertBundleDescriptionLocale } from '../src/locale.js'

const COMPONENT_COUNTS = { agents: 71, skills: 236, commands: 3 }
const COMPONENT_CATALOGS = {
  agents: {
    catalog: 'vendor/agents/assets/agents/catalog.json',
    russian: 'vendor/agents/assets/locales/ru.json',
  },
  skills: {
    catalog: 'vendor/skills/assets/catalog.json',
    russian: 'vendor/skills/assets/locales/ru.json',
  },
  commands: {
    catalog: 'vendor/commands/assets/catalog.json',
    russian: 'vendor/commands/assets/locales/ru.json',
  },
}
const VARIANTS = [
  { locale: 'en', packageName: 'dsh-ecc-tonulls-en', directory: '../' },
  { locale: 'ru', packageName: 'dsh-ecc-tonulls-ru', directory: '../../dsh-ecc-tonulls-ru/' },
  { locale: 'zh', packageName: 'dsh-ecc-tonulls-zh', directory: '../../dsh-ecc-tonulls-zh/' },
]

async function loadVariant(variant) {
  const root = new URL(variant.directory, import.meta.url)
  const [providers, mode] = await Promise.all([
    import(new URL('src/providers.js', root)),
    import(new URL('src/mode-provider.js', root)),
  ])
  return {
    root,
    factories: providers.COMPONENT_PROVIDER_FACTORIES,
    createModeCommandDefinitions: mode.createModeCommandDefinitions,
  }
}

async function collectProviders(variant, options = {}) {
  const { factories, createModeCommandDefinitions } = await loadVariant(variant)
  const providers = new Map()
  for (const component of Object.keys(COMPONENT_COUNTS)) {
    providers.set(component, await factories[component](600, options[component]).list())
  }
  const modeCommands = createModeCommandDefinitions({ getRouting: () => ({ applyCommand: () => true }) })
  return { providers, factories, modeCommands, createModeCommandDefinitions }
}

async function expectedDescriptions(variant, component, catalog, root) {
  if (variant.locale === 'en') {
    return Object.fromEntries(catalog.entries.map((entry) => [entry.name, entry.description]))
  }
  if (variant.locale === 'ru') {
    return JSON.parse(await readFile(new URL(COMPONENT_CATALOGS[component].russian, root), 'utf8'))
  }
  return JSON.parse(await readFile(
    new URL(`../../../scripts/umbrella-locales/zh/${component}.json`, import.meta.url),
    'utf8',
  ))
}

describe('ECC bundle description locales', () => {
  for (const variant of VARIANTS) {
    it(`${variant.locale} package contains only matching locale maps`, async () => {
      const { root } = await loadVariant(variant)
      const actualFiles = await readdir(new URL('src/locales/', root))
      const expectedFiles = Object.keys(COMPONENT_COUNTS)
        .map((component) => `${component}.${variant.locale}.json`)
      assert.deepEqual(actualFiles.sort(), expectedFiles.sort())

      for (const [component, paths] of Object.entries(COMPONENT_CATALOGS)) {
        const catalog = JSON.parse(await readFile(new URL(paths.catalog, root), 'utf8'))
        const actual = JSON.parse(await readFile(
          new URL(`src/locales/${component}.${variant.locale}.json`, root),
          'utf8',
        ))
        const expected = await expectedDescriptions(variant, component, catalog, root)
        const names = catalog.entries.map((entry) => entry.name)
        assert.deepEqual(Object.keys(actual).sort(), names.sort(), `${variant.locale}/${component} keys`)
        for (const name of names) {
          assert.equal(actual[name], expected[name], `${variant.locale}/${component}/${name}`)
          assert.equal(typeof actual[name], 'string')
          assert.ok(actual[name].trim().length > 0)
        }
      }
    })
  }

  it('publishes localized component descriptions and exactly four native bundle controls', async () => {
    for (const variant of VARIANTS) {
      const { providers, modeCommands } = await collectProviders(variant)
      for (const [component, count] of Object.entries(COMPONENT_COUNTS)) {
        const entries = providers.get(component)
        assert.equal(entries.length, count, `${variant.locale}/${component} count`)
        assert.ok(entries.every((entry) => entry.description === entry.localizedDescription[variant.locale]),
          `${variant.locale}/${component} display description must use its selected locale`)
        assert.ok(entries.every((entry) => entry.invocation.userInvocable === false),
          `${variant.locale}/${component} entries must not expand the bundle slash menu`)
        if (variant.locale === 'zh') {
          assert.ok(entries.every((entry) => /\p{Script=Han}/u.test(entry.description)),
            `zh/${component} descriptions must contain Simplified Chinese text`)
        }
      }

      assert.deepEqual(modeCommands.map((command) => command.name).sort(), [
        'dsh-ecc-agents',
        'dsh-ecc-commands',
        'dsh-ecc-skills',
        'dsh-ecc-tonulls',
      ])
      assert.ok(modeCommands.every((command) => command.description.trim().length > 0))
      assert.ok(modeCommands.every((command) => command.input.hint === 'on|off'))
      if (variant.locale === 'ru') {
        assert.ok(modeCommands.every((command) => /\p{Script=Cyrillic}/u.test(command.description)))
      }
      if (variant.locale === 'zh') {
        assert.ok(modeCommands.every((command) => /\p{Script=Han}/u.test(command.description)))
      }
    }
  })

  it('keeps model-invocation options while localizing component descriptions', async () => {
    const zhVariant = VARIANTS.find((variant) => variant.locale === 'zh')
    const { providers } = await collectProviders(zhVariant, { skills: { modelInvocable: true } })
    const entries = providers.get('skills')

    assert.ok(entries.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(entries.every((entry) => entry.invocation.userInvocable === false))
    assert.ok(entries.every((entry) => entry.description === entry.localizedDescription.zh))
  })

  it('keeps native mode-command descriptions localized for each bundle variant', async () => {
    for (const variant of VARIANTS) {
      const { factories, createModeCommandDefinitions } = await loadVariant(variant)
      const provider = factories.agents(600)
      const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-architect')
      const definition = await provider.get(candidate)
      assert.equal(definition.description, candidate.description)
      assert.deepEqual(definition.localizedDescription, candidate.localizedDescription)

      const commands = createModeCommandDefinitions({ getRouting: () => ({ applyCommand: () => true }) })
      const controlCommand = commands.find((command) => command.name === 'dsh-ecc-agents')
      assert.ok(controlCommand.description.trim().length > 0)
      if (variant.locale === 'ru') assert.match(controlCommand.description, /\p{Script=Cyrillic}/u)
      if (variant.locale === 'zh') assert.match(controlCommand.description, /\p{Script=Han}/u)
    }
  })

  it('rejects unsupported bundle description locales', () => {
    assert.throws(() => assertBundleDescriptionLocale('fr'), /unsupported.*locale/i)
  })

  it('uses each bundle package name as its Cordis plugin target', async () => {
    const baseManifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
    const basePatch = await readFile(new URL('../cordis.patch.yml', import.meta.url), 'utf8')
    assert.match(basePatch, new RegExp(`id: ecc-tonulls\\s+name: ${baseManifest.name}`))

    for (const variant of VARIANTS) {
      const { root } = await loadVariant(variant)
      const manifest = JSON.parse(await readFile(new URL('package.json', root), 'utf8'))
      const localeModule = await readFile(new URL('src/locale.js', root), 'utf8')
      const patch = await readFile(new URL('cordis.patch.yml', root), 'utf8')

      assert.equal(manifest.name, variant.packageName)
      assert.ok(manifest.files.includes('src/locales/*.json'))
      assert.match(localeModule, new RegExp(`BUNDLE_DESCRIPTION_LOCALE\\s*=\\s*['"]${variant.locale}['"]`))
      assert.match(patch, new RegExp(`id: ecc-tonulls\\s+name: ${variant.packageName}`))
    }
  })
})
