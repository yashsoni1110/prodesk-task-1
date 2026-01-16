// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Mobile Menu Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
