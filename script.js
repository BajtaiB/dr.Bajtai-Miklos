// Hamburger menü megjelenítése/elrejtése
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Scroll animáció ScrollReveal-vel
ScrollReveal().reveal('header', {
  delay: 200,
  origin: 'top',
  distance: '50px',
  duration: 800
});

ScrollReveal().reveal('#hero', {
  delay: 300,
  origin: 'bottom',
  distance: '50px',
  duration: 800
});

ScrollReveal().reveal('#rolam', {
  delay: 400,
  origin: 'left',
  distance: '50px',
  duration: 800
});

ScrollReveal().reveal('#szolgaltatasok', {
  delay: 500,
  origin: 'right',
  distance: '50px',
  duration: 800
});

ScrollReveal().reveal('#kapcsolat', {
  delay: 600,
  origin: 'bottom',
  distance: '50px',
  duration: 800
});
