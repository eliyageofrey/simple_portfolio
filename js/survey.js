// Add event listeners for input focus
document.addEventListener("DOMContentLoaded", () => {
    // Optional: Click on heading to change its text
    const heading = document.getElementById("survey-heading");
    heading.addEventListener("click", () => {
        heading.textContent = "Help Me Improve!";
    });
});





function validateForm(){
    document.querySelector('.survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    // Gather all values and trim whitespace
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const profession = form.profession.value.trim();
    const impression = form.impression.value.trim();
    const skillRating = form.skill_rating.value;
    const projectFeedback = form.project_feedback.value.trim();
    const improvement = form.improvement.value.trim();
    const recommend = form.recommend.value;

    // Validate fields
    if (!name || !email || !profession || !impression || !skillRating || !projectFeedback || !improvement || !recommend) {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: 'Please fill in all required fields.'
        });
        return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    // All validations passed - show success alert then redirect
    Swal.fire({
        icon: 'success',
        title: 'Survey Submitted',
        text: 'Thank you for your feedback!',
        confirmButtonText: 'OK'
    }).then(() => {
        // Optionally clear form here if needed:
        // form.reset();

        // Redirect to survey.html
        window.location.href = 'survey.html';
    });
});
}