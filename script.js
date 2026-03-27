// ─── Scroll-triggered animations ────────────────────────────
function initScrollAnimations() {
  // Add classes to animatable elements
  document.querySelectorAll('.step-card, .agent-card, .foundation-card, .orch-card, .pipeline-stage, .qa-card, .loop-card, .self-heal-callout').forEach(el => {
    el.classList.add('fade-in');
  });

  // Add stagger to grid containers
  document.querySelectorAll('.steps-grid, .agent-grid, .foundation-grid, .orch-grid, .qa-stack').forEach(el => {
    el.classList.add('stagger');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in, .stagger').forEach(el => {
    observer.observe(el);
  });
}

// ─── Active nav highlight on scroll ─────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('.section[id], .hero[id]');
  const links = document.querySelectorAll('.header-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-56px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// ─── Frosted glass header on scroll ─────────────────────────
function initHeaderShadow() {
  const header = document.querySelector('.site-header');
  let scrolled = false;

  window.addEventListener('scroll', function() {
    const shouldBeScrolled = window.scrollY > 50;
    if (shouldBeScrolled !== scrolled) {
      scrolled = shouldBeScrolled;
      header.classList.toggle('is-scrolled', scrolled);
    }
  }, { passive: true });
}

// ─── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initActiveNav();
  initHeaderShadow();
});
