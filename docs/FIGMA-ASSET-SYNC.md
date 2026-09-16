# Figma Asset Sync

This repository keeps source assets under `src/assets`. Vite output under `dist/assets` is generated and is intentionally ignored.

## Sync all published assets

Set a valid token in the terminal without committing it:

```bash
export FIGMA_ACCESS_TOKEN="your_new_token"
npm run sync:figma-assets
```

The sync command queries the published components in the configured Figma file, exports them as SVG in batches of 100, stores them under `src/assets/figma`, and writes `src/assets/figma/registry.ts`.

Use another file with:

```bash
FIGMA_FILE_KEY="your_file_key" npm run sync:figma-assets
```

Preview the operation without a token or network request:

```bash
npm run sync:figma-assets -- --dry-run
```

The generated registry and SVG files are source assets and should be reviewed, built, and committed together. Never place the access token in source code, a config file, or Git history.