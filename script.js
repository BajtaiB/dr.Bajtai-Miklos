// Toggle sidebar
function toggleSidebar() {
    const sidebarContainer = document.getElementById('sidebarContainer');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    
    sidebarContainer.classList.toggle('hidden');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : 'auto';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            // Close sidebar if open
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            if(sidebar && overlay) {
                sidebar.classList.remove('open');
                overlay.classList.remove('open');
                document.body.style.overflow = 'auto';
            }
            
            // Scroll to target
            const targetElement = document.querySelector(this.getAttribute('href'));
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update URL
                if(history.pushState) {
                    history.pushState(null, null, this.getAttribute('href'));
                } else {
                    location.hash = this.getAttribute('href');
                }
            }
        }
    });
});

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const sidebarToggle = document.querySelector('[onclick="toggleSidebar()"]');
    
    if(sidebar && overlay && sidebar.classList.contains('open')) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnToggle = sidebarToggle && sidebarToggle.contains(e.target);
        
        if(!isClickInsideSidebar && !isClickOnToggle) {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    }
});

// Close sidebar on ESC key
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        
        if(sidebar && overlay && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    }
});
