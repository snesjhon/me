// Regenerates activity.json from GitHub: the 26-week contribution calendar,
// each repo's last commit date, and a cleaned-up feed of recent commits.
// Needs GITHUB_TOKEN (falls back to `gh auth token` locally). No dependencies.
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const root = new URL('..', import.meta.url);
const site = JSON.parse(readFileSync(new URL('site.json', root), 'utf8'));
const { user, exclude = [], feedSize = 10, perRepo = 3 } = site.github;
const out = new URL('activity.json', root);

const token = process.env.GITHUB_TOKEN || execSync('gh auth token', { encoding: 'utf8' }).trim();
const headers = { Authorization: `Bearer ${token}`, 'User-Agent': 'site-activity', Accept: 'application/vnd.github+json' };
const api = async (path, init) => {
  const r = await fetch(`https://api.github.com${path}`, { headers, ...init });
  if (!r.ok) throw new Error(`${r.status} ${path}: ${await r.text()}`);
  return r.json();
};

const iso = (d) => d.toISOString().slice(0, 10);
const today = new Date();
const start = new Date(today);
start.setUTCDate(start.getUTCDate() - 181);
start.setUTCDate(start.getUTCDate() - start.getUTCDay()); // back to Sunday

// 1. Contribution calendar (same numbers as the GitHub profile graph).
const q = `query($u:String!,$from:DateTime!,$to:DateTime!){user(login:$u){contributionsCollection(from:$from,to:$to){contributionCalendar{weeks{contributionDays{date contributionCount}}}}}}`;
const cal = await api('/graphql', {
  method: 'POST',
  body: JSON.stringify({ query: q, variables: { u: user, from: start.toISOString(), to: today.toISOString() } }),
});
if (cal.errors) throw new Error(JSON.stringify(cal.errors));
const days = cal.data.user.contributionsCollection.contributionCalendar.weeks
  .flatMap((w) => w.contributionDays)
  .filter((d) => d.date >= iso(start))
  .map((d) => d.contributionCount);

// 2. Recent commits across public, non-fork repos.
const repos = (await api(`/users/${user}/repos?type=owner&sort=pushed&per_page=50`))
  .filter((r) => !r.fork && !r.private && !exclude.includes(r.name) && r.pushed_at >= start.toISOString());

const clean = (msg) => {
  let t = msg.split('\n')[0].trim();
  if (/^(merge (pull request|branch)|update readme(\.md)?$|wip$|clean ?up$|remove unused files$)/i.test(t)) return null;
  const ver = t.match(/^(?:pkg:\s*|release:?\s*)?v?(\d+\.\d+\.\d+)$/i);
  if (ver) return `Released v${ver[1]}`;
  t = t.replace(/^[a-z]+(\([^)]*\))?!?:\s*/i, '').replace(/\s+/g, ' ');
  if (t.length < 8) return null;
  return t[0].toUpperCase() + t.slice(1);
};

const lastCommit = {};
const commits = [];
for (const r of repos) {
  const list = await api(`/repos/${user}/${r.name}/commits?author=${user}&since=${start.toISOString()}&per_page=100`);
  if (!list.length) continue;
  lastCommit[r.name] = list[0].commit.author.date.slice(0, 10);
  for (const c of list) {
    const text = clean(c.commit.message);
    if (text) commits.push({ date: c.commit.author.date, repo: r.name, text });
  }
}

commits.sort((a, b) => b.date.localeCompare(a.date));
const seen = new Set(), count = {}, feed = [];
for (const c of commits) {
  const key = c.repo + c.text.toLowerCase();
  if (seen.has(key) || (count[c.repo] ?? 0) >= perRepo) continue;
  seen.add(key);
  count[c.repo] = (count[c.repo] ?? 0) + 1;
  feed.push({ date: c.date.slice(0, 10), repo: c.repo, text: c.text });
  if (feed.length >= feedSize) break;
}

const next = { generated: iso(today), start: iso(start), days, total: days.reduce((a, b) => a + b, 0), lastCommit, feed };

// Skip the write when nothing but the date changed, so quiet weeks open no PR.
let prev = {};
try { prev = JSON.parse(readFileSync(out, 'utf8')); } catch {}
const strip = ({ generated, ...rest }) => JSON.stringify(rest);
if (strip(prev) === strip(next)) {
  console.log('activity.json unchanged');
} else {
  const json = JSON.stringify(next, null, 2).replace(/"days": \[[^\]]*\]/, (m) => m.replace(/\s+/g, ''));
  writeFileSync(out, json + '\n');
  console.log(`activity.json: ${next.total} contributions, ${feed.length} feed items, ${repos.length} repos`);
}
