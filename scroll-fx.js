/* ============================================================
   Scroll Effects — reveal on scroll + hero parallax
   ============================================================ */
(function () {
  'use strict';

  // ── Scroll-reveal via IntersectionObserver ──
  // Repeats: elements reset when scrolled out, re-animate on re-entry
  const revealEls = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-scale, .reveal-stagger'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // ── Hero parallax on scroll ──
  const heroBg = document.querySelector('.hero-bg');
  const hero = document.querySelector('.hero');

  if (heroBg && hero) {
    let ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          const scrollY = window.pageYOffset;
          const heroH = hero.offsetHeight;
          if (scrollY < heroH) {
            heroBg.style.transform = 'translateY(' + scrollY * 0.3 + 'px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ── Smooth scroll for nav links ──
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
