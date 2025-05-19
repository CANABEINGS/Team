document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Team member images (replace with your actual image paths)
    const teamImages = {
       mide: 'images/mide.jpg',       // Your 400x400 image
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
    
    // Add hover effects to team members
    const teamCircles = document.querySelectorAll('.team-circle');
    teamCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
