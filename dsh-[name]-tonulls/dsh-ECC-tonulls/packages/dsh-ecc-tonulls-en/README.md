# dsh-ecc-tonulls-en

The English-description ECC umbrella bundle for DeepSeek Harness (DSH) contains the Agents, Skills, and Commands groups. Its `/` menu exposes four group controls; ECC instructions and resources are not translated.

## Lifecycle

The examples use the `web` profile. Install only one language variant per profile.

**Install:**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-ECC-tonulls/packages/dsh-ecc-tonulls-en'
```

**Start or restart the profile** after installation/update:

```sh
dsh web
```

If a running profile does not pick up the change, press `Ctrl+C` in its terminal and run `dsh web` again.

**Verify:** run `dsh --version`, `dsh --profile web --dump-config`, and `dsh plugin --profile web list`.

**Use:** in DSH, enable automatic selection with `/dsh-ecc-tonulls on`. Skills and commands do not run as separate processes; they are used by the current Agent. `/dsh-ecc-tonulls off` disables automatic selection but does not stop DSH or remove the bundle.

**Update the installed package:**

```sh
dsh plugin --profile web update dsh-ecc-tonulls-en
```

This forwards the update operation to pnpm in the profile. Restart the profile after updating.

**Stop the host:** press `Ctrl+C` in the terminal running `dsh web`. This does not uninstall the bundle.

**Remove from the profile:**

```sh
dsh plugin --profile web remove dsh-ecc-tonulls-en
```

Removal changes profile dependencies but does not delete the local checkout. See the [main README](../../README.md) for complete instructions and other package options.
