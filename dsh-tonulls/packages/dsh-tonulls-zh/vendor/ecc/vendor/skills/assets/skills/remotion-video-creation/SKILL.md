# Remotion video creation

Use this ECC adaptation to prepare and render a local video in a Remotion project. Start by confirming the requested resolution, duration, frame rate, and available local assets.

1. Inspect the workspace for an existing Remotion project and its locked dependencies. If the renderer or browser is missing, explain what is required and ask before installing it.
2. Create or update a TSX composition using `Composition` and `registerRoot`. Use `useCurrentFrame()` for animation and `Sequence` for timing. Keep images, captions, and audio local.
3. From the project directory, select the composition and render it with the already installed CLI. For a pnpm project with entry point `src/index.ts` and composition ID `Preview`:

   ```sh
   pnpm exec remotion render src/index.ts Preview out/preview.mp4 --codec=h264 --overwrite=false
   ```

4. Check that the output exists and inspect its duration, dimensions, and streams. If FFprobe is available, use it to verify playback metadata. Report the output path only after the render succeeds.

Use [the Remotion render reference](https://www.remotion.dev/docs/cli/render) for options. This skill provides instructions. Rendering uses the project's own local tools.
