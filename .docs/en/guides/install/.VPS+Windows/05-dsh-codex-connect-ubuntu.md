# 5. Codex Connect in the DSH profile on Ubuntu VPS

Codex Connect adds the `openai-codex` provider using ChatGPT authorization. Install it in the intended DSH profile as your regular SSH user. Replace `web` if you use another profile.

## Install

```bash
dsh --version
npm view dsh-codex-connect@latest version engines.node
```

Find your DSH version under `verifiedDshVersions` in the [compatibility matrix](https://github.com/franksong2702/dsh-codex-connect/blob/main/verified-compatibility.json). Use the newest published version verified for that DSH version. If none is published yet, skip installation.

```bash
read -r -p 'Compatible Codex Connect version: ' codex_connect_version
if [ -n "$codex_connect_version" ] &&
   npm view "dsh-codex-connect@$codex_connect_version" version; then
  dsh plugin --profile web add "dsh-codex-connect@$codex_connect_version"
fi
```

Restart DSH if it was running and check that the profile lists the package.

```bash
dsh plugin --profile web list
```

## Update

Repeat version selection for the installed or target DSH version, install that release, and restart DSH.

## Sign in and verify

Start the device-code flow from the VPS if your account supports it.

```bash
dsh plugin --profile web exec dsh-codex-connect login --device-code
```

Open the authorization page in your Windows browser and complete sign-in. Keep the URL and one-time code private. Then select `openai-codex` in DSH.

```bash
dsh plugin --profile web exec dsh-codex-connect doctor --json
dsh plugin --profile web exec dsh-codex-connect status
```

`doctor` checks the local setup and `status` reports sign-in state. Send a small test request in DSH to verify model access.

## Sign out and uninstall

Choose another provider to stop using Codex without signing out. To remove saved Codex Connect authorization, run:

```bash
dsh plugin --profile web exec dsh-codex-connect logout
```

To uninstall the plugin, run the following and restart DSH. If you also want to clear saved authorization, sign out before uninstalling.

```bash
dsh plugin --profile web remove dsh-codex-connect
```

[Codex Connect installation and login guide](https://github.com/franksong2702/dsh-codex-connect/blob/main/INSTALL.md) · [Published npm versions](https://www.npmjs.com/package/dsh-codex-connect?activeTab=versions)
