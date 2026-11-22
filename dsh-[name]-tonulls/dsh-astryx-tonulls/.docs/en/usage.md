# Using the Astryx skill

After activation, the DSH skill registry should discover `astryx`. Select it in the skill catalog/commands UI or ask the current Agent to use Astryx for a React project. The skill checks project instructions and versions, then points to the installed CLI's reference.

Example CLI lookups (only if the CLI is already present in the target project):

```sh
pnpm exec astryx --help
pnpm exec astryx manifest --json
pnpm exec astryx search <query> --json
pnpm exec astryx component <exact-selector> --json
pnpm exec astryx hook <name> --json
pnpm exec astryx docs <topic> --json
pnpm exec astryx docs tokens --json
```

First confirm available commands and flags with the installed version's `--help`/`manifest`. These examples are not DSH commands; they run through tools available to the current Agent in the target project.

The skill does not run the CLI, install packages, or generate code. Do not use unscoped `npx astryx`; installing official `@astryxdesign/cli` requires a separate explicit user request and authorization to download/run the package.
