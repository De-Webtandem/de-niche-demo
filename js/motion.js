/* ==========================================================================
   Rustige beweging voor webshop en merksite.
   - pagina-fade bij laden
   - getrapte reveal (stagger) van kaarten, pijlers en lijsten
   - trage parallax op elementen met data-parallax="0.08" (optioneel data-scale)
   - optellende getallen op elementen met data-count (optioneel data-suffix)
   - schaduw op de header zodra er gescrold is
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

  function init() { stagger(); collect(); initCounters(); frame(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  // dynamische content (producten, merken) kan later komen
  setTimeout(init, 300); setTimeout(init, 1200);
})();
