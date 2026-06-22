// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && subject && message) {
        // Show success message
        alert(`Dank je wel, ${name}! Je bericht is ontvangen. We zullen je zo snel mogelijk contacteren.`);
        
        // Reset form
        this.reset();
        
        // Note: In production, you would send this data to a backend server
        // using fetch() or similar to actually process the form
    } else {
        alert('Vul alstublieft alle velden in.');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});