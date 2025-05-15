// Wait for navbar content to load, then attach toggle event
const themeToggle = document.getElementById("toggle-theme");

// Check local storage for saved preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (themeToggle) themeToggle.checked = true;
}

// Add event listener to toggle
if (themeToggle) {
  themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
   else {
      document.body.classList.remove("dark-mode");
      localStorage.setItm("theme", "light");
    }
  });
}





function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  } 
  
  else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good Evening";
  } 
  else {
    return "Good Night";
  }
}

window.addEventListener('load', () => {
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = getGreeting();
});