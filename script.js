document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Team member images (replace with your actual image paths)
    const teamImages = {
        mide: 'images/mide.jpg',
        lawrence: 'images/lawrence.jpg',
        emmanuel: 'images/emmanuel.jpg'
    };
    
    // Load team member images
    for (const [id, imgUrl] of Object.entries(teamImages)) {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundImage = `url('${imgUrl}')`;
        }
    }
    
    // Add touch support for mobile devices
    const teamCircles = document.querySelectorAll('.team-circle');
    
    // For mobile devices - add touch events
    if ('ontouchstart' in window) {
        teamCircles.forEach(circle => {
            circle.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            circle.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            });
        });
    }
    
    // Check if images failed to load and apply fallback
    window.addEventListener('load', function() {
        const teamMembers = document.querySelectorAll('.team-circle');
        teamMembers.forEach(member => {
            // If background image failed to load, add a fallback style
            const img = new Image();
            const style = getComputedStyle(member);
            const bgImage = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            
            img.onerror = function() {
                member.style.backgroundColor = '#e0e0e0';
                const initials = member.id.charAt(0).toUpperCase();
                member.setAttribute('data-initials', initials);
                member.classList.add('no-image');
            };
            
            if (bgImage !== 'none') {
                img.src = bgImage;
            }
        });
    });
});
