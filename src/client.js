// The only browser JS: live local time + status, and j/k section jumps.
// window.SITE = { timezone, status } is injected by scripts/build.mjs.
{
  const { timezone: tz, status } = window.SITE;
  const t = document.getElementById('t');
  const st = document.getElementById('st');

  const tick = () => {
    const now = new Date();
    t.textContent = new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', minute: '2-digit' })
      .format(now).toLowerCase().replace(' ', '');
    const h = +new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', hourCycle: 'h23' }).format(now);
    const s = status.filter((x) => x.from <= h).at(-1) || status[0];
    const label = s.text.split(/[.,]/)[0];
    st.textContent = label.length > 28 ? '' : label;
    t.parentElement.title = s.text;
  };
  tick();
  setInterval(tick, 20000);

  addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || (e.key !== 'j' && e.key !== 'k')) return;
    const secs = [...document.querySelectorAll('main > header, main > section, main > footer')];
    const top = (el) => el.getBoundingClientRect().top + scrollY;
    let cur = 0;
    secs.forEach((s, i) => { if (top(s) <= scrollY + 30) cur = i; });
    const next = e.key === 'j' ? Math.min(secs.length - 1, cur + 1) : Math.max(0, cur - 1);
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollTo({ top: top(secs[next]) - 24, behavior: smooth ? 'smooth' : 'auto' });
  });
}
