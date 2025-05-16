document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("survey-heading");
    heading.addEventListener("click", () => {
        heading.textContent = "Help Me Improve!";
    });
});



function validateForm(){
    document.querySelector('.survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const profession = form.profession.value.trim();
    const impression = form.impression.value.trim();
    const skillRating = form.skill_rating.value;
    const projectFeedback = form.project_feedback.value.trim();
    const improvement = form.improvement.value.trim();
    const recommend = form.recommend.value;

 
    if (!name || !email || !profession || !impression || !skillRating || !projectFeedback || !improvement || !recommend) {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: 'Please fill in all required fields.'
        });
        return;
    }

 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: 'Survey Submitted',
        text: 'Thank you for your feedback!',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'survey.html';
    });
});
}