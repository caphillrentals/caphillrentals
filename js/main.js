// ── Nav: toggle light mode when over white sections ────────────
const nav = document.getElementById('nav');
const lightSections = ['#essentials','#rooms','#rules','#privacy','#support'];

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      if (lightSections.includes(id)) {
        nav.classList.add('light');
      } else {
        nav.classList.remove('light');
      }
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));

// ── Mobile menu ───────────────────────────────────────────────
const menuBtn = document.getElementById('menuBtn');
const navDrawer = document.getElementById('navDrawer');

menuBtn.addEventListener('click', () => {
  navDrawer.classList.toggle('open');
});

navDrawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navDrawer.classList.remove('open'));
});

// ── Scroll reveal ─────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObs.observe(el));

// ── Local guide tabs ──────────────────────────────────────────
const tabs = document.querySelectorAll('.ltab');
const panels = document.querySelectorAll('.lpanel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
  });
});

// ── Smooth scroll with nav offset ────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 56,
      behavior: 'smooth'
    });
  });
});
