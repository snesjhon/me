// Build: site.json + activity.json -> dist/index.html, and copy public/ into dist/.
// No dependencies. Run with `node scripts/build.mjs`.
import { readFileSync, writeFileSync, rmSync, mkdirSync, cpSync } from 'node:fs';
import { render, esc } from '../src/render.mjs';

const root = new URL('..', import.meta.url);
const read = (p) => readFileSync(new URL(p, root), 'utf8');

const site = JSON.parse(read('site.json'));
const activity = JSON.parse(read('activity.json'));

const vars = {
  title: esc(site.name),
  description: esc(site.description),
  site: esc(site.site),
  avatar: esc(site.avatar),
  body: render(site, activity),
  client_data: JSON.stringify({ timezone: site.timezone, status: site.status }).replace(/</g, '\\u003c'),
  client_js: read('src/client.js'),
};
const html = read('src/template.html').replace(/\{\{(\w+)\}\}/g, (m, k) => {
  if (!(k in vars)) throw new Error(`template.html uses unknown {{${k}}}`);
  return vars[k];
});

const dist = new URL('dist/', root);
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);
cpSync(new URL('public/', root), dist, { recursive: true });
writeFileSync(new URL('index.html', dist), html);
console.log(`Built dist/index.html (${(html.length / 1024).toFixed(1)} KB)`);
