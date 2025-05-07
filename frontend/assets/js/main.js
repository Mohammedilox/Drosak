// =======================
// زر القائمة (للشاشات الصغيرة)
document.getElementById('nav-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});

// =======================
// زر تغيير الثيم (وضع داكن/فاتح)
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  let theme = 'light';
  if (document.body.classList.contains('dark')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
});
