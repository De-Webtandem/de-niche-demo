/* ==========================================================================
   Merksite — header, footer, reveal, formulieren. Gedeelde data komt uit
   ../js/products.js en ../js/content.js. De webshop staat één map hoger.
   ========================================================================== */
(function () {
  'use strict';
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const page = location.pathname.split('/').pop() || 'index.html';
  const SHOP = '../';
  window.SHOP = SHOP;

  const STORE = {
    name: 'De Niche Parfumerie',
    street: 'Straatnaam 00',
    city: '8601 XX Sneek',
    phone: '0515 - 00 00 00',
    email: 'info@denicheparfumerie.nl',
    hours: [['Maandag', 'Gesloten'], ['Dinsdag', '10.00 – 18.00'], ['Woensdag', '10.00 – 18.00'], ['Donderdag', '10.00 – 18.00'], ['Vrijdag', '10.00 – 21.00'], ['Zaterdag', '10.00 – 17.00'], ['Zondag', '13.00 – 17.00']]
  };
  window.STORE = STORE;
  window.esc = esc;
  window.euro = n => '€ ' + n.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  window.sizeLabel = s => s.label || `${s.ml} ml`;

  const LOGO = light => `<a class="logo ${light ? 'logo--light' : ''}" href="index.html" aria-label="De Niche Parfumerie"><span class="logo__de">DE</span><span class="logo__niche">Niche</span><span class="logo__parf">PARFUMERIE</span></a>`;
  const NAV = [['verhaal.html', 'Ons verhaal'], ['merken.html', 'Parfumhuizen'], ['geurconsult.html', 'Geurconsult'], ['journal.html', 'Journal'], ['winkel.html', 'Bezoek'], ['contact.html', 'Contact']];

  function renderHeader() {
    const el = $('#site-header'); if (!el) return;
    el.innerHTML = `
      <header class="site-header"><div class="wrap">
        <button class="burger" aria-label="Menu" data-open-drawer><span></span><span></span><span></span></button>
        ${LOGO(false)}
        <nav class="site-nav" aria-label="Hoofdnavigatie">${NAV.map(([h, l]) => `<a href="${h}" ${h === page ? 'class="is-active"' : ''}>${l}</a>`).join('')}</nav>
        <div class="site-header__cta">
          <a class="btn btn--solid" href="${SHOP}index.html">Webshop</a>
        </div>
      </div></header>
      <div class="drawer" data-drawer>
        <div class="drawer__bg" data-close-drawer></div>
        <div class="drawer__panel">
          <button class="drawer__close" data-close-drawer>Sluiten ×</button>
          <nav class="drawer__nav">${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}<a href="${SHOP}index.html">Webshop →</a></nav>
          <p class="small muted">${STORE.street}, ${STORE.city}<br>${STORE.phone}</p>
        </div>
      </div>
      <div class="toast" data-toast><i></i><span></span></div>
      <div class="proto">Prototype · merksite</div>`;
  }

  function renderFooter() {
    const el = $('#site-footer'); if (!el) return;
    el.innerHTML = `
      <footer class="footer"><div class="wrap">
        <div class="footer__grid">
          <div>
            ${LOGO(true)}
            <p style="margin-top:22px;max-width:36ch">Nicheparfumerie in het hart van Sneek. Een samengestelde selectie parfumhuizen, met advies van mensen die ze zelf dragen.</p>
            <p class="small">${STORE.street}<br>${STORE.city}<br>${STORE.phone}<br><a href="mailto:${STORE.email}">${STORE.email}</a></p>
          </div>
          <div><h4>De winkel</h4><ul>
            <li><a href="verhaal.html">Ons verhaal</a></li>
            <li><a href="merken.html">Parfumhuizen</a></li>
            <li><a href="geurconsult.html">Geurconsult</a></li>
            <li><a href="winkel.html">Bezoek &amp; openingstijden</a></li>
            <li><a href="journal.html">Journal</a></li>
          </ul></div>
          <div><h4>Webshop</h4><ul>
            <li><a href="${SHOP}geuren.html">Alle geuren</a></li>
            <li><a href="${SHOP}geuren.html?geslacht=dames">Dames</a></li>
            <li><a href="${SHOP}geuren.html?geslacht=heren">Heren</a></li>
            <li><a href="${SHOP}cadeaubon.html">Cadeaubon</a></li>
            <li><a href="${SHOP}product.html?id=ontdekkingsset">Ontdekkingsset</a></li>
          </ul></div>
          <div><h4>Service</h4><ul>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="${SHOP}service.html">Verzenden &amp; retourneren</a></li>
            <li><a href="${SHOP}service.html#faq">Veelgestelde vragen</a></li>
            <li><a href="${SHOP}voorwaarden.html">Algemene voorwaarden</a></li>
            <li><a href="${SHOP}privacy.html">Privacy &amp; cookies</a></li>
          </ul></div>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} ${STORE.name}, Sneek · KvK 00000000 · BTW NL000000000B00</span>
          <a class="site-switch" href="${SHOP}index.html" style="color:var(--gold-2)">Naar de webshop →</a>
        </div>
      </div></footer>`;
  }

  let toastT;
  window.toast = function (msg) {
    const t = $('[data-toast]'); if (!t) return;
    t.querySelector('span').textContent = msg; t.classList.add('is-on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('is-on'), 2600);
  };

  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal:not(.is-in)').forEach(el => io.observe(el));
  }
  window.initReveal = initReveal;

  /* Productkaart die naar de webshop linkt */
  window.shopCard = function (p, uid) {
    const b = window.BRANDS.find(x => x.id === p.brand) || { name: '' };
    const from = Math.min(...p.sizes.map(s => s.price));
    return `<article class="card reveal">
      <a class="card__media" href="${SHOP}product.html?id=${p.id}">${window.productMedia(p, uid, SHOP)}${p.badge ? `<span class="card__badge ${p.badge === 'Nieuw' ? 'card__badge--gold' : ''}">${p.badge}</span>` : ''}</a>
      <div>
        <div class="card__brand">${esc(b.name)}</div>
        <a class="card__name" href="${SHOP}product.html?id=${p.id}">${esc(p.name)}</a>
        <div class="card__family">${esc(p.sub)}${p.kind === 'set' ? ' · Ontdekkingsset' : ` · ${window.FAMILIES[p.family].label}`}</div>
        <div class="card__price">${p.sizes.length > 1 ? '<small>vanaf</small> ' : ''}${window.euro(from)}</div>
      </div>
    </article>`;
  };

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-open-drawer],[data-close-drawer]'); if (!t) return;
    const d = $('[data-drawer]');
    if (t.hasAttribute('data-open-drawer')) { d.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
    else { d.classList.remove('is-open'); document.body.style.overflow = ''; }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { const d = $('[data-drawer]'); if (d) d.classList.remove('is-open'); document.body.style.overflow = ''; } });

  renderHeader();
  renderFooter();
  $$('[data-store]').forEach(el => { el.textContent = STORE[el.dataset.store] || ''; });
  $$('[data-hours]').forEach(el => { el.innerHTML = STORE.hours.map(([d, h]) => `<tr><td>${d}</td><td>${h}</td></tr>`).join(''); });
  document.addEventListener('DOMContentLoaded', initReveal);
  if (document.readyState !== 'loading') initReveal();
})();
