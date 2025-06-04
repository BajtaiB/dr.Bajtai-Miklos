tailwind.config = {
            theme: {
                fontFamily: {
                    sans: ['Montserrat', 'sans-serif'],
                    serif: ['Cormorant Garamond', 'serif'],
                },
                extend: {
                    colors: {
                        primary: {
                            50: '#f3f7f0',
                            100: '#e0eadb',
                            200: '#c5d7be',
                            300: '#9fc097',
                            400: '#77a76c',
                            500: '#5b8e50',  // Main green
                            600: '#45733b',
                            700: '#365a2f',
                            800: '#2d4627',
                            900: '#233720',
                        }
                    },
                    transitionProperty: {
                        'size': 'width, height',
                        'spacing': 'margin, padding',
                    }
                }
            }
        }
// Toggle sidebar
        function toggleSidebar() {
            document.querySelector('.sidebar').classList.toggle('open');
            document.querySelector('.overlay').classList.toggle('open');
        }

        // Toggle firm name slogan
        function toggleFirmName() {
            document.getElementById('firmSlogan').classList.toggle('collapsed');
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Close sidebar when clicking a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.sidebar').classList.remove('open');
                document.querySelector('.overlay').classList.remove('open');
            });
        });
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
