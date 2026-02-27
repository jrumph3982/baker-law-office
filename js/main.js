/* Baker Law Office — main.js */

document.addEventListener('DOMContentLoaded', function () {

  // ===== YEAR =====
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

  // ===== TESTIMONIAL SLIDER =====
  const slides  = document.querySelectorAll('.testimonial-slide');
  const dots    = document.querySelectorAll('.t-dot');
  const prevBtn = document.getElementById('t-prev');
  const nextBtn = document.getElementById('t-next');

  if (slides.length > 0) {
    let current = 0;
    let autoTimer;

    function showSlide(n) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
    }

    function startAuto() {
      autoTimer = setInterval(() => showSlide(current + 1), 5000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    showSlide(0);
    startAuto();

    if (prevBtn) {
      prevBtn.addEventListener('click', () => { showSlide(current - 1); resetAuto(); });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => { showSlide(current + 1); resetAuto(); });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { showSlide(i); resetAuto(); });
    });
  }

  // ===== SCROLL FADE-IN =====
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window && fadeEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }

  // ===== HEADER SCROLL EFFECT =====
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.background = window.scrollY > 60
        ? 'rgba(10, 18, 30, 0.98)'
        : 'rgba(15, 28, 46, 0.95)';
    }, { passive: true });
  }

  // ===== HASH HIGHLIGHT =====
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => {
        target.style.background = 'rgba(200,169,110,0.06)';
        setTimeout(() => target.style.background = '', 1500);
      }, 300);
    }
  }

});
