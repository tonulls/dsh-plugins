import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { name, PACKAGE_NAME, resolveLast30DaysSkillRoot } from '../lib/index.js';

const here = fileURLToPath(new URL('.', import.meta.url));
const packageRoot = join(here, '..');

async function readPackageFile(relativePath) {
  return readFile(join(packageRoot, relativePath), 'utf8');
}

test('bundle metadata declares a self-contained GitHub package', async () => {
  const manifest = JSON.parse(await readPackageFile('package.json'));
  assert.equal(name, 'last30days-tonulls');
  assert.equal(PACKAGE_NAME, manifest.name);
  assert.equal(manifest.version, '0.1.0');
  assert.equal(manifest.private, true);
  assert.equal(manifest.engines.node, '>=24.9.0');
  assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(manifest.main, './lib/index.js');
  assert.equal(manifest.peerDependencies['@deepseek-ai/dsh-commands'], '*');
  assert.equal(manifest.dependencies, undefined);
  assert.equal(manifest.scripts, undefined);
  assert.equal(manifest.exports['./locale/*.json'], './locale/*.json');
  assert.equal(manifest.exports['./icon'], './icon.svg');
  assert.ok(manifest.files.includes('skills'));
  assert.ok(manifest.files.includes('UPSTREAM.json'));
  assert.ok(manifest.files.includes('locale/*.json'));
  assert.ok(manifest.files.includes('icon.svg'));
});

test('Cordis patch loads the native per-Agent Skill plugin', async () => {
  const patch = await readPackageFile('cordis.patch.yml');
  assert.match(patch, /name: dsh-last30days-tonulls/);
  const entry = await readPackageFile('lib/index.js');
  assert.match(entry, /commands.*agents/);
  assert.match(entry, /agent\/created/);
});

test('package-scoped resolver returns this package’s bundled skills directory', () => {
  const profileBaseUrl = join(here, 'profile.mock');
  assert.equal(resolveLast30DaysSkillRoot(profileBaseUrl), join(packageRoot, 'skills'));
  assert.throws(() => resolveLast30DaysSkillRoot(), /missing DSH profile baseUrl/);
});

test('Skill is user-invoked and states narrow, read-only boundaries', async () => {
  const skill = await readPackageFile('skills/last30days/SKILL.md');
  assert.match(skill, /^user-invocable: true$/m);
  assert.doesNotMatch(skill, /^disable-model-invocation: true$/m);
  assert.match(skill, /Use only the existing `web_search` and `web_fetch` tools/);
  assert.match(skill, /Do not read or write local files/);
  assert.match(skill, /Never fetch localhost, private\/intranet addresses/);
  assert.match(skill, /If the session does not provide a reliable current UTC time/);
  assert.match(skill, /These are model instructions, not an OS sandbox/);
  assert.match(skill, /not a port of the upstream engine/);
});

test('display metadata and icon are complete for all supported locales', async () => {
  for (const locale of ['en', 'ru', 'zh']) {
    const metadata = JSON.parse(await readPackageFile(`locale/${locale}.json`));
    assert.ok(metadata.meta.title.length > 0);
    assert.ok(metadata.meta.description.length > 0);
  }
  const icon = await readPackageFile('icon.svg');
  assert.match(icon, /^<svg\s/);
  assert.ok(Buffer.byteLength(icon) <= 256 * 1024);
});

test('package README documents GitHub-only installation and automatic selection', async () => {
  const readme = await readPackageFile('README.md');
  assert.match(readme, /git\+https:\/\/github\.com\/tonulls\/dsh-plugins\.git/);
  assert.doesNotMatch(readme, /file:/);
  assert.match(readme, /\/dsh-last30days on/);
  assert.match(readme, /\/dsh-last30days off/);
});

test('upstream record and notice state provenance without copying code', async () => {
  const upstream = JSON.parse(await readPackageFile('UPSTREAM.json'));
  assert.equal(upstream.reviewedMainHead.commit, '8ede659374b298ffb0529e13b802c0bd9637f769');
  assert.equal(upstream.latestReleaseAtReview.tag, 'v4.5.0');
  assert.equal(upstream.latestReleaseAtReview.immutable, false);
  assert.equal(upstream.upstreamLicense, 'MIT');
  assert.equal(upstream.upstreamCodeOrTextCopied, false);
  assert.equal(upstream.adaptationRuntimeTested, false);

  const notice = await readPackageFile('NOTICE.md');
  assert.match(notice, /## Русский/);
  assert.match(notice, /## English/);
  assert.match(notice, /## 简体中文/);
  assert.match(notice, /does not include upstream code, Skill text, scripts, assets, API clients, or data/);
});
