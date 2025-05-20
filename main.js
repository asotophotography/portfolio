// improved JS with theme toggle, lightbox, slideshow support
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides.forEach(slide => slide.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);

  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
    toggle.innerHTML = html.dataset.theme === "dark" ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
    lucide.createIcons();
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("dropdown-hidden");
});
