import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const variants = [
  '../packages/dsh-youtube-agent-skill-tonulls-ru/src/provider.js',
  '../packages/dsh-youtube-agent-skill-tonulls-en/src/provider.js',
  '../packages/dsh-youtube-agent-skill-tonulls-zh/src/provider.js',
]
const expected = ['yt-audit', 'yt-comment', 'yt-package', 'yt-plan', 'yt-script', 'yt-seo', 'yt-shorts']

test('curated YouTube skills are user-invoked and tool-free', async () => {
  for (const modulePath of variants) {
    const { createYouTubeAgentSkillProvider } = await import(modulePath)
    const provider = createYouTubeAgentSkillProvider()
    const summaries = await provider.list()
    assert.deepEqual(summaries.map(({ name }) => name).sort(), expected)
    for (const summary of summaries) {
      assert.equal(summary.invocation.modelInvocable, false)
      assert.equal(summary.invocation.userInvocable, true)
      const skill = await provider.get(summary)
      assert.match(skill.content, /DSH safety and scope/)
      assert.doesNotMatch(skill.content, /~\/\.claude\/|python3|hookscore\.py|title\.py|deadair\.py|retention\.py|chapters\.py|swipe\.py|yt-dlp/)
    }
    const script = await provider.get(summaries.find(({ name }) => name === 'yt-script'))
    assert.match(script.content, /21 formulas/)
    assert.match(script.content, /assess them qualitatively/)
    const hooks = JSON.parse(await readFile(path.join(script.resourceBase.path, 'hooks.json'), 'utf8'))
    assert.equal(hooks.hooks.length, 21)
    const comments = await provider.get(summaries.find(({ name }) => name === 'yt-comment'))
    assert.match(comments.content, /never pin, heart, or reply on the channel yourself/)
    const audit = await provider.get(summaries.find(({ name }) => name === 'yt-audit'))
    assert.match(audit.content, /no retention analyzer/)
  }
})
