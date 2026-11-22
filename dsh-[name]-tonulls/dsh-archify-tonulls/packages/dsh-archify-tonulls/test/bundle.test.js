import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { name, PACKAGE_NAME, resolveArchifySkillRoot } from '../lib/index.js';
import { startDeliveryUpdateCheck } from '../skills/archify/bin/delivery-update.mjs';

const here = fileURLToPath(new URL('.', import.meta.url));
const packageRoot = join(here, '..');

async function readPackageFile(relativePath) {
  return readFile(join(packageRoot, relativePath), 'utf8');
}

test('bundle metadata points to the self-contained GitHub package', async () => {
  const manifest = JSON.parse(await readPackageFile('package.json'));
  assert.equal(name, 'archify-tonulls');
  assert.equal(PACKAGE_NAME, manifest.name);
  assert.equal(manifest.version, '0.1.0');
  assert.equal(manifest.engines.node, '^22.19.0 || >=24.0.0');
  assert.equal(manifest.dsh.bundle.patch, './cordis.patch.yml');
  assert.equal(manifest.main, './lib/index.js');
  assert.equal(manifest.peerDependencies['@deepseek-ai/dsh-commands'], '*');
  assert.equal(manifest.exports['./locale/*.json'], './locale/*.json');
  assert.equal(manifest.exports['./icon'], './icon.svg');
  assert.ok(manifest.files.includes('skills'));
  assert.ok(manifest.files.includes('UPSTREAM.json'));
  assert.ok(manifest.files.includes('locale/*.json'));
  assert.ok(manifest.files.includes('icon.svg'));
  assert.equal(manifest.dependencies, undefined);
  assert.equal(manifest.scripts, undefined);
});

test('Cordis patch loads the native per-Agent Skill plugin', async () => {
  const patch = await readPackageFile('cordis.patch.yml');
  assert.match(patch, /name: dsh-archify-tonulls/);
  const entry = await readPackageFile('lib/index.js');
  assert.match(entry, /commands.*agents/);
  assert.match(entry, /agent\/created/);
});

test('package-scoped resolver returns this package’s bundled skills directory', () => {
  const profileBaseUrl = join(here, 'profile.mock');
  const expected = join(packageRoot, 'skills');
  assert.equal(resolveArchifySkillRoot(profileBaseUrl), expected);
  assert.throws(() => resolveArchifySkillRoot(), /missing DSH profile baseUrl/);
});

test('delivery update checks remain disabled unless explicitly enabled', async () => {
  const defaultResult = await startDeliveryUpdateCheck({ env: {} });
  assert.equal(defaultResult.status, 'unavailable');
  assert.equal(defaultResult.reason, 'disabled');

  const overrideResult = await startDeliveryUpdateCheck({
    env: { ARCHIFY_UPDATE_CHECK_ENABLED: '1', ARCHIFY_UPDATE_CHECK_DISABLED: '1' },
  });
  assert.equal(overrideResult.status, 'unavailable');
  assert.equal(overrideResult.reason, 'disabled');
});

test('delivery child exits before network/cache work unless explicitly enabled', () => {
  const childPath = join(packageRoot, 'skills/archify/scripts/delivery-update-child.mjs');
  const stdout = execFileSync(process.execPath, [childPath], {
    encoding: 'utf8',
    env: { ARCHIFY_UPDATE_CHECK_ENABLED: '0' },
    timeout: 5000,
  });
  assert.deepEqual(JSON.parse(stdout), { status: 'silent', reason: 'disabled' });
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

test('skill is user-invoked and rejects persistent global-rule edits', async () => {
  const skill = await readPackageFile('skills/archify/SKILL.md');
  assert.match(skill, /^user-invocable: true$/m);
  assert.doesNotMatch(skill, /^disable-model-invocation: true$/m);
  assert.match(skill, /Do not edit source files, profile configuration, personal\/project skills, or global agent rules\./);
  assert.match(skill, /These are model instructions, not an OS sandbox/);
  assert.doesNotMatch(skill, /add .* to the global rules file/i);
});

test('upstream record pins the verified immutable release asset', async () => {
  const upstream = JSON.parse(await readPackageFile('UPSTREAM.json'));
  assert.equal(upstream.adapterRelease.releaseImmutable, true);
  assert.equal(upstream.adapterRelease.nodeRange, '^22.19.0 || >=24.0.0');
  assert.equal(upstream.adapterRelease.assetBytes, 4481707);
  assert.equal(upstream.adapterRelease.assetSha256,
    'e65d77e4d7ca34562d33f22480b0b4eae2b1e51ef13cd542c2618b228830b20d');
  assert.equal(upstream.adaptationRuntimeTested, false);
});
