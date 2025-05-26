document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  document.body.classList.add("fade-in");

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
});


document.querySelectorAll("img").forEach(img => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.textContent = img.alt || "";

    document.getElementById("closeModal").onclick = () => {
      modal.style.display = "none";
    };
  });
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("imageModal");
    if (modal && modal.style.display === "block") {
      modal.style.display = "none";
    }
  }
});
