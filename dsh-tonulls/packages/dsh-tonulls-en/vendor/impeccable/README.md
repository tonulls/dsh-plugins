# dsh-impeccable-tonulls-en

English DSH plugin variant for Impeccable. Plugin metadata and command replies are in English; the bundled skill content follows its upstream language.

## Lifecycle

The example uses the `web` profile; replace it with your profile name.

**Install:**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-Impeccable-tonulls/packages/dsh-impeccable-tonulls-en'
```

**Start or restart the profile** after installation/update:

```sh
dsh web
```

If a running session does not pick up changes, press `Ctrl+C` in its terminal and launch the profile again.

**Verify:** run `dsh --version` and `dsh plugin --profile web list`.

**Use:** in DSH, run `/dsh-impeccable on`, then invoke `/impeccable` or describe a design task. The Skill has no separate process; it runs in the current Agent. `/dsh-impeccable off` disables the skill without stopping DSH or removing the package.

**Update the installed package:**

```sh
dsh plugin --profile web update dsh-impeccable-tonulls-en
```

This forwards the update operation to pnpm in the profile. Restart the profile after updating.

**Stop the host:** press `Ctrl+C` in the terminal running `dsh web`. This does not uninstall the package.

**Remove from the profile:**

```sh
dsh plugin --profile web remove dsh-impeccable-tonulls-en
```

Removal changes profile dependencies but does not delete the local checkout. See the [main README](../../README.md) for complete guidance.

🛠️ Modified with Codex
