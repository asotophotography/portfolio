
// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  const body = document.body;
  const newTheme = body.getAttribute("data-theme") === "light" ? "dark" : "light";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.body.setAttribute("data-theme", savedTheme);
  document.body.classList.add("fade-in");
});

// Image Viewer Modal
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    modal.style.display = 'flex';
    modalImg.src = img.src;
    caption.innerText = img.alt || " ";
  });
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('imageModal').style.display = 'none';
});
