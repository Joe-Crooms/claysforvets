/* ─── CLAYS FOR VETS — main.js ─── */

(function () {
  'use strict';

  /* ── Page Router ── */
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + id);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    // Update active nav link
    document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
      a.classList.toggle('nav-active', a.dataset.page === id);
    });
    // Close mobile menu
    document.querySelector('.nav-links')?.classList.remove('open');
  }

  /* ── Attach nav clicks ── */
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[data-page]');
    if (a) {
      e.preventDefault();
      showPage(a.dataset.page);
    }
    const btn = e.target.closest('button[data-page]');
    if (btn) showPage(btn.dataset.page);
  });

  /* ── Hamburger ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));

  /* ── Donate tier selection ── */
  document.querySelectorAll('.donate-tier').forEach(tier => {
    tier.addEventListener('click', function () {
      document.querySelectorAll('.donate-tier').forEach(t => t.classList.remove('selected'));
      this.classList.add('selected');
      const amt = this.dataset.amount;
      const customInput = document.getElementById('custom-amount');
      if (amt && customInput) {
        customInput.value = amt !== 'custom' ? amt : '';
        if (amt !== 'custom') customInput.focus();
      }
    });
  });

  /* ── Contact form ── */
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  });

  /* ── Donate form ── */
  const donateForm = document.getElementById('donate-form');
  donateForm?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your generous support! In a live site, this would connect to a payment processor like Stripe or PayPal.');
  });

  /* ── Counter animation ── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + (el.dataset.suffix || '');
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  /* ── IntersectionObserver for counters & fade-ins ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('count-up')) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
        if (entry.target.classList.contains('fade-in')) {
          entry.target.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.count-up, .fade-in').forEach(el => observer.observe(el));

  /* ── Nav scroll shadow ── */
  window.addEventListener('scroll', () => {
    document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ── Init ── */
  showPage('home');
})();
