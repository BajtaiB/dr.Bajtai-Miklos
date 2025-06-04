// Tailwind configuration
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
        },
        secondary: {
          500: '#5b8e50', // Matching the primary green
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
  const sidebarContainer = document.getElementById('sidebarContainer');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  sidebarContainer.classList.toggle('hidden');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  
  // Toggle body overflow when sidebar is open
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Toggle firm name slogan (if still needed)
function toggleFirmName() {
  const firmSlogan = document.getElementById('firmSlogan');
  if (firmSlogan) {
    firmSlogan.classList.toggle('collapsed');
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
      
      // Update URL without page reload
      if (history.pushState) {
        history.pushState(null, null, targetId);
      } else {
        location.hash = targetId;
      }
    }
  });
});

// Close sidebar when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    if (sidebar && overlay) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
});

// Initialize ScrollReveal if available
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    reset: true
  });

  sr.reveal('header', {
    delay: 200,
    origin: 'top'
  });

  sr.reveal('#home', {
    delay: 300,
    origin: 'bottom'
  });

  sr.reveal('#services', {
    delay: 400,
    origin: 'left'
  });

  sr.reveal('#criminal-laws', {
    delay: 500,
    origin: 'right'
  });

  sr.reveal('#contact', {
    delay: 600,
    origin: 'bottom'
  });
}

// Hamburger menu toggle (if needed)
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
  }
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const sidebarToggle = document.querySelector('[onclick="toggleSidebar()"]');
  
  if (sidebar && overlay && sidebar.classList.contains('open')) {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = sidebarToggle && sidebarToggle.contains(e.target);
    
    if (!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  }
});

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    if (sidebar && overlay && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  }
});
