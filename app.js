function toggleMenu(el) {
  el.classList.toggle("active");
  document.getElementById("menu").classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("light");

  const btn = document.getElementById('themeBtn');
  if(document.body.classList.contains('light')) {
    btn.innerText = '☀️';
  } else {
    btn.innerText = '🌙';
  }
}