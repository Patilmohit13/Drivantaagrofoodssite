/* ===== DRIVANTA AGRO FOODS – main.js ===== */

// ── Data ──────────────────────────────────────────────────────────────
const PRODUCTS = {
  vegetables: [
    { name: 'Dehydrated Onion Flakes', emoji: '🧅', desc: 'Uniform flakes, pungent aroma, long shelf life. Ideal for snacks, soups & ready meals.', tag: 'Best Seller' },
    { name: 'Dehydrated Tomato Slices', emoji: '🍅', desc: 'Sun-ripened tomatoes dried to preserve lycopene. Used in pasta, pizza toppings & seasonings.', tag: '' },
    { name: 'Dehydrated Ginger Pieces', emoji: '🫚', desc: 'Spicy, fibrous ginger retained at peak harvest. For teas, spice blends & confectionery.', tag: '' },
    { name: 'Dehydrated Green Peas', emoji: '🫛', desc: 'Bright colour, high protein. Ideal for instant soups, rice dishes & vegetable mixes.', tag: 'Popular' },
    { name: 'Dehydrated Spinach Flakes', emoji: '🥬', desc: 'Preserved at nutritional peak. Used in pasta, parathas & health supplements.', tag: '' },
    { name: 'Dehydrated Carrot Dices', emoji: '🥕', desc: 'Naturally sweet, vibrant orange. Common in rice dishes, soups & dehydrated meal kits.', tag: '' },
    { name: 'Dehydrated Beetroot Powder', emoji: '🫐', desc: 'Deep magenta powder. Used in natural food colouring, beverages & health mixes.', tag: '' },
    { name: 'Dehydrated Cabbage', emoji: '🥦', desc: 'Shredded, moisture-free. Rehydrates quickly for stir-fries, soups & instant noodles.', tag: '' },
  ],
  fruits: [
    { name: 'Dehydrated Mango Slices', emoji: '🥭', desc: 'Alphonso & Kesar variety. Naturally sweet, no added sugar. Snacking & confectionery use.', tag: 'Best Seller' },
    { name: 'Dehydrated Banana Chips', emoji: '🍌', desc: 'Crunchy, minimally processed. Popular in trail mixes, cereals & health snacks.', tag: 'Popular' },
    { name: 'Dehydrated Amla (Gooseberry)', emoji: '🫐', desc: 'Rich in Vitamin C. Used in Ayurvedic products, chutneys & health formulations.', tag: '' },
    { name: 'Dehydrated Tamarind Pieces', emoji: '🟤', desc: 'Tangy pulp pieces, uniform size. For culinary sauces, candy & imli-based beverages.', tag: '' },
    { name: 'Dehydrated Coconut Slices', emoji: '🥥', desc: 'Unsweetened, natural flavour. For confectionery, baking & granola production.', tag: '' },
    { name: 'Dehydrated Pineapple Rings', emoji: '🍍', desc: 'Tropical, chewy texture. Used in premium snack mixes & baking applications.', tag: '' },
  ],
  spices: [
    { name: 'Dried Red Chilli Whole', emoji: '🌶️', desc: 'High colour value, medium-to-hot pungency. Ideal for Indian culinary and spice export.', tag: 'Best Seller' },
    { name: 'Dried Turmeric Pieces', emoji: '🟡', desc: 'High curcumin content. For spice grinding, health supplements & food colouring.', tag: 'Popular' },
    { name: 'Dried Coriander Seeds', emoji: '🌿', desc: 'Whole seeds with natural oils intact. For masala blends, bakery & pickling.', tag: '' },
    { name: 'Dried Fenugreek Leaves (Kasuri Methi)', emoji: '🌱', desc: 'Aromatic, bitter-sweet. Widely used in North Indian cooking and ready-to-cook mixes.', tag: '' },
    { name: 'Dried Curry Leaves', emoji: '🍃', desc: 'Retains natural aroma. Used in tempering, rice dishes & packaged spice blends.', tag: '' },
    { name: 'Dried Garlic Flakes', emoji: '🧄', desc: 'Clean, pungent flavour. Used in instant soups, sauces & seasoning mixes.', tag: '' },
  ]
};

const GALLERY_ITEMS = [
  { emoji: '🥦', label: 'Dehydrated Vegetables', desc: 'Premium quality, moisture-free vegetables for bulk supply.' },
  { emoji: '🥭', label: 'Dehydrated Fruits', desc: 'Sun-dried fruits preserving natural sweetness and nutrients.', tall: true },
  { emoji: '🌶️', label: 'Spices & Herbs', desc: 'Aromatic dried spices from Maharashtra farms.' },
  { emoji: '📦', label: 'Bulk Packaging', desc: 'Food-grade bulk packaging for industrial buyers.' },
  { emoji: '🏭', label: 'Processing Unit', desc: 'Hygienic facility in Nandurbar, Maharashtra.' },
  { emoji: '✅', label: 'FSSAI Certified', desc: 'Licensed and compliant with all food safety standards.' },
];

// ── AOS Init ──────────────────────────────────────────────────────────
AOS.init({
  duration: 700,
  once: true,
  easing: 'ease-out-cubic',
  offset: 60,
});

// ── GSAP Hero Animation ───────────────────────────────────────────────
function initHeroAnimations() {
  const tl = gsap.timeline({ delay: 0.2 });
  tl.to('#hero-tag',   { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', from: { y: 20 } })
    .to('#hero-h1',    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
    .to('#hero-sub',   { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .to('#hero-cta',   { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .to('#hero-stats', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2');

  gsap.set(['#hero-tag','#hero-h1','#hero-sub','#hero-cta','#hero-stats'], { y: 30 });
}

// ── Counters ──────────────────────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(el => {
    const target = parseInt(el.dataset.target);
    gsap.fromTo(el,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power1.out',
        delay: 1.2,
        snap: { innerText: 1 },
        onUpdate() { el.innerText = Math.floor(+el.innerText); },
      }
    );
  });
}

// ── Navbar Scroll ─────────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      navbar.classList.remove('scrolled', 'light-nav');
    } else {
      navbar.classList.add('scrolled');
    }
  }, { threshold: 0.1 });

  observer.observe(heroSection);

  // Change nav style on light sections
  const lightSections = ['about', 'why-us', 'contact'];
  lightSections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        navbar.classList.add('light-nav');
        navbar.classList.remove('scrolled');
      } else {
        navbar.classList.remove('light-nav');
      }
    }, { threshold: 0.5 });
    obs.observe(section);
  });
}

// ── Mobile Menu ───────────────────────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

// ── Products ──────────────────────────────────────────────────────────
let currentCategory = 'vegetables';
let swiper;

function renderProducts(category) {
  const container = document.getElementById('product-cards');
  const items = PRODUCTS[category] || [];
  container.innerHTML = '';

  items.forEach(item => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
      <div class="product-card h-full p-7 flex flex-col">
        ${item.tag ? `<span class="inline-block bg-saffron text-forest text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">${item.tag}</span>` : `<span class="block mb-8"></span>`}
        <span class="product-emoji">${item.emoji}</span>
        <h3 class="text-parchment font-display text-xl mb-3 leading-snug">${item.name}</h3>
        <p class="text-parchment/50 text-sm leading-relaxed flex-1">${item.desc}</p>
        <a href="#contact" class="mt-6 inline-flex items-center gap-2 text-saffron text-sm font-medium hover:gap-3 transition-all duration-200 group">
          Request Sample
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    `;
    container.appendChild(slide);
  });

  if (swiper) swiper.destroy(true, true);

  swiper = new Swiper('.products-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640:  { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    grabCursor: true,
  });
}

function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');
      currentCategory = tab.dataset.category;
      renderProducts(currentCategory);
    });
  });
  renderProducts(currentCategory);
}

// ── Gallery ───────────────────────────────────────────────────────────
function initGallery() {
  const grid = document.querySelector('.gallery-grid');
  if (!grid) return;

  GALLERY_ITEMS.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = `gallery-item${item.tall ? ' tall' : ''}`;
    el.setAttribute('data-aos', 'fade-up');
    el.setAttribute('data-aos-delay', String(i * 80));
    el.innerHTML = `
      <span class="gallery-emoji">${item.emoji}</span>
      <span class="gallery-label">${item.label}</span>
    `;
    el.addEventListener('click', () => openLightbox(item));
    grid.appendChild(el);
  });
}

function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  const container = document.getElementById('lightbox-img-container');
  container.innerHTML = `
    <div class="lightbox-inner">
      <span class="lb-emoji">${item.emoji}</span>
      <h3 class="lb-title">${item.label}</h3>
      <p class="lb-desc">${item.desc}</p>
    </div>
  `;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
  gsap.fromTo('.lightbox-content', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  gsap.to('.lightbox-content', {
    scale: 0.8, opacity: 0, duration: 0.2, onComplete: () => {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function initLightbox() {
  const closeBtn = document.getElementById('lightbox-close');
  const lb = document.getElementById('lightbox');
  closeBtn.addEventListener('click', closeLightbox);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

// ── Contact Form ──────────────────────────────────────────────────────
window.handleFormSubmit = function(e) {
  e.preventDefault();
  let valid = true;

  const fname = document.getElementById('fname');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Reset errors
  document.querySelectorAll('.error-msg').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.form-input').forEach(el => el.classList.remove('error-field'));

  if (!fname.value.trim()) {
    document.getElementById('fname-err').classList.remove('hidden');
    fname.classList.add('error-field');
    valid = false;
  }
  const emailVal = email.value.trim();
  if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    document.getElementById('email-err').classList.remove('hidden');
    email.classList.add('error-field');
    valid = false;
  }
  if (!message.value.trim()) {
    document.getElementById('msg-err').classList.remove('hidden');
    message.classList.add('error-field');
    valid = false;
  }

  if (!valid) {
    gsap.to('#contact-form-inner', { x: [-8, 8, -5, 5, 0], duration: 0.3 });
    return;
  }

  // Show loading
  const btnText = document.getElementById('btn-text');
  const btnLoader = document.getElementById('btn-loader');
  const submitBtn = document.getElementById('submit-btn');
  btnText.textContent = 'Sending…';
  btnLoader.classList.remove('hidden');
  submitBtn.disabled = true;

  // Simulate submit
  setTimeout(() => {
    document.getElementById('contact-form-inner').classList.add('hidden');
    document.getElementById('form-success').classList.remove('hidden');
    gsap.from('#form-success', { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' });
  }, 1400);
};

// ── Scroll to Top ─────────────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Parallax (light, CSS-based via GSAP) ─────────────────────────────
function initParallax() {
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.sun-rays', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });
  }
}

// ── Smooth anchor scroll with offset ─────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── Init ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initCounters();
  initNavbar();
  initMobileMenu();
  initTabs();
  initGallery();
  initLightbox();
  initScrollTop();
  initParallax();
  initSmoothScroll();

  // Re-init AOS after dynamic content
  setTimeout(() => AOS.refresh(), 300);
});
