const langToggle = document.getElementById('langToggle');
const langEn = document.getElementById('langEn');
const langKo = document.getElementById('langKo');

let currentLang = localStorage.getItem('resumeLang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('resumeLang', lang);
  document.documentElement.lang = lang;
  document.body.classList.toggle('ko', lang === 'ko');
  langEn.classList.toggle('active', lang === 'en');
  langKo.classList.toggle('active', lang === 'ko');
  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text !== null) el.innerHTML = text;
  });
}

langToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'ko' : 'en');
});

applyLanguage(currentLang);

const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(s => observer.observe(s));