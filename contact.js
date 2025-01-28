// contact.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the contact form by its ID
    const contactForm = document.getElementById('contact-form');

    // Check if the form exists on the page
    if (contactForm) {
        // Add an event listener for the form submission
        contactForm.addEventListener('submit', function (e) {
            // Get values from input fields and trim whitespace
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate that all fields are filled
            if (!name || !email || !message) {
                alert('Please fill in all fields.'); // Alert if any field is empty
                e.preventDefault(); // Prevent form submission
            } else {
                // Optional: Add further validation for email format
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
                if (!emailPattern.test(email)) {
                    alert('Please enter a valid email address.'); // Alert if email is invalid
                    e.preventDefault(); // Prevent form submission
                }
            }
        });
    }
});