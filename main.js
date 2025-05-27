
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

  // Image viewer modal setup
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const caption = document.getElementById('modalCaption');
  const closeBtn = document.getElementById('closeModal');

  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      caption.innerText = img.alt || " ";
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
