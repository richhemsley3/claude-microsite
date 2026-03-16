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

// ─── Smooth header shadow on scroll ─────────────────────────
function initHeaderShadow() {
  const header = document.querySelector('.site-header');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 10) {
          header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.06)';
        } else {
          header.style.boxShadow = 'none';
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ─── Init ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initActiveNav();
  initHeaderShadow();
});
