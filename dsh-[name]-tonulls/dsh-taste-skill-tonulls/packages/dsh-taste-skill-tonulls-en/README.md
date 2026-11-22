# dsh-taste-skill-tonulls-en

English DSH plugin variant for Taste Skill. The skill description and command replies use English; the upstream skill instructions are also in English.

## Lifecycle

The example uses the `web` profile; replace it with your profile name.

**Install:**

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-taste-skill-tonulls/packages/dsh-taste-skill-tonulls-en'
```

**Start or restart the profile** after installation/update:

```sh
dsh web
```

If the current session does not load the change, press `Ctrl+C` in its terminal and run `dsh web` again.

**Verify:** run `dsh --version`, `dsh --profile web --dump-config`, and `dsh plugin --profile web list`.

**Use:** in DSH, run `/dsh-taste-skill-tonulls on`, then invoke `/design-taste-frontend` or submit a relevant request. The Skill is not a separate process; it runs in the current Agent. `/dsh-taste-skill-tonulls off` disables it only for the current Agent.

**Update the installed package:**

```sh
dsh plugin --profile web update dsh-taste-skill-tonulls-en
```

This forwards the update operation to pnpm in the profile. Restart the profile afterward if needed.

**Stop the host:** press `Ctrl+C` in the terminal running `dsh web`. This does not remove the package from the profile.

**Remove the package from the profile:**

```sh
dsh plugin --profile web remove dsh-taste-skill-tonulls-en
```

Disabling the Skill, stopping DSH, and removing the package are separate actions. See the [main README](../../README.md) for full guidance.

🛠️ Modified with Codex
