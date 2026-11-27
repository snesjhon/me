# jhonatansalazar.com

A single static page built from two JSON files. No framework, no dependencies.

- `site.json`: everything written by hand (bio, links, current projects, jobs). Edit this.
- `activity.json`: generated from GitHub by `scripts/activity.mjs`. Don't edit by hand; a weekly GitHub Action opens and merges a PR that refreshes it.

```sh
npm run build      # writes dist/
npm run dev        # build and serve dist/ locally
npm run activity   # refresh activity.json (uses GITHUB_TOKEN or `gh auth token`)
```

Vercel runs `node scripts/build.mjs` and serves `dist/` (see `vercel.json`).
