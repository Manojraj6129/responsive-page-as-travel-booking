// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'toggle-content-button'
    const toggleContentButtons = document.querySelectorAll('.toggle-content-button');

    // Iterate through each button and add a click event listener
    toggleContentButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Select the next sibling element (the paragraph in this case)
            const content = this.nextElementSibling;
            // Toggle the 'hidden' class on the content
            content.classList.toggle('hidden');
        });
    });

    // Handle the booking form submission
    const bookingForm = document.getElementById('booking-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        confirmationMessage.classList.remove('hidden'); // Show the confirmation message
        bookingForm.reset(); // Reset the form fields
    });
});
