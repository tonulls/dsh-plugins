import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'

const skillRoot = new URL('../packages/skills/assets/skills/design-taste-frontend/', import.meta.url)

class FakeElement {
  constructor(tagName = 'div') {
    this.tagName = tagName.toUpperCase()
    this.children = []
    this.attributes = {}
    this.dataset = {}
    this.style = {}
    this.innerHTML = ''
    this.textContent = ''
  }

  appendChild(child) {
    this.children.push(child)
    return child
  }

  append(...children) {
    this.children.push(...children)
  }

  replaceChildren(...children) {
    this.children = children
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value)
  }
}

function makeDocument() {
  return {
    documentElement: { lang: 'en' },
    createElement: (tagName) => new FakeElement(tagName),
    createElementNS: (_namespace, tagName) => new FakeElement(tagName),
  }
}

test('chart HTML templates escape untrusted labels, sublabels, formatters and notes', async () => {
  const source = await readFile(new URL('assets/charts.js', skillRoot), 'utf8')
  const document = makeDocument()
  const window = {}
  runInNewContext(source, { document, window, getComputedStyle: () => ({ getPropertyValue: () => '' }) })

  const attack = '<img src=x onerror=1>'
  const ring = new FakeElement()
  window.Charts.ring(ring, { value: 0.5, label: attack, sub: '<svg onload=1>' })
  const ringText = ring.children[0].children.at(-1).innerHTML
  assert.ok(ringText.includes('&lt;img src=x onerror=1&gt;'))
  assert.ok(ringText.includes('&lt;svg onload=1&gt;'))
  assert.doesNotMatch(ringText, /<img|<svg/)

  const plan = new FakeElement()
  window.Charts.plan(plan, [{ label: attack, planned: 10, spent: 4 }], {
    format: () => attack,
    note: () => '<svg onload=1>',
  })
  const planText = plan.children[0].children[0].children[0].innerHTML
  assert.ok(planText.includes('&lt;img src=x onerror=1&gt;'))
  assert.ok(planText.includes('&lt;svg onload=1&gt;'))
  assert.doesNotMatch(planText, /<img|<svg/)

  const bullet = new FakeElement()
  window.Charts.bullet(bullet, [{ label: attack, value: 0.4, target: 0.5 }], { format: () => attack })
  const bulletText = bullet.children[0].children[0].innerHTML
  assert.ok(bulletText.includes('&lt;img src=x onerror=1&gt;'))
  assert.doesNotMatch(bulletText, /<img/)
})

test('Stage.split fallback keeps heading input as text nodes', async () => {
  const source = await readFile(new URL('assets/scenes/stage.js', skillRoot), 'utf8')
  const document = { documentElement: new FakeElement('html'), createElement: (tagName) => new FakeElement(tagName) }
  const window = { matchMedia: () => ({ matches: false }) }
  runInNewContext(source, { document, window })

  const heading = new FakeElement('h1')
  heading.textContent = '<img src=x onerror=1> safe'
  const words = window.Stage.split(heading)
  assert.equal(heading.attributes['aria-label'], '<img src=x onerror=1> safe')
  assert.deepEqual(Array.from(words).filter((word) => typeof word !== 'string').map((word) => word.textContent), ['<img', 'src=x', 'onerror=1>', 'safe'])
  assert.equal(heading.innerHTML, '')
})
