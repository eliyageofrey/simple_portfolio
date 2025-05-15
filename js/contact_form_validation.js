// Add event listeners for input focus
document.addEventListener("DOMContentLoaded", () => {
    // Optional: Click on heading to change its text
    const heading = document.getElementById("contact-heading");
    heading.addEventListener("click", () => {
        heading.textContent = "Let's Connect!";
    });
});

// Form validation on button click
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: 'All fields are required!',
        });
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address!',
        });
        return false;
    }

    // Confirm successful submission and redirect
    Swal.fire({
        icon: 'success',
        title: 'Form Submitted',
        text: 'Your message has been sent!',
    }).then(() => {
        // Reset form
        document.getElementById("contact-form").reset();
    });
}
