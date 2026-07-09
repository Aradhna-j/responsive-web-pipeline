document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('portfolio-contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent normal page redirection
            event.preventDefault();

            // Structure data metrics mapped directly from input fields
            const payload = {
                clientName: document.getElementById('name').value,
                clientEmail: document.getElementById('email').value,
                clientMessage: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };

            // Developer execution logs tracking state changes
            console.log('%c[System Event]: Contact Form Submitted', 'color: #818cf8; font-weight: bold;');
            console.table(payload);

            // Reset execution state inside DOM
            contactForm.reset();

            // Explicit alert deployment matching professional interface patterns
            alert(`Thank you, ${payload.clientName}. Your inquiry has been processed successfully. Aradhana will be in touch shortly.`);
        });
    }
});