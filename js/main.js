/* ==========================================================================
   De Niche Parfumerie — gedeelde winkellogica (prototype, geen backend)
   Header/footer, mega-menu, zoek-overlay, winkelmandje, kortingscodes,
   verlanglijst, account, bestellingen, recent bekeken, cookiebanner.
   Alle "data" leeft in localStorage.
   ========================================================================== */
(function () {
  'use strict';

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const euro = n => '€ ' + n.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const brandOf = id => window.BRANDS.find(b => b.id === id) || { name: id };
  const productOf = id => window.PRODUCTS.find(p => p.id === id);
  const sizeOf = (p, ml) => p.sizes.find(s => s.ml === ml) || p.sizes[0];
  const sizeLabel = s => s.label || `${s.ml} ml`;
  const page = location.pathname.split('/').pop() || 'index.html';
  const ls = {
    get(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } },
    set(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
  };
  const catalog = () => window.PRODUCTS.filter(p => !p.hidden);

  /* ---------- Winkelgegevens (PLACEHOLDERS) ---------- */
  const STORE = {
    name: 'De Niche Parfumerie',
    street: 'Straatnaam 00',
    city: '8601 XX Sneek',
    phone: '0515 - 00 00 00',
    email: 'info@denicheparfumerie.nl',
    hours: [['Maandag', 'Gesloten'], ['Dinsdag', '10.00 – 18.00'], ['Woensdag', '10.00 – 18.00'], ['Donderdag', '10.00 – 18.00'], ['Vrijdag', '10.00 – 21.00'], ['Zaterdag', '10.00 – 17.00'], ['Zondag', '13.00 – 17.00']],
    freeShipping: 75,
    shipping: 4.95,
    giftWrap: 4.95,
    shippingBE: 7.95,
    freeShippingBE: 100
  };
  window.STORE = STORE;
  window.euro = euro;
  window.esc = esc;
  window.sizeLabel = sizeLabel;

  /* ---------- Gebruiker (mock) ---------- */
  const user = {
    get() { return ls.get('dnp-user', null); },
    login(email, name) { const u = { email, name: name || email.split('@')[0], since: new Date().toISOString() }; ls.set('dnp-user', u); renderUserBits(); return u; },
    logout() { localStorage.removeItem('dnp-user'); renderUserBits(); },
    address() { return ls.get('dnp-address', null); },
    saveAddress(a) { ls.set('dnp-address', a); }
  };
  window.user = user;

  /* ---------- Bestellingen (mock) ---------- */
  const orders = {
    all() { return ls.get('dnp-orders', []); },
    get(n) { return this.all().find(o => o.number === n); },
    place(details) {
      const list = this.all();
      const number = 'DN' + String(100240 + list.length);
      const t = cart.totals(details.delivery === "pickup", details.country);
      const order = Object.assign({ number, date: new Date().toISOString(), items: cart.items.map(i => ({ id: i.id, ml: i.ml, qty: i.qty, props: i.props || null })), totals: t, discount: cart.discount(), giftwrap: cart.giftwrap(), note: ls.get("dnp-note", "") }, details);
      list.unshift(order); ls.set('dnp-orders', list);
      cart.clear();
      return order;
    }
  };
  window.orders = orders;

  /* ---------- Verlanglijst ---------- */
  const wishlist = {
    items() { return ls.get('dnp-wish', []); },
    has(id) { return this.items().includes(id); },
    toggle(id) {
      let items = this.items();
      const on = !items.includes(id);
      items = on ? items.concat(id) : items.filter(x => x !== id);
      ls.set('dnp-wish', items);
      this.render();
      toast(on ? `${productOf(id).name} bewaard in je verlanglijst` : `${productOf(id).name} verwijderd uit je verlanglijst`);
      document.dispatchEvent(new CustomEvent('wishlist:change'));
      return on;
    },
    render() {
      const n = this.items().length;
      $$('[data-wish-count]').forEach(el => { el.textContent = n; el.dataset.n = n; });
      $$('[data-wish]').forEach(b => b.classList.toggle('is-on', this.has(b.dataset.wish)));
    }
  };
  window.wishlist = wishlist;

  /* ---------- Recent bekeken ---------- */
  const recent = {
    items() { return ls.get('dnp-recent', []); },
    push(id) { const l = [id].concat(this.items().filter(x => x !== id)).slice(0, 8); ls.set('dnp-recent', l); }
  };
  window.recent = recent;

  /* ---------- Layout ---------- */
  const LOGO = light => `
    <a class="logo ${light ? 'logo--light' : ''}" href="index.html" aria-label="De Niche Parfumerie">
      <span class="logo__de">DE</span><span class="logo__niche">Niche</span><span class="logo__parf">PARFUMERIE</span>
    </a>`;
  const NAV = [
    ['geuren.html', 'Geuren', true],
    ['geuren.html?geslacht=dames', 'Dames'],
    ['geuren.html?geslacht=heren', 'Heren'],
    ['merken.html', 'Merken'],
    ['journal.html', 'Journal'],
    ["contact.html", "Bezoek ons"]
  ];
  const ICON = {
    search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
    heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/></svg>',
    bag: '<svg viewBox="0 0 24 24"><path d="M6 8h12l1 13H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>'
  };
  window.ICON = ICON;

  function megaHTML() {
    const fam = Object.entries(window.FAMILIES).map(([k, f]) => `<li><a href="geuren.html?familie=${k}">${f.label}</a></li>`).join('');
    const col = seg => window.BRANDS.filter(b => b.segment === seg).slice(0, 6).map(b => `<li><a href="geuren.html?merk=${b.id}">${b.name}</a></li>`).join("");
    const feat = catalog().find(p => p.badge === 'Favoriet');
    return `<div class="mega" data-mega>
      <div class="wrap mega__grid">
        <div><h4>Voor wie</h4><ul><li><a href="geuren.html?geslacht=dames">Dames</a></li><li><a href="geuren.html?geslacht=heren">Heren</a></li><li><a href="geuren.html?geslacht=unisex">Unisex</a></li><li><a href="geuren.html">Alle geuren</a></li></ul></div>
        <div><h4>Geurfamilie</h4><ul>${fam}</ul></div>
        <div><h4>Nichehuizen</h4><ul>${col("niche")}<li><a href="geuren.html?soort=niche" class="mega__all">Alle nichehuizen →</a></li></ul></div>
        <div><h4>Grote huizen</h4><ul>${col("designer")}<li><a href="geuren.html?soort=designer" class="mega__all">Alle grote huizen →</a></li></ul></div>
        ${feat ? `<a class="mega__feat" href="product.html?id=${feat.id}"><div class="mega__feat-img">${window.productMedia(feat, "mega")}</div><span class="card__brand">${esc(brandOf(feat.brand).name)}</span><strong>${esc(feat.name)}</strong><span class="small muted">Favoriet</span></a>` : ''}
      </div>
    </div>`;
  }

  function renderHeader() {
    const el = $('#site-header'); if (!el) return;
    el.innerHTML = `
      <div class="topbar"><div class="wrap">
        <span>Gratis verzending vanaf € ${STORE.freeShipping}</span>
        <span>Gratis samples bij elke bestelling</span>
        <span>Persoonlijk geuradvies in Sneek</span>
        <a class="topbar__switch" href="website/index.html">Merksite →</a>
      </div></div>
      <header class="header" data-header><div class="wrap">
        <button class="burger" aria-label="Menu" data-open-drawer><span></span><span></span><span></span></button>
        ${LOGO(false)}
        <nav class="nav" aria-label="Hoofdnavigatie">
          ${NAV.map(([h, l, mega]) => `<a href="${h}" ${isActive(h) ? 'class="is-active"' : ''} ${mega ? 'data-mega-trigger' : ''}>${l}</a>`).join('')}
        </nav>
        <div class="header__tools">
          <button class="icon-btn" data-open-search aria-label="Zoeken">${ICON.search}<span class="icon-btn__label">Zoeken</span></button>
          <a class="icon-btn" href="account.html" aria-label="Account" data-user-link>${ICON.user}<span class="icon-btn__label" data-user-label>Account</span></a>
          <a class="icon-btn" href="verlanglijst.html" aria-label="Verlanglijst">${ICON.heart}<span class="cart-count" data-wish-count></span></a>
          <button class="icon-btn" data-open-cart aria-label="Winkelmandje">${ICON.bag}<span class="icon-btn__label">Mandje</span><span class="cart-count" data-cart-count></span></button>
        </div>
      </div>
      ${megaHTML()}
      </header>

      <div class="search-overlay" data-search>
        <div class="search-overlay__bg" data-close-search></div>
        <div class="search-overlay__panel">
          <div class="wrap">
            <form class="search-overlay__form" action="zoeken.html" method="get">
              <input type="search" name="q" placeholder="Zoek een geur, merk of ingrediënt" aria-label="Zoeken" autocomplete="off" data-search-input>
              <button type="submit" class="link">Zoeken</button>
              <button type="button" class="drawer__close" data-close-search>Sluiten ×</button>
            </form>
            <div class="search-overlay__results" data-search-results></div>
          </div>
        </div>
      </div>

      <div class="drawer" data-drawer>
        <div class="drawer__bg" data-close-drawer></div>
        <div class="drawer__panel">
          <button class="drawer__close" data-close-drawer>Sluiten ×</button>
          <nav class="drawer__nav">
            ${NAV.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}
            <a href="geuren.html?geslacht=unisex">Unisex</a><a href="cadeaubon.html">Cadeaubon</a><a href="over-ons.html">Over ons</a><a href="account.html">Account</a><a href="verlanglijst.html">Verlanglijst</a><a href="service.html">Service</a>
          </nav>
          <p class="small muted">${STORE.street}, ${STORE.city}<br>${STORE.phone}</p>
        </div>
      </div>
      <div class="cart-drawer" data-cart-drawer>
        <div class="cart-drawer__bg" data-close-cart></div>
        <aside class="cart-drawer__panel" aria-label="Winkelmandje">
          <div class="cart-drawer__head"><h3>Winkelmandje</h3><button class="drawer__close" data-close-cart>Sluiten ×</button></div>
          <div class="cart-drawer__body" data-cart-lines></div>
          <div class="cart-drawer__foot">
            <div class="totals"><span>Subtotaal</span><strong data-cart-subtotal>€ 0,00</strong></div>
            <p class="small muted" style="margin:6px 0 14px" data-ship-hint></p>
            <a class="btn btn--solid btn--block" href="afrekenen.html">Afrekenen</a>
            <a class="link" href="winkelmandje.html" style="margin-top:16px">Bekijk winkelmandje</a>
          </div>
        </aside>
      </div>
      <div class="toast" data-toast><i></i><span></span></div>
      <div class="cookie" data-cookie hidden>
        <p>We gebruiken cookies om de site te laten werken en, met jouw toestemming, om te meten wat goed werkt. <a href="privacy.html">Meer over privacy</a></p>
        <div><button class="btn btn--solid" data-cookie-ok="all">Alles accepteren</button><button class="btn" data-cookie-ok="min">Alleen noodzakelijk</button></div>
      </div>
      <div class="proto">Prototype · prijzen en assortiment indicatief</div>`;

    function isActive(h) {
      const [file, q] = h.split('?');
      if (file !== page) return false;
      if (!q) return !location.search || page !== 'geuren.html';
      return location.search.includes(q);
    }
    if (!ls.get('dnp-cookie', null)) $('[data-cookie]').hidden = false;
  }

  function renderFooter() {
    const el = $('#site-footer'); if (!el) return;
    el.innerHTML = `
      <footer class="footer"><div class="wrap">
        <div class="footer__grid">
          <div>
            ${LOGO(true)}
            <p style="margin-top:22px;max-width:36ch">Nicheparfumerie in het hart van Sneek. Een samengestelde selectie nicheparfums, met advies van mensen die ze zelf dragen.</p>
            <p class="small">${STORE.street}<br>${STORE.city}<br>${STORE.phone}<br><a href="mailto:${STORE.email}">${STORE.email}</a></p>
          </div>
          <div><h4>Ontdekken</h4><ul>
            <li><a href="geuren.html">Alle geuren</a></li>
            <li><a href="geuren.html?geslacht=dames">Dames</a></li>
            <li><a href="geuren.html?geslacht=heren">Heren</a></li>
            <li><a href="merken.html">Merken</a></li>
            <li><a href="cadeaubon.html">Cadeaubon</a></li>
            <li><a href="journal.html">Journal</a></li>
          </ul></div>
          <div><h4>Winkel</h4><ul>
            <li><a href="over-ons.html">Over De Niche</a></li>
            <li><a href="contact.html">Bezoek &amp; openingstijden</a></li>
            <li><a href="contact.html#consult">Geurconsult</a></li>
            <li><a href="account.html">Mijn account</a></li>
            <li><a href="verlanglijst.html">Verlanglijst</a></li>
          </ul></div>
          <div><h4>Service</h4><ul>
            <li><a href="service.html#verzenden">Verzenden &amp; retourneren</a></li>
            <li><a href="service.html#faq">Veelgestelde vragen</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="voorwaarden.html">Algemene voorwaarden</a></li>
            <li><a href="privacy.html">Privacy &amp; cookies</a></li>
          </ul></div>
        </div>
        <div class="footer__bottom">
          <span>© ${new Date().getFullYear()} ${STORE.name}, Sneek · KvK 00000000 · BTW NL000000000B00</span>
          <div class="footer__pay"><span>iDEAL</span><span>Visa</span><span>Mastercard</span><span>PayPal</span><span>Klarna</span><span>Apple Pay</span></div>
        </div>
      </div></footer>`;
  }

  function renderUserBits() {
    const u = user.get();
    $$('[data-user-label]').forEach(el => el.textContent = u ? u.name.split(' ')[0] : 'Account');
  }

  /* ---------- Winkelmandje ---------- */
  const KEY = 'dnp-cart-v1';
  const cart = {
    items: [],
    load() { this.items = ls.get(KEY, []); },
    save() { ls.set(KEY, this.items); this.render(); },
    clear() { this.items = []; ["dnp-discount", "dnp-giftwrap", "dnp-note"].forEach(k => localStorage.removeItem(k)); this.save(); },
    add(id, ml, qty, props) {
      const p = productOf(id); if (!p) return;
      const size = sizeOf(p, ml);
      const line = !props && this.items.find(i => i.id === id && i.ml === size.ml && !i.props);
      if (line) line.qty += qty || 1; else this.items.push({ id, ml: size.ml, qty: qty || 1, props: props || null });
      this.save();
      toast(`${p.name} ${sizeLabel(size)} toegevoegd aan je mandje`);
      openCart();
    },
    setQty(id, ml, qty) {
      const line = this.items.find(i => i.id === id && i.ml === ml); if (!line) return;
      line.qty = qty; if (line.qty <= 0) this.items = this.items.filter(i => i !== line);
      this.save();
    },
    count() { return this.items.reduce((n, i) => n + i.qty, 0); },
    subtotal() { return this.items.reduce((n, i) => { const p = productOf(i.id); return n + (p ? sizeOf(p, i.ml).price * i.qty : 0); }, 0); },
    discount() { return ls.get('dnp-discount', null); },
    setDiscount(code) {
      code = (code || '').trim().toUpperCase();
      if (!code) { localStorage.removeItem('dnp-discount'); this.render(); return { ok: true }; }
      const d = window.DISCOUNTS[code];
      if (!d) return { ok: false, msg: 'Deze code kennen we niet.' };
      ls.set('dnp-discount', Object.assign({ code }, d)); this.render(); return { ok: true, msg: `${d.label} toegepast.` };
    },
    giftwrap() { return !!ls.get('dnp-giftwrap', false); },
    setGiftwrap(on) { ls.set('dnp-giftwrap', !!on); this.render(); },
    totals(pickup, country) {
      const sub = this.subtotal();
      const goods = this.items.reduce((n, i) => { const p = productOf(i.id); return n + (p && !p.hidden ? sizeOf(p, i.ml).price * i.qty : 0); }, 0);
      const d = this.discount();
      const discount = d && d.type === "percent" ? Math.round(goods * d.value) / 100 : 0;
      const wrap = this.giftwrap() && goods > 0 ? STORE.giftWrap : 0;
      const be = country === "België";
      const threshold = be ? STORE.freeShippingBE : STORE.freeShipping;
      const rate = be ? STORE.shippingBE : STORE.shipping;
      let shipping = goods === 0 || pickup ? 0 : (goods - discount >= threshold ? 0 : rate);
      if (d && d.type === "shipping") shipping = 0;
      return { sub, goods, discount, wrap, shipping, total: sub - discount + wrap + shipping };
    },
    lineHTML(i) {
      const p = productOf(i.id); if (!p) return '';
      const s = sizeOf(p, i.ml);
      return `<div class="cart-line" data-line="${p.id}|${i.ml}">
        <a class="cart-line__img" href="product.html?id=${p.id}">${window.productMedia(p, "cart")}</a>
        <div>
          <div class="cart-line__brand">${esc(brandOf(p.brand).name)}</div>
          <a class="cart-line__name" href="product.html?id=${p.id}">${esc(p.name)}</a>
          <div class="cart-line__meta">${esc(p.sub)} · ${sizeLabel(s)}${i.props ? "<br>" + esc(Object.values(i.props).filter(Boolean).join(" · ")) : ""}</div>
          <div class="qty"><button data-qty="-1" aria-label="Minder">−</button><span>${i.qty}</span><button data-qty="1" aria-label="Meer">+</button></div>
        </div>
        <div><div class="cart-line__price">${euro(s.price * i.qty)}</div><button class="cart-line__remove" data-remove>Verwijder</button></div>
      </div>`;
    },
    render() {
      const t = this.totals();
      $$('[data-cart-count]').forEach(el => { el.textContent = this.count(); el.dataset.n = this.count(); });
      $$('[data-cart-subtotal]').forEach(el => el.textContent = euro(t.sub));
      $$('[data-ship-hint]').forEach(el => {
        el.textContent = t.sub === 0 ? 'Verzendkosten worden berekend bij het afrekenen.' : t.sub - t.discount >= STORE.freeShipping ? 'Je bestelling wordt gratis verzonden.' : `Nog ${euro(STORE.freeShipping - (t.sub - t.discount))} tot gratis verzending.`;
      });
      $$('[data-cart-lines]').forEach(el => {
        el.innerHTML = this.items.length ? this.items.map(i => this.lineHTML(i)).join('') :
          `<div class="cart-empty"><p>Je winkelmandje is nog leeg.</p><a class="link link--gold" href="geuren.html">Ontdek de geuren</a></div>`;
      });
      document.dispatchEvent(new CustomEvent('cart:change', { detail: t }));
    }
  };
  window.cart = cart;

  function openCart() { const d = $('[data-cart-drawer]'); if (d) d.classList.add('is-open'); document.body.style.overflow = 'hidden'; }
  function closeAll() { $$('[data-cart-drawer],[data-drawer],[data-search]').forEach(d => d.classList.remove('is-open')); document.body.style.overflow = ''; }

  let toastT;
  function toast(msg) {
    const t = $('[data-toast]'); if (!t) return;
    t.querySelector('span').textContent = msg; t.classList.add('is-on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('is-on'), 2600);
  }
  window.toast = toast;

  /* ---------- Zoeken ---------- */
  window.searchProducts = function (q) {
    q = (q || '').trim().toLowerCase(); if (q.length < 2) return [];
    const terms = q.split(/\s+/);
    return catalog().map(p => {
      const hay = [p.name, brandOf(p.brand).name, p.sub, window.FAMILIES[p.family].label, window.GENDERS[p.gender]].concat(p.notes.top, p.notes.heart, p.notes.base).join(' ').toLowerCase();
      let score = 0;
      terms.forEach(t => { if (p.name.toLowerCase().includes(t)) score += 5; if (brandOf(p.brand).name.toLowerCase().includes(t)) score += 4; if (hay.includes(t)) score += 1; });
      return [score, p];
    }).filter(x => x[0] > 0).sort((a, b) => b[0] - a[0]).map(x => x[1]);
  };
  window.searchBrands = function (q) {
    q = (q || '').trim().toLowerCase(); if (q.length < 2) return [];
    return window.BRANDS.filter(b => b.id !== 'dnp' && b.name.toLowerCase().includes(q));
  };
  function liveSearch(q) {
    const box = $('[data-search-results]'); if (!box) return;
    const res = window.searchProducts(q).slice(0, 6), br = window.searchBrands(q).slice(0, 4);
    if (q.trim().length < 2) { box.innerHTML = `<div class="search-overlay__hint"><span class="eyebrow eyebrow--plain">Populair</span><div class="chips" style="margin-top:12px">${['Aventus', 'Baccarat Rouge', 'Oud', 'Vanille', 'Creed', 'Roos'].map(t => `<button type="button" class="chip" data-search-term="${t}">${t}</button>`).join('')}</div></div>`; return; }
    if (!res.length && !br.length) { box.innerHTML = `<p class="muted">Geen resultaten voor “${esc(q)}”.</p>`; return; }
    box.innerHTML = `
      ${br.length ? `<div class="search-overlay__brands">${br.map(b => `<a class="chip" href="geuren.html?merk=${b.id}">${esc(b.name)}</a>`).join('')}</div>` : ''}
      <div class="search-overlay__grid">${res.map(p => `<a class="search-hit" href="product.html?id=${p.id}"><div class="search-hit__img">${window.productMedia(p, "srch")}</div><div><div class="card__brand">${esc(brandOf(p.brand).name)}</div><strong>${esc(p.name)}</strong><div class="small muted">${euro(Math.min(...p.sizes.map(s => s.price)))}</div></div></a>`).join('')}</div>
      <a class="link link--gold" href="zoeken.html?q=${encodeURIComponent(q)}" style="margin-top:20px">Alle resultaten voor “${esc(q)}”</a>`;
  }

  /* ---------- Productkaart ---------- */
  window.starsHTML = function (avg) {
    let s = '';
    for (let i = 1; i <= 5; i++) s += `<i class="${avg >= i - 0.25 ? 'on' : avg >= i - 0.75 ? 'half' : ''}"></i>`;
    return `<span class="stars" aria-label="${avg} van 5">${s}</span>`;
  };
  window.cardHTML = function (p, uid) {
    const from = Math.min(...p.sizes.map(s => s.price));
    const cheapest = p.sizes.reduce((a, b) => a.price <= b.price ? a : b);
    const per100 = !p.hidden && p.kind !== "set" ? euro(cheapest.price / cheapest.ml * 100) + " / 100 ml" : "";
    const badge = p.badge ? `<span class="card__badge ${p.badge === 'Nieuw' ? 'card__badge--gold' : ''}">${p.badge}</span>` : '';
    return `<article class="card reveal">
      <a class="card__media" href="product.html?id=${p.id}">${window.productMedia(p, uid)}${badge}</a>
      <button class="wish ${wishlist.has(p.id) ? 'is-on' : ''}" data-wish="${p.id}" aria-label="Bewaar in verlanglijst">${ICON.heart}</button>
      <div class="card__quick"><button class="btn" data-add="${p.id}">In winkelmandje</button></div>
      <div>
        <div class="card__brand">${esc(brandOf(p.brand).name)}</div>
        <a class="card__name" href="product.html?id=${p.id}">${esc(p.name)}</a>
        <div class="card__family">${esc(p.sub)}${p.hidden ? "" : p.kind === "set" ? " · Ontdekkingsset" : ` · ${window.FAMILIES[p.family].label} · ${window.GENDERS[p.gender]}`}</div>
        <div class="card__price">${p.sizes.length > 1 ? "<small>vanaf</small> " : ""}${euro(from)}${per100 ? ` <small class="per100">${per100}</small>` : ""}</div>
      </div>
    </article>`;
  };

  /* ---------- Reveal ---------- */
  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    $$('.reveal:not(.is-in)').forEach(el => io.observe(el));
  }
  window.initReveal = initReveal;

  /* ---------- Events ---------- */
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-open-cart],[data-close-cart],[data-open-drawer],[data-close-drawer],[data-open-search],[data-close-search],[data-add],[data-qty],[data-remove],[data-wish],[data-cookie-ok],[data-search-term],[data-logout]');
    if (!t) return;
    if (t.hasAttribute('data-open-cart')) { e.preventDefault(); openCart(); }
    if (t.hasAttribute('data-close-cart') || t.hasAttribute('data-close-drawer') || t.hasAttribute('data-close-search')) closeAll();
    if (t.hasAttribute('data-open-drawer')) { $('[data-drawer]').classList.add('is-open'); document.body.style.overflow = 'hidden'; }
    if (t.hasAttribute('data-open-search')) { closeAll(); $('[data-search]').classList.add('is-open'); document.body.style.overflow = 'hidden'; liveSearch(''); setTimeout(() => $('[data-search-input]').focus(), 50); }
    if (t.hasAttribute('data-search-term')) { const i = $('[data-search-input]'); i.value = t.dataset.searchTerm; liveSearch(i.value); }
    if (t.hasAttribute('data-add')) { e.preventDefault(); const p = productOf(t.dataset.add); cart.add(p.id, Number(t.dataset.ml) || p.sizes[0].ml, Number(t.dataset.qty) || 1); }
    if (t.hasAttribute('data-wish')) { e.preventDefault(); wishlist.toggle(t.dataset.wish); }
    if (t.hasAttribute('data-qty') || t.hasAttribute('data-remove')) {
      const line = t.closest('[data-line]'); const [id, ml] = line.dataset.line.split('|');
      const cur = cart.items.find(i => i.id === id && i.ml === Number(ml));
      cart.setQty(id, Number(ml), t.hasAttribute('data-remove') ? 0 : cur.qty + Number(t.dataset.qty));
    }
    if (t.hasAttribute('data-cookie-ok')) { ls.set('dnp-cookie', t.dataset.cookieOk); $('[data-cookie]').hidden = true; }
    if (t.hasAttribute('data-logout')) { e.preventDefault(); user.logout(); toast('Je bent uitgelogd.'); setTimeout(() => location.href = 'index.html', 600); }
  });
  document.addEventListener('input', e => { if (e.target.matches('[data-search-input]')) liveSearch(e.target.value); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

  // Mega-menu: open bij hover op "Geuren" (desktop), sluit bij verlaten header
  function initMega() {
    const header = $('[data-header]'), mega = $('[data-mega]'), trig = $('[data-mega-trigger]');
    if (!header || !mega || !trig) return;
    let t;
    const open = () => { clearTimeout(t); mega.classList.add('is-open'); trig.classList.add('is-open'); };
    const close = () => { t = setTimeout(() => { mega.classList.remove('is-open'); trig.classList.remove('is-open'); }, 120); };
    trig.addEventListener('mouseenter', open); mega.addEventListener('mouseenter', open);
    trig.addEventListener('mouseleave', close); mega.addEventListener('mouseleave', close);
    trig.addEventListener('focus', open);
  }

  /* ---------- Init ---------- */
  renderHeader();
  renderFooter();
  renderUserBits();
  cart.load();
  cart.render();
  wishlist.render();
  initMega();
  document.addEventListener('DOMContentLoaded', initReveal);
  if (document.readyState !== 'loading') initReveal();
})();
