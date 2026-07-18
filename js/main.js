// ═══════════ Santiago · Web Studio v6 ═══════════
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

// ── Loader (ezterbial-inspired)
(function(){
  const pct=$('#loaderPct'), fill=$('#loaderFill'), loader=$('#loader'), grid=$('#loaderGrid');
  if(!loader) return;
  for(let i=1;i<6;i++){const v=document.createElement('div');v.className='loader-grid-v';v.style.left=(i*20)+'%';grid.appendChild(v);}
  for(let i=1;i<6;i++){const h=document.createElement('div');h.className='loader-grid-h';h.style.top=(i*20)+'%';grid.appendChild(h);}
  let cur=0;
  const tick=()=>{cur+=Math.random()*8+2;if(cur>100)cur=100;pct.textContent=Math.round(cur);fill.style.width=cur+'%';if(cur<100){setTimeout(tick,60);}else{setTimeout(()=>{loader.classList.add('done');setTimeout(()=>loader.remove(),700);},400);}};
  tick();
})();

const WA = '5491178236625'; // Santiago
const waOpen = txt => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(txt)}`,'_blank');
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

// ── WhatsApp delegado
document.addEventListener('click', e => {
  const b = e.target.closest('[data-wa]');
  if(!b) return;
  e.preventDefault();
  waOpen(b.dataset.wa || 'Hola Santiago! Quiero una página web.');
});

// ── Nav scroll + mobile
const nav = $('#nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive:true});
const navToggle = $('#navToggle'), navLinks = $('#navLinks');
const toggleMenu = (open) => {
  navLinks.classList.toggle('open', open);
  navToggle.classList.toggle('open', open);
  document.documentElement.classList.toggle('menu-open', open);
};
navToggle.addEventListener('click', () => toggleMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

// ── Smooth scroll
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const id = a.getAttribute('href'); if(id==='#') return;
  const el = document.querySelector(id);
  if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
}));

// ── Cursor glow + magnético
if(matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce){
  const glow = $('#cursorGlow');
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
  addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
  (function loop(){ cx+=(mx-cx)*.12; cy+=(my-cy)*.12; glow.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  // ── MOUSE PARALLAX (ezterbial-style: elements shift on cursor)
  let pmx=innerWidth/2, pmy=innerHeight/2, parDirty=false;
  addEventListener('mousemove', e=>{ pmx=e.clientX; pmy=e.clientY; parDirty=true; });
  const parallaxEls = [];
  function registerParallax(){
    parallaxEls.length=0;
    $$('[data-par]').forEach(el=>{
      parallaxEls.push({el, s:+(el.dataset.par||12)});
    });
  }
  (function pLoop(){
    if(parDirty){
      parDirty=false;
      const cx=pmx/innerWidth-.5, cy=pmy/innerHeight-.5;
      parallaxEls.forEach(({el,s})=>{
        el.style.transform=`translate(${cx*s}px,${cy*s}px)`;
      });
    }
    requestAnimationFrame(pLoop);
  })();
  registerParallax();
}

// ── Sparkles canvas (21st: Sparkles)
(function(){
  if(reduce) return;
  const cv = $('#sparkles'); if(!cv) return;
  const ctx = cv.getContext('2d');
  let w,h,stars=[];
  const resize=()=>{ w=cv.width=innerWidth; h=cv.height=innerHeight; stars=Array.from({length:Math.min(60,Math.floor(w*h/25000))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.2,a:Math.random(),s:Math.random()*.02+.004})); };
  resize(); addEventListener('resize', resize);
  (function draw(){
    ctx.clearRect(0,0,w,h);
    stars.forEach(st=>{ st.a+=st.s; const o=(Math.sin(st.a)+1)/2*.7; ctx.beginPath(); ctx.arc(st.x,st.y,st.r,0,7); ctx.fillStyle=`rgba(180,220,255,${o})`; ctx.fill(); });
    requestAnimationFrame(draw);
  })();
})();

// ── 21st: TEXT ROTATE (hero, letra por letra con stagger)
(function(){
  const el = $('#textRotate'); if(!el) return;
  const words = ['vende','enamora','convierte','destaca'];
  let idx = 0;
  const render = (word, entering) => {
    el.setAttribute('aria-label', word);
    const chars = Array.from(word);
    el.innerHTML = chars.map((c,i)=>`<span class="tr-char" style="transition-delay:${(entering?i:chars.length-1-i)*28}ms">${c}</span>`).join('');
    const cs = el.querySelectorAll('.tr-char');
    cs.forEach(s=>{ s.style.transition='transform .5s cubic-bezier(.22,1,.36,1),opacity .5s'; s.style.transform='translateY(110%)'; s.style.opacity='0'; });
    requestAnimationFrame(()=>requestAnimationFrame(()=>cs.forEach(s=>{s.style.transform='none';s.style.opacity='1';})));
  };
  render(words[0], true);
  if(reduce) return;
  setInterval(()=>{
    const cur = el.querySelectorAll('.tr-char');
    cur.forEach((s,i)=>{ s.style.transitionDelay=(i*24)+'ms'; s.style.transform='translateY(-120%)'; s.style.opacity='0'; });
    setTimeout(()=>{ idx=(idx+1)%words.length; render(words[idx], true); }, 340);
  }, 2600);
})();

// ── 21st: DOTTED SURFACE (ola de puntos)
(function(){
  if(reduce) return;
  const cv = $('#dots'); if(!cv) return;
  const ctx = cv.getContext('2d');
  let w,h,cols,rows,t=0; const gap=34;
  const resize=()=>{ w=cv.width=innerWidth; h=cv.height=innerHeight; cols=Math.ceil(w/gap)+1; rows=Math.ceil(h/gap)+1; };
  resize(); addEventListener('resize', resize);
  (function draw(){
    ctx.clearRect(0,0,w,h); t+=.02;
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++){
      const px=x*gap, py=y*gap;
      const z=Math.sin(x*.4+t)+Math.cos(y*.4+t*.8);
      const r=(z+2)/4*1.7+.2, o=(z+2)/4*.5+.05;
      ctx.beginPath(); ctx.arc(px,py,r,0,7);
      ctx.fillStyle=`rgba(120,170,255,${o})`; ctx.fill();
    }
    requestAnimationFrame(draw);
  })();
})();

// ── 21st: CONTAINER SCROLL (mockup se endereza)
(function(){
  const card=$('#showCard'), stage=$('#showStage'); if(!card||!stage) return;
  const upd=()=>{
    const r=stage.getBoundingClientRect();
    const p=Math.min(1,Math.max(0,1-(r.top)/(innerHeight*.9)));
    const rot=38-38*p, sc=.82+.18*p, ty=(1-p)*40;
    card.style.transform=`rotateX(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)}) translateY(${ty.toFixed(1)}px)`;
  };
  addEventListener('scroll', upd, {passive:true}); addEventListener('resize', upd); upd();
})();

// ── Reveal observer (definido antes de usarse)
let io=null;
function observeReveals(){
  if(!io){ io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.1}); }
  $$('.reveal:not(.in)').forEach(el=>io.observe(el));
}

// ── SERVICIOS
const SERVICIOS = [
  {e:'🍕', t:'Restaurantes & Cafeterías', d:'Menú digital, galería de fotos, pedidos por WhatsApp, horarios y reservas online.'},
  {e:'✂️', t:'Barberías & Peluquerías', d:'Agenda de turnos, catálogo de servicios, galería de trabajos y precios.'},
  {e:'💪', t:'Gimnasios & Estudios', d:'Planes y precios, clases y horarios, fotos del espacio y contacto directo.'},
  {e:'🛍️', t:'Tiendas & Emprendimientos', d:'Catálogo de productos, carrito por WhatsApp, métodos de pago y envíos.'},
  {e:'👔', t:'Profesionales Independientes', d:'Portfolio, servicios, testimonios, agenda y formulario de contacto.'},
  {e:'🏪', t:'Negocios Locales', d:'Todo lo que necesita tu comercio para tener presencia digital profesional.'},
];
$('#servGrid').innerHTML = SERVICIOS.map(s=>`<article class="serv reveal"><div class="serv-emoji">${s.e}</div><h3>${s.t}</h3><p>${s.d}</p></article>`).join('');
$$('.serv').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');}));

// ── WHY cards
const WHY = [
  {b:'🎁', t:'Demo 100% gratis', d:'Te muestro tu web terminada antes de que pagues nada.'},
  {b:'⚡', t:'Rápido y sin vueltas', d:'En pocos días la tenés lista para salir a vender.'},
  {b:'📱', t:'Pensada para el celular', d:'Ahí entra casi toda tu gente. Se ve impecable.'},
  {b:'🔎', t:'Optimizada para Google', d:'Para que te encuentren cuando te buscan.'},
];
$('#whyCards').innerHTML = WHY.map((w,i)=>`<div class="why-card reveal d${i%2}"><b>${w.b}</b><div><h4>${w.t}</h4><p>${w.d}</p></div></div>`).join('');

// ── TRABAJOS (proyectos reales — ordenados por prioridad)
const WORKS = [
  {n:'Upthos', c:'Adquisición de clientes', d:'Plataforma de adquisición de clientes con estrategias de growth marketing.', g:'wg1', u:'https://upthos.net/', img:'portfolio/upthos.net_.png'},
  {n:'Scale Media', c:'Marketing digital', d:'Impulsa tu presencia en redes sociales con seguidores, likes y engagement.', g:'wg2', u:'https://scalemedia.shop', img:'portfolio/scalemedia.shop_.png'},
  {n:'Arburu Marketing', c:'Agencia de marketing', d:'Agencia de marketing digital con servicios de publicidad y branding.', g:'wg3', u:'https://menusdigitalesar.github.io/arburu/', img:'portfolio/menusdigitalesar.github.io_arburu_.png'},
  {n:'JitterVPN', c:'VPN service', d:'Servicio VPN rápido y seguro para navegación privada sin restricciones.', g:'wg4', u:'https://menusdigitalesar.github.io/JitterVPNOficial/', img:'portfolio/menusdigitalesar.github.io_JitterVPNOficial_.png'},
  {n:'Tolclima', c:'Toldos y cerramientos', d:'Toldos, cerramientos y soluciones de climatización para hogares y comercios.', g:'wg5', u:'https://menusdigitalesar.github.io/TolClima---Pagina-Web/', img:'portfolio/menusdigitalesar.github.io_TolClima---Pagina-Web_.png'},
  {n:'OmNaturaleza', c:'Centro holístico', d:'Centro de bienestar holístico con terapias naturales y productos orgánicos.', g:'wg6', u:'https://menusdigitalesar.github.io/OmNaturaleza/', img:'portfolio/menusdigitalesar.github.io_OmNaturaleza_.png'},
  {n:'Aromas del Sahukan', c:'Tienda holística', d:'Tienda de productos holísticos, sahumerios y aromaterapia natural.', g:'wg7', u:'https://menusdigitalesar.github.io/AromasDelSahukanDEMO/', img:'portfolio/menusdigitalesar.github.io_AromasDelSahukanDEMO_.png'},
  {n:'Pizzeria El Angel', c:'Gastronomía', d:'Pizzas a la piedra, fugazzetas y empanadas de calidad en Luis Guilón.', g:'wg18', u:'https://pizzeria-elangel-menu.lovable.app', img:'portfolio/elangelproyecto3.jpg'},
  {n:'Burga Lovers', c:'Gastronomía', d:'Hamburguesas artesanales con ingredientes seleccionados y sabor que enamora.', g:'wg19', u:'https://burga-lovers-menu.lovable.app', img:'portfolio/burgaloversproyecto4.jpg'},
  {n:'El Picadero', c:'Gastronomía', d:'Picadas, hamburguesas artesanales y cervezas frías en un ambiente ideal.', g:'wg20', u:'https://elpicadero-menudemo.lovable.app', img:'portfolio/elpicaderoproyecto5.jpg'},
  {n:'Sensei Sushi', c:'Gastronomía', d:'Rolls premium, combinaciones exclusivas y la máxima frescura en cada bocado.', g:'wg21', u:'https://senseisushi-menudemo.lovable.app', img:'portfolio/senseisushiproyecto6.jpg'},
  {n:'Salud Y Estética MG', c:'Salud', d:'Tratamientos personalizados para cuidar tu bienestar, confianza y belleza.', g:'wg22', u:'https://saludyesteticamg-demo.lovable.app/', img:'portfolio/saludyesteticaproyecto7.jpg'},
  {n:'Sabores del Chiringuito', c:'Gastronomía', d:'Sabores únicos, porciones abundantes y el ambiente ideal para compartir.', g:'wg23', u:'https://saboresdelchiringuito-menudemo.lovable.app', img:'portfolio/chiringuitoproyecto8.jpg'},
  {n:'Ada Artesanal', c:'Ropa artesanal', d:'Ropa de diseño artesanal con identidad y estilo propio.', g:'wg8', u:'https://menusdigitalesar.github.io/AdaArtesanal/', img:'portfolio/menusdigitalesar.github.io_AdaArtesanal_.png'},
  {n:'ZMBEAUTY', c:'Calzado e indumentaria', d:'Calzado e indumentaria femenina con estilo y tendencia.', g:'wg9', u:'https://menusdigitalesar.github.io/ZMbeauty-v2/', img:'portfolio/menusdigitalesar.github.io_ZMbeauty-v2_.png'},
  {n:'Pivara', c:'Cafetería', d:'Cafetería con ambiente acogedor, café de especialidad y repostería.', g:'wg10', u:'https://menusdigitalesar.github.io/Pivara-Cafeteria/', img:'portfolio/menusdigitalesar.github.io_Pivara-Cafeteria_.png'},
  {n:'La Posta', c:'Gastronomía', d:'Comida casera, porciones abundantes y sabores tradicionales.', g:'wg18', u:'https://la-posta-digital-menudemo.lovable.app/', img:'portfolio/lapostaproyecto9.jpg'},
  {n:'El Sazón Venezolano', c:'Gastronomía', d:'Sabores auténticos de Venezuela con recetas tradicionales.', g:'wg19', u:'https://el-sazon-venezolano-menu-demo.lovable.app/', img:'portfolio/elsazonproyecto10.jpg'},
  {n:'PUXMIN', c:'Ropa deportiva', d:'Ropa deportiva femenina con diseño y comodidad.', g:'wg11', u:'https://menusdigitalesar.github.io/Puxmin-web/', img:'portfolio/menusdigitalesar.github.io_Puxmin-web_.png'},
  {n:'English Go', c:'Cursos de inglés', d:'Cursos de inglés online con metodología práctica y resultados.', g:'wg12', u:'https://menusdigitalesar.github.io/EnglishGO/', img:'portfolio/menusdigitalesar.github.io_EnglishGO_.png'},
  {n:'Tackle Pro', c:'Rugby protection', d:'Equipamiento de protección rugby de alto rendimiento.', g:'wg13', u:'https://menusdigitalesar.github.io/Tackle-Pro/', img:'portfolio/menusdigitalesar.github.io_Tackle-Pro_.png'},
  {n:'_nudo', c:'Collares paracord', d:'Collares y accesorios de paracord hechos a mano.', g:'wg14', u:'https://menusdigitalesar.github.io/Nudo-Paracord-V3/', img:'portfolio/menusdigitalesar.github.io_Nudo-Paracord-V3_.png'},
  {n:'Electro Juan', c:'Electrodomésticos', d:'Venta de electrodomésticos con las mejores marcas y precios.', g:'wg15', u:'https://menusdigitalesar.github.io/ElectroJuan/', img:'portfolio/menusdigitalesar.github.io_ElectroJuan_.png'},
  {n:'Charlas de Turismo', c:'Noticias de turismo', d:'Portal de noticias y novedades del turismo nacional.', g:'wg16', u:'https://menusdigitalesar.github.io/CharlasDeTurismo/', img:'portfolio/menusdigitalesar.github.io_CharlasDeTurismo_.png'},
  {n:'Todo Chaco Info', c:'Noticias', d:'Portal de noticias e información de la provincia del Chaco.', g:'wg17', u:'https://menusdigitalesar.github.io/TodoChaco/', img:'portfolio/menusdigitalesar.github.io_TodoChaco_.png'},
];
const WORKS_INITIAL = 6;
let worksExpanded = false;
function renderWorks(){
  const wg = $('#workGrid');
  wg.innerHTML = WORKS.map((w,i)=>`
  <a class="work reveal${i>=WORKS_INITIAL && !worksExpanded?' hidden':''}" style="--i:${i%3}" href="${w.u}" target="_blank" rel="noopener">
    <div class="work-media ${w.g}">
      <img class="work-img" src="${w.img}" alt="${w.n}" loading="lazy">
    </div>
    <div class="work-info">
      <h3>${w.n}</h3>
      <span class="work-cat">${w.c}</span>
      <p class="work-desc">${w.d}</p>
      <span class="work-link">Ver sitio ↗</span>
    </div>
  </a>`).join('');
  const existing = wg.parentElement.querySelector('.work-toggle');
  if(existing) existing.remove();
  const btn = document.createElement('button');
  btn.className='work-toggle';
  btn.textContent = worksExpanded ? 'Ver menos ↑' : `Ver los ${WORKS.length} trabajos ↓`;
  btn.addEventListener('click',()=>{ worksExpanded=!worksExpanded; renderWorks(); observeReveals(); initCardTilt(); });
  wg.parentElement.appendChild(btn);
  let disc = wg.parentElement.querySelector('.work-disclaimer');
  if(!disc){ disc=document.createElement('p'); disc.className='work-disclaimer'; disc.textContent='Algunas de estas webs fueron diseñadas como demo para potenciales clientes. Es posible que algunas estén incompletas o sin contenido final.'; wg.parentElement.appendChild(disc); }
  observeReveals();
  initCardTilt();
}
renderWorks();

// ── PROCESO
const STEPS = [
  {t:'Me escribís', d:'Por WhatsApp me contás tu negocio y qué necesitás.'},
  {t:'Diseño tu web', d:'Armo la web completa a medida de tu rubro.'},
  {t:'La ves terminada', d:'Te la muestro por WhatsApp o videollamada. Ajustamos lo que quieras.'},
  {t:'La subimos online', d:'Si te gusta, la publicamos. Recién ahí pagás.'},
];
$('#steps').innerHTML = STEPS.map((s,i)=>`<div class="step reveal d${i%2}"><div class="step-n">0${i+1}</div><h3>${s.t}</h3><p>${s.d}</p></div>`).join('');

// ── PLANES
const PLANES = [
  {e:'🌱', n:'Starter', d:'Para dar el primer paso online.', pop:false, f:['Diseño personalizado','Hasta 5 secciones','Botón WhatsApp','Formulario de contacto','Optimizada para celular','SEO básico'], cta:'Consultar precio'},
  {e:'🚀', n:'Pro', d:'La más elegida. Todo lo que un negocio necesita.', pop:true, f:['Todo lo del Starter +','Menú / catálogo digital','Galería de imágenes','Google Maps integrado','SEO local avanzado','Google Analytics','Soporte 1 mes incluido'], cta:'Elegir este plan'},
  {e:'💎', n:'Full', d:'Para el máximo impacto.', pop:false, f:['Todo lo del Pro +','Tienda online / eCommerce','Integración de pagos','Blog / noticias','Formularios avanzados','Soporte 3 meses'], cta:'Consultar precio'},
];
$('#planGrid').innerHTML = PLANES.map(p=>`
  <article class="plan${p.pop?' pop':''} reveal">
    ${p.pop?'<span class="plan-tag">⭐ Más elegido</span>':''}
    <div class="plan-emoji">${p.e}</div>
    <h3>${p.n}</h3>
    <p class="plan-desc">${p.d}</p>
    <ul class="plan-feats">${p.f.map(f=>`<li>${f}</li>`).join('')}</ul>
    <a href="#" class="btn ${p.pop?'btn-grad':'btn-glass'}" data-hov data-wa="Hola Santiago! Me interesa el plan ${p.n} para mi web."><span>${p.cta}</span></a>
  </article>`).join('');

// ── TESTIMONIOS
const TESTIMONIOS = [
  {q:'Me hizo la web de la cafetería y quedó espectacular. La vi antes de pagar y no dudé. Muy recomendable.', n:'Malena', r:'Dueña · Cafetería', a:'M'},
  {q:'Rápido, atento y con un diseño de otro nivel. La web me trajo clientes nuevos en la primera semana.', n:'Diego', r:'Barbería', a:'D'},
  {q:'Entendió justo lo que necesitaba. El catálogo por WhatsApp me cambió las ventas. Un genio.', n:'Flor', r:'Emprendimiento', a:'F'},
];
const testiCard = t=>`
  <article class="testi">
    <div class="testi-stars">★★★★★</div>
    <p>“${t.q}”</p>
    <div class="testi-who"><span class="testi-av">${t.a}</span><span><span class="testi-name">${t.n}</span><br><span class="testi-rol">${t.r}</span></span></div>
  </article>`;
// duplico el set para que el marquee vertical sea continuo
const colHtml = TESTIMONIOS.concat(TESTIMONIOS).map(testiCard).join('');
const cA=$('#testiColA'), cB=$('#testiColB');
if(cA) cA.innerHTML = colHtml;
if(cB) cB.innerHTML = TESTIMONIOS.slice().reverse().concat(TESTIMONIOS.slice().reverse()).map(testiCard).join('');

// ── reveal inicial
observeReveals();

// ── Count-up
(function(){
  const run = el => { const to=+el.dataset.to; if(reduce){el.textContent=to;return;} const dur=1300,t0=performance.now(); const tick=now=>{const p=Math.min((now-t0)/dur,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick);}; requestAnimationFrame(tick); };
  const so = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ run(e.target); so.unobserve(e.target);} }),{threshold:.6});
  $$('[data-to]').forEach(el=>so.observe(el));
})();

// ── Año
$('#yr').textContent = new Date().getFullYear();

// ── SHOWCASE PIZZERIA ANIMATION (items enter staggered)
(function(){
  const screen = $('#showScreen');
  const stage = $('#showStage');
  if(!screen || !stage || reduce){ if(screen) screen.classList.add('animated'); return; }
  const items = screen.querySelectorAll('.ss-item');
  items.forEach((item, i) => { item.style.transitionDelay = (0.45 + i * 0.12) + 's'; });
  let fired = false;
  const trigger = () => { if(fired) return; fired = true; requestAnimationFrame(()=>requestAnimationFrame(()=>screen.classList.add('animated'))); };
  const sio = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ trigger(); sio.unobserve(stage); } }), {threshold: 0.05});
  sio.observe(stage);
  const scrollCheck = () => { const r = stage.getBoundingClientRect(); if(r.top < innerHeight * 0.85){ trigger(); removeEventListener('scroll', scrollCheck); } };
  addEventListener('scroll', scrollCheck, {passive:true});
  scrollCheck();
})();

// ── 3D TILT on cards (ezterbial-inspired mouse interaction)
function initCardTilt(){
  if(reduce || !matchMedia('(hover:hover)').matches) return;
  $$('.work, .serv, .plan, .why-card, .step').forEach(card=>{
    if(card._tiltBound) return;
    card._tiltBound = true;
    card.style.transition = 'transform .3s cubic-bezier(.22,1,.36,1)';
    card.addEventListener('pointermove', e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(600px) rotateY(${x*8}deg) rotateX(${-y*8}deg) scale(1.02)`;
    });
    card.addEventListener('pointerleave', ()=>{
      card.style.transform = '';
    });
  });
}
initCardTilt();

// ── SCROLL COLOR TRANSITIONS (aurora hue shift on scroll)
(function(){
  if(reduce) return;
  const aurora = $$('.aurora span');
  if(!aurora.length) return;
  const colors = [
    ['rgba(34,211,238,.28)','rgba(139,92,246,.26)','rgba(59,130,246,.2)'],
    ['rgba(139,92,246,.28)','rgba(34,211,238,.26)','rgba(236,72,153,.2)'],
    ['rgba(59,130,246,.28)','rgba(236,72,153,.26)','rgba(34,211,238,.2)'],
    ['rgba(236,72,153,.28)','rgba(59,130,246,.26)','rgba(139,92,246,.2)'],
  ];
  let last = -1;
  const upd = () => {
    const p = scrollY / (document.documentElement.scrollHeight - innerHeight);
    const idx = Math.min(colors.length - 1, Math.floor(p * colors.length));
    if(idx === last) return;
    last = idx;
    aurora.forEach((s, i) => { s.style.transition = 'background 1.5s ease'; s.style.background = colors[idx][i] || colors[idx][0]; });
  };
  addEventListener('scroll', upd, {passive:true});
  upd();
})();

// ── FASTER TESTIMONIALS MARQUEE
(function(){
  $$('.testi-col').forEach(col => {
    col.style.animationDuration = '14s';
  });
})();

// ── GLOWING SHADOW on CTA buttons (replaces magnetic)
(function(){
  if(reduce) return;
  $$('.btn-grad').forEach(btn=>{
    btn.addEventListener('pointermove', e=>{
      const r=btn.getBoundingClientRect();
      btn.style.setProperty('--gx',(e.clientX-r.left)+'px');
      btn.style.setProperty('--gy',(e.clientY-r.top)+'px');
    });
  });
})();

// ── TEXT SHIMMER on section headings (21st: gradient-text sweep)
(function(){
  if(reduce) return;
  $$('.sec-head h2, .why-text h2, .cta h2').forEach(h=>{
    h.classList.add('shimmer-text');
  });
})();

// ── HOVER RIPPLE on nav links (21st: underline-animation enhanced)
(function(){
  if(reduce) return;
  $$('.nav-links a:not(.nav-cta)').forEach(a=>{
    a.addEventListener('mouseenter',()=>a.classList.add('nav-hover-active'));
    a.addEventListener('mouseleave',()=>a.classList.remove('nav-hover-active'));
  });
})();
