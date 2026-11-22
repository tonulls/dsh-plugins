import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import { createSkillsProvider } from '../src/provider.js'

const SKILLS_ASSETS = fileURLToPath(new URL('../assets/', import.meta.url))

describe('ECC skills provider', () => {
  it('lists 236 explicitly invoked, model-hidden skills with complete English and Russian descriptions', async () => {
    const provider = createSkillsProvider(600)
    const candidates = await provider.list()
    const ruDescriptions = JSON.parse(await readFile(new URL('../assets/locales/ru.json', import.meta.url), 'utf8'))

    assert.equal(provider.name, 'ecc-skills')
    assert.equal(candidates.length, 236)
    assert.equal(new Set(candidates.map((entry) => entry.name)).size, 236)
    assert.deepEqual(Object.keys(ruDescriptions).sort(), candidates.map((entry) => entry.name).sort())
    assert.ok(candidates.every((entry) => entry.name.startsWith('ecc-')))
    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === false))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === true))
    assert.ok(candidates.every((entry) => entry.source === 'bundled' && entry.rank === 600))
    assert.ok(candidates.every((entry) => entry.localizedDescription.en === entry.description))
    assert.ok(candidates.every((entry) => entry.localizedDescription.ru === ruDescriptions[entry.name]))
    assert.ok(candidates.every((entry) => entry.localizedDescription.ru.trim().length > 0
      && /\p{Script=Cyrillic}/u.test(entry.localizedDescription.ru)))
  })

  it('can expose Skills through a session-scoped routing overlay while the default remains hidden', async () => {
    const provider = createSkillsProvider(600, { modelInvocable: true })
    const candidates = await provider.list()
    const candidate = candidates.find((entry) => entry.name === 'ecc-accessibility')
    const definition = await provider.get(candidate)

    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === true))
    assert.equal(definition.invocation.modelInvocable, true)
    assert.equal((await createSkillsProvider(600).list()).every((entry) => !entry.invocation.modelInvocable), true)
  })

  it('can hide direct skill invocation while retaining automatic model selection', async () => {
    const candidates = await createSkillsProvider(600, {
      modelInvocable: true,
      userInvocable: false,
    }).list()

    assert.ok(candidates.every((entry) => entry.invocation.modelInvocable === true))
    assert.ok(candidates.every((entry) => entry.invocation.userInvocable === false))
  })

  it('loads one DSH-wrapped skill and keeps its markdown resources local', async () => {
    const provider = createSkillsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-accessibility')
    const definition = await provider.get(candidate)

    assert.ok(candidate)
    assert.equal(definition.name, 'ecc-accessibility')
    assert.deepEqual(definition.localizedDescription, candidate.localizedDescription)
    assert.match(definition.content, /current DSH session/)
    assert.match(definition.content, /does not install, download, or execute upstream scripts/)
    assert.match(definition.content, /References to other ECC Skills, Commands, agents, or slash commands are not proof/)
    assert.match(definition.content, /skills\/accessibility\/SKILL\.md/)
    assert.match(definition.resourceBase.path, /assets[\\/]skills[\\/]accessibility$/)
    assert.deepEqual(definition.resourceBase, candidate.resourceBase)
  })

  it('withholds deprecated, vendor-specific, executable, and high-impact skills with recorded reasons', async () => {
    const catalog = JSON.parse(await readFile(new URL('../assets/catalog.json', import.meta.url), 'utf8'))
    const withheld = new Map(catalog.excluded.map((entry) => [entry.name, entry.reason]))
    const visible = new Set(catalog.entries.map((entry) => entry.name))

    assert.equal(catalog.entries.length, 236)
    assert.equal(catalog.excluded.length, 87)
    const reviewedExclusions = [
      'continuous-learning', 'repo-scan', 'configure-ecc', 'agent-payment-x402', 'autonomous-agent-harness',
      'autonomous-loops', 'canary-watch', 'ck', 'config-gc', 'cost-tracking', 'data-scraper-agent', 'exa-search',
      'fal-ai-media', 'git-workflow', 'hookify-rules', 'jira-integration', 'laravel-plugin-discovery',
      'plankton-code-quality', 'security-scan', 'skill-comply', 'skill-stocktake', 'social-publisher',
      'taste-distillation', 'ui-to-vue', 'opensource-pipeline', 'unified-memory', 'token-card', 'angular-developer',
      'codehealth-mcp', 'nutrient-document-processing', 'continuous-learning-v2', 'delivery-gate', 'plan-canvas',
      'rules-distill', 'e2e-testing', 'ecc-tools-cost-audit', 'i18n-sync', 'mcp-server-patterns', 'osint-investigation',
      'counterparty-channel-discipline',
      'master-agreement-generator', 'operator-approval-loop',
      'github-ops', 'crosspost', 'x-api', 'homelab-wireguard-vpn', 'homelab-pihole-dns', 'safety-guard',
      'knowledge-ops', 'strategic-compact', 'agentic-os', 'story-lifecycle', 'tinystruct-patterns',
      'flox-environments', 'blueprint', 'gateguard', 'ito-baskets', 'ito-compute', 'ito-inference',
      'ito-training', 'mailtrap-email-integration', 'skill-scout', 'search-first', 'deep-research',
      'eval-harness', 'dmux-workflows', 'terminal-opener', 'taste-application', 'gan-style-harness',
      'council-multi-model', 'ios-icon-gen', 'nanoclaw-repl', 'skill-host-compat',
      'ecc-guide', 'agent-self-evaluation', 'documentation-lookup', 'deepseek-harness-setup',
      'inherit-legacy-style', 'team-builder', 'frontend-design-direction', 'taste', 'tasteforge-video',
      'recsys-pipeline-architect', 'windows-desktop-e2e', 'claude-devfleet', 'dev-team', 'continuous-agent-loop',
    ]
    for (const name of reviewedExclusions) {
      assert.ok(!visible.has(`ecc-${name}`), `${name} must remain withheld`)
      assert.match(withheld.get(name) ?? '', /./, `${name} requires an explicit reason`)
    }
    assert.match(withheld.get('continuous-learning'), /deprecated/)
    assert.match(withheld.get('repo-scan'), /third-party skill/)
    assert.match(withheld.get('configure-ecc'), /other harnesses/)
    assert.match(withheld.get('agent-payment-x402'), /wallet\/private-key/)
    assert.match(withheld.get('social-publisher'), /publish content/)
    assert.match(withheld.get('git-workflow'), /force-pushes/)
    assert.match(withheld.get('github-ops'), /GitHub issue\/PR operations/)
    assert.match(withheld.get('homelab-wireguard-vpn'), /privileged system\/network changes/)
    assert.match(withheld.get('safety-guard'), /Claude PreToolUse hooks/)
    assert.match(withheld.get('story-lifecycle'), /unbundled ledger\.js helper/)
    assert.match(withheld.get('ito-compute'), /procurement RFQs/)
    assert.match(withheld.get('deep-research'), /Firecrawl\/Exa MCP tools/)
    assert.match(withheld.get('terminal-opener'), /inherit all caller environment variables/)
    assert.match(withheld.get('taste-application'), /paid provider jobs/)
    assert.match(withheld.get('deepseek-harness-setup'), /DSH hook configuration/)
    assert.match(withheld.get('team-builder'), /Claude CLI/)
    assert.match(withheld.get('frontend-design-direction'), /UIZZE MCP/)
    assert.match(withheld.get('taste'), /withheld Taste video-editing\/Remotion stack/)
    assert.match(withheld.get('tasteforge-video'), /withheld Taste pipeline Skills/)
    assert.match(withheld.get('recsys-pipeline-architect'), /npx skills add/)
    assert.match(withheld.get('windows-desktop-e2e'), /drives a Windows desktop UI/)
    assert.match(withheld.get('claude-devfleet'), /mutating Claude MCP configuration/)
    assert.match(withheld.get('dev-team'), /four independent subagents/)
    assert.match(withheld.get('continuous-agent-loop'), /bounded execution/)
  })

  it('retains markdown references without bundling executable helpers', async () => {
    const catalog = JSON.parse(await readFile(new URL('../assets/catalog.json', import.meta.url), 'utf8'))

    assert.ok(catalog.assets.includes('skills/brand-voice/references/voice-profile-schema.md'))
    assert.ok(catalog.assets.every((file) => file.endsWith('.md')))
    assert.ok(!catalog.assets.some((file) => file.endsWith('.js') || file.endsWith('.sh') || file.endsWith('.py')))
  })

  it('keeps every local Markdown resource link inside the bundled asset set', async () => {
    const catalog = JSON.parse(await readFile(path.join(SKILLS_ASSETS, 'catalog.json'), 'utf8'))
    const bundled = new Set(catalog.assets)
    const broken = []

    for (const file of catalog.assets.filter((asset) => asset.endsWith('.md'))) {
      const content = (await readFile(path.join(SKILLS_ASSETS, ...file.split('/')), 'utf8'))
        .replace(/```[\s\S]*?```/g, '')
      for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
        const value = match[1].trim()
        const target = value.startsWith('<') && value.includes('>')
          ? value.slice(1, value.indexOf('>'))
          : value.split(/\s+/, 1)[0]
        if (!target || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(target)) continue

        let pathname
        try {
          pathname = decodeURIComponent(target.split(/[?#]/, 1)[0])
        } catch {
          broken.push({ file, target, reason: 'invalid URI encoding' })
          continue
        }
        if (!pathname) continue
        if (pathname.startsWith('/')) {
          broken.push({ file, target, reason: 'absolute local path' })
          continue
        }

        const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(file), pathname))
        const exists = pathname.endsWith('/')
          ? [...bundled].some((asset) => asset.startsWith(`${resolved}/`))
          : bundled.has(resolved)
        if (!exists) broken.push({ file, target, resolved })
      }
    }

    assert.deepEqual(broken, [])
  })

  it('does not load a different or stale candidate', async () => {
    const provider = createSkillsProvider(600)
    const candidate = (await provider.list()).find((entry) => entry.name === 'ecc-accessibility')

    assert.equal(await provider.get({ name: 'ecc-other', provider: 'ecc-skills', locator: 'skills/accessibility/SKILL.md' }), undefined)
    assert.equal(await provider.get({ ...candidate, locator: 'skills/../../outside/SKILL.md' }), undefined)
  })

  it('honors an aborted catalog lookup', async () => {
    const provider = createSkillsProvider(600)
    const controller = new AbortController()
    controller.abort(new Error('cancelled'))

    await assert.rejects(provider.list({ signal: controller.signal }), /cancelled/)
  })

  it('is packaged as a standalone DSH component with MIT notice', async () => {
    const manifest = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
    const patch = await readFile(new URL('../cordis.patch.yml', import.meta.url), 'utf8')
    const license = await readFile(new URL('../LICENSES.md', import.meta.url), 'utf8')

    assert.equal(manifest.name, 'dsh-ecc-skills')
    assert.equal(manifest.private, true)
    assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml')
    assert.ok(manifest.files.includes('assets/catalog.json'))
    assert.ok(manifest.files.includes('assets/locales'))
    assert.match(patch, /name: dsh-ecc-skills/)
    assert.match(license, /Copyright \(c\) 2026 Affaan Mustafa/)
    assert.equal(manifest.dependencies?.['dsh-ecc-skills'], undefined)
  })
})
