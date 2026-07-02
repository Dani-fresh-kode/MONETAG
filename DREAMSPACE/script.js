// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark', currentTheme === 'dark');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Theme Selector
const themeSelectorBtn = document.getElementById('theme-selector-btn');
const themeDropdown = document.getElementById('theme-dropdown');
const themeItems = document.querySelectorAll('.theme-item');

const savedColorTheme = localStorage.getItem('color-theme') || 'romantic';
document.documentElement.setAttribute('data-theme', savedColorTheme);

if (themeSelectorBtn) {
  themeSelectorBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themeDropdown.classList.toggle('active');
  });
}

themeItems.forEach(item => {
  item.addEventListener('click', () => {
    const theme = item.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('color-theme', theme);
    themeDropdown.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (themeDropdown && !themeDropdown.contains(e.target) && e.target !== themeSelectorBtn) {
    themeDropdown.classList.remove('active');
  }
});

// Floating particles
const heroParticles = document.querySelector('.hero-particles');
if (heroParticles) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 8px;
      height: 8px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${3 + Math.random() * 2}s ease-in-out infinite;
      animation-delay: ${Math.random() * 3}s;
    `;
    heroParticles.appendChild(particle);
  }
}

// Scroll animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.gallery-item, .reason-item');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
});
