// Turns site.json + activity.json into the page body. Pure function, no I/O.

const MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const day = (s) => new Date(s + 'T12:00:00Z');
const short = (s) => { const d = day(s); return `${MO[d.getUTCMonth()]} ${d.getUTCDate()}`; };
const months = (s) => { const [y, m] = s.split('-').map(Number); return y * 12 + m; };

const ago = (s, ref) => {
  const n = Math.round((day(ref) - day(s)) / 864e5);
  if (n < 1) return 'today';
  if (n < 2) return 'yesterday';
  if (n < 14) return `${n}d ago`;
  if (n < 60) return `${Math.round(n / 7)}w ago`;
  return `${Math.round(n / 30)}mo ago`;
};

const heatmap = (a) => {
  const max = Math.max(1, ...a.days);
  const level = (v) => (!v ? 0 : v <= max * 0.25 ? 1 : v <= max * 0.6 ? 2 : 3);
  const start = day(a.start);
  const at = (i) => { const d = new Date(start); d.setUTCDate(d.getUTCDate() + i); return d; };
  const cells = a.days.map((v, i) => {
    const d = at(i);
    return `<i data-l="${level(v)}" title="${v} contribution${v === 1 ? '' : 's'} on ${MO[d.getUTCMonth()]} ${d.getUTCDate()}"></i>`;
  }).join('');
  const weeks = Math.ceil(a.days.length / 7);
  let labels = '', prev = -1;
  for (let w = 0; w < weeks; w++) {
    const m = at(w * 7).getUTCMonth();
    labels += `<span>${m !== prev && w < weeks - 2 ? MO[m] : ''}</span>`;
    prev = m;
  }
  const cols = `grid-template-columns:repeat(${weeks},1fr)`;
  return `<div class="heat" style="${cols}">${cells}</div><div class="mon" style="${cols}" aria-hidden="true">${labels}</div>`;
};

export function render(S, A) {
  const ref = A.generated;
  const work = S.work;
  const span = Math.round((months(work[0].end) - months(work.at(-1).start)) / 12);
  const chrono = work.slice().reverse();
  const bar = (w) => `<div class="bar" aria-hidden="true">${chrono.map((x) =>
    `<i class="${x === w ? 'on' : ''}" style="flex:${months(x.end) - months(x.start)}"></i>`).join('')}</div>`;
  const [lead, ...rest] = S.bio.split('. ');
  const status = S.status[0].text.split(/[.,]/)[0];

  return `
<header class="head">
  <img src="${esc(S.avatar)}" alt="${esc(S.name)}" width="56" height="56">
  <div><h1>${esc(S.name)}</h1><p>${esc(S.titles.join(' & '))} · ${esc(S.location.split(',')[0])}</p></div>
  <div class="status" title="Local time in ${esc(S.location)}"><span class="pulse"></span><b id="t"></b><span id="st">${esc(status)}</span></div>
</header>
<p class="bio">${esc(lead)}. <span>${esc(rest.join('. '))}</span></p>
<nav class="links">
  <a class="pri" href="mailto:${esc(S.email)}">Email</a>
  ${S.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join('')}
  <a href="${esc(S.resume)}">Résumé</a>
</nav>

<section>
  <h2><span>Working on</span><a href="https://github.com/${esc(S.github.user)}">All on GitHub →</a></h2>
  <div class="panel">
    <div class="act">
      <div class="n"><b>${A.total} contributions in the last six months</b><span>Updated ${short(ref)}</span></div>
      ${heatmap(A)}
    </div>
    ${S.now.map((p) => {
      const lc = A.lastCommit[p.repo];
      return `<a class="row" href="${esc(p.url)}"><span class="ic">${esc(p.name[0].toUpperCase())}</span><span><b>${esc(p.name)}</b><small>${esc(p.about)}</small></span><span class="meta"><span class="chip${p.status === 'New' ? ' hot' : ''}">${esc(p.status)}</span><br>${lc ? esc(ago(lc, ref)) : ''}</span></a>`;
    }).join('')}
  </div>
</section>

<section>
  <h2><span>Recently</span></h2>
  <ul class="log">${A.feed.map((f) =>
    `<li><time datetime="${esc(f.date)}">${short(f.date)}</time><span class="r">${esc(f.repo)}</span><span>${esc(f.text)}</span></li>`).join('')}</ul>
</section>

<section>
  <h2><span>Previously</span><span>${span} years</span></h2>
  <div class="panel">${work.map((w, i) => `
    <details class="job"${i ? '' : ' open'}>
      <summary><span><b>${esc(w.company)}</b><small>${esc(w.role)}</small></span><span>${w.start.slice(0, 4)}–${w.end.slice(0, 4)}</span></summary>
      <div class="bd"><div>${bar(w)}<ul>${w.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul></div><img src="${esc(w.image)}" alt="${esc(w.company)} screenshot" loading="lazy"></div>
    </details>`).join('')}
  </div>
</section>

<footer>
  <a class="z" href="${esc(S.resume)}">${esc(S.resumeCta[0])} <span>${esc(S.resumeCta[1])} →</span></a>
  <span><kbd>j</kbd> <kbd>k</kbd> to move</span>
</footer>
<p class="foot-note">${esc(S.tagline)}</p>`;
}
