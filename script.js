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
          50: '#f4f8f2',
          100: '#e1ebdc',
          200: '#c6d9bd',
          300: '#9cbf93',
          400: '#6ea066',
          500: '#4d8345',
          600: '#3a6b34',
          700: '#2e5529',
          800: '#234120',
          900: '#1a3118',
        },
        secondary: {
          500: '#3a6b34',
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

// Initialize ScrollReveal if available
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    reset: true
  });

  sr.reveal('header', { delay: 200, origin: 'top' });
  sr.reveal('#home', { delay: 300 });
  sr.reveal('#law-sections .text-center, #law-sections .grid > div', { 
    delay: 400, 
    interval: 100 
  });
  sr.reveal('#services > div', { delay: 500, origin: 'left' });
  sr.reveal('#contact', { delay: 600 });
}
