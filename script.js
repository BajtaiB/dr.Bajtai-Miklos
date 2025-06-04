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

// Hamburger menü működés
function toggleSidebar() {
  const sidebarContainer = document.getElementById('sidebarContainer');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  
  // Toggle sidebar visibility
  sidebarContainer.classList.toggle('hidden');
  
  // Toggle open classes
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  
  // Toggle body overflow
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if(this.getAttribute('href') !== '#') {
      e.preventDefault();
      
      // Close sidebar
      const sidebar = document.querySelector('.sidebar');
      const overlay = document.querySelector('.overlay');
      const sidebarContainer = document.getElementById('sidebarContainer');
      
      if(sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        sidebarContainer.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }
      
      // Scroll to target
      const targetElement = document.querySelector(this.getAttribute('href'));
      if(targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const sidebarContainer = document.getElementById('sidebarContainer');
  const sidebarToggle = document.querySelector('[onclick="toggleSidebar()"]');
  
  if(sidebar && overlay && sidebar.classList.contains('open')) {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = sidebarToggle && sidebarToggle.contains(e.target);
    
    if(!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      sidebarContainer.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }
});

// Close sidebar on ESC key
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const sidebarContainer = document.getElementById('sidebarContainer');
    
    if(sidebar && overlay && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      sidebarContainer.classList.add('hidden');
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
  sr.reveal('#services .text-center, #services .grid > div', { 
    delay: 400, 
    interval: 100 
  });
  sr.reveal('#criminal-laws > div', { delay: 500, origin: 'left' });
  sr.reveal('#about', { delay: 600, origin: 'right' });
  sr.reveal('#contact', { delay: 700 });
}
