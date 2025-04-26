// Toggle dark mode
const themeButton = document.getElementById('toggle-theme');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = '☀️';
  } else {
    themeButton.textContent = '🌙';
  }
});

// Scroll animation
const sections = document.querySelectorAll('.section');

function revealSections() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealSections);

// Initial check
revealSections();
