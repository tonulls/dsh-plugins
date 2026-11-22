# Installation and maintenance

Install one language package per profile: all variants share the Cordis plugin id `astryx-tonulls`.

## Install

Example for the English package in profile `web`:

```sh
dsh plugin --profile web add 'git+https://github.com/tonulls/dsh-plugins.git#tonulls&path:/dsh-[name]-tonulls/dsh-astryx-tonulls/packages/dsh-astryx-tonulls-en'
```

For Russian or Chinese, change the package path to `dsh-astryx-tonulls-ru` or `dsh-astryx-tonulls-zh`. Then run `dsh web` or restart the active profile.

## Verify

```sh
dsh --version
dsh plugin --profile web list
dsh --profile web --dump-config
```

Look for `dsh-astryx-tonulls-en` in the list and the `astryx-tonulls` Cordis row in the config. An `active` phase confirms plugin activation, not visual output. Load the `astryx` skill from DSH's human-facing skill catalog to confirm the instructions are available.

## Update and remove

```sh
dsh plugin --profile web update dsh-astryx-tonulls-en
dsh plugin --profile web remove dsh-astryx-tonulls-en
```

Substitute the package and profile actually installed. Removing a bundle from the profile does not delete the local checkout.

## Workspace checks

Run `npm test` and `npm run check:variants` from the repository root. Packages have no install/build scripts and install no dependencies.
