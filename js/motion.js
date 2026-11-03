/* ==========================================================================
   Rustige beweging voor webshop en merksite.
   - pagina-fade bij laden
   - getrapte reveal (stagger) van kaarten, pijlers en lijsten
   - trage parallax op elementen met data-parallax="0.08" (optioneel data-scale)
   - optellende getallen op elementen met data-count (optioneel data-suffix)
   - schaduw op de header zodra er gescrold is
   - hero-video die meeloopt met scrollen op data-scrub="<aantal beelden>"
   Alles respecteert prefers-reduced-motion.
   ========================================================================== */
(function () {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  root.classList.add('js');
  const ready = () => root.classList.add('is-ready');
  setTimeout(ready, 40);
  window.addEventListener('load', ready);
  setTimeout(ready, 1500); // vangnet, ook als een tabblad op de achtergrond opent

  /* ---------- Stagger ---------- */
  const GROUPS = '.grid, .families, .pillars, .journal, .brand-wall, .brand-list, .tiles, .steps, .usp .wrap, .notes, .confirm__grid, .auth, [data-stagger]';
  function stagger() {
    document.querySelectorAll(GROUPS).forEach(g => {
      Array.from(g.children).forEach((c, i) => c.style.setProperty('--d', `${(i % 8) * 80}ms`));
    });
    document.querySelectorAll('.reveal[data-delay]').forEach(el => {
      if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${Number(el.dataset.delay) * 120}ms`);
    });
  }
  window.initStagger = stagger;
  let st;
  new MutationObserver(() => { clearTimeout(st); st = setTimeout(stagger, 40); }).observe(document.documentElement, { childList: true, subtree: true });

  /* ---------- Parallax + header ---------- */
  let px = [];
  function collect() { px = Array.from(document.querySelectorAll('[data-parallax]')); }
  function frame() {
    const header = document.querySelector('.header, .site-header');
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
    if (reduce) return;
    const vh = window.innerHeight;
    px.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const speed = parseFloat(el.dataset.parallax) || 0.08;
      const offset = (r.top + r.height / 2 - vh / 2) * -speed;
      const scale = el.dataset.scale ? ` scale(${el.dataset.scale})` : '';
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)${scale}`;
    });
  }
  let ticking = false;
  function onScroll() { if (ticking) return; ticking = true; requestAnimationFrame(() => { frame(); ticking = false; }); }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- Tellers ---------- */
  const seen = new WeakSet();
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || seen.has(e.target)) return;
      seen.add(e.target); io.unobserve(e.target);
      const el = e.target, end = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '';
      if (reduce || !isFinite(end)) { el.textContent = end + suffix; return; }
      const t0 = performance.now(), dur = 1400;
      (function step(t) {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }, { threshold: 0.6 });
  function initCounters() { document.querySelectorAll('[data-count]').forEach(el => { if (!seen.has(el)) io.observe(el); }); }
  window.initCounters = initCounters;

  /* ---------- Hero-video op scroll ---------- */
  function initScrub() {
    const hero = document.querySelector('[data-scrub]');
    if (!hero) return;
    const stage = hero.querySelector('.hero__stage');
    const canvas = hero.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const last = Number(hero.dataset.scrub);
    const frames = [];
    let shown = 0, cur = 1, raf = 0;

    // Toon het geladen beeld dat het dichtst bij de scrollpositie ligt
    function paint() {
      const want = Math.round(cur);
      for (let d = 0; d < last; d++) {
        const n = frames[want - d] ? want - d : frames[want + d] ? want + d : 0;
        if (!n) continue;
        if (n !== shown) { shown = n; ctx.drawImage(frames[n], 0, 0, canvas.width, canvas.height); }
        return;
      }
    }
    function load(n) {
      return new Promise(done => {
        const img = new Image();
        img.onload = () => { frames[n] = img; paint(); done(); };
        img.onerror = done;
        img.src = `${hero.dataset.scrubPath}${String(n).padStart(3, '0')}.webp`;
      });
    }

    const saveData = navigator.connection && navigator.connection.saveData;
    if (reduce || saveData) { hero.classList.add('hero--static'); cur = last; load(last); return; }

    // Eerst grof, dan steeds fijner: scrollen werkt meteen, ook als nog niet alles binnen is
    const phone = window.matchMedia('(max-width: 820px)').matches;
    const queue = [1, last];
    [16, 8, 4, 2, 1].filter(s => !phone || s > 1).forEach(s => {
      for (let n = 1; n < last; n += s) if (!queue.includes(n)) queue.push(n);
    });
    const worker = () => queue.length ? load(queue.shift()).then(worker) : null;
    for (let i = 0; i < 6; i++) worker();

    function progress() {
      const r = hero.getBoundingClientRect();
      const p = (parseFloat(getComputedStyle(stage).top) - r.top) / (r.height - stage.offsetHeight);
      return Math.min(1, Math.max(0, p));
    }
    function tick() {
      const p = progress();
      const fade = Math.max(0, 1 - p / 0.16);
      stage.style.setProperty('--fade', fade.toFixed(3));
      stage.style.setProperty('--shade', Math.max(0, 1 - p / 0.6).toFixed(3)); // donkere overlay trekt langzamer weg dan de tekst
      stage.style.setProperty('--open', Math.min(1, Math.max(0, (p - 0.12) / 0.24)).toFixed(3));
      stage.style.setProperty('--grow', (stage.offsetHeight / canvas.offsetHeight - 1).toFixed(3));
      stage.classList.toggle('is-past', fade === 0);
      const goal = 1 + p * (last - 1);
      cur += (goal - cur) * 0.18;
      if (Math.abs(goal - cur) < 0.05) cur = goal;
      paint();
      raf = cur === goal ? 0 : requestAnimationFrame(tick);
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    cur = 1 + progress() * (last - 1); // na herladen midden op de pagina niet terugspoelen
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    kick();
  }

  function init() { stagger(); collect(); initCounters(); frame(); }
  function start() { init(); initScrub(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  // dynamische content (producten, merken) kan later komen
  setTimeout(init, 300); setTimeout(init, 1200);
})();
