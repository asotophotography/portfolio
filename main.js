
document.getElementById("menuToggle")?.addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  if (menu) menu.classList.toggle("dropdown-hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.createElement("div");
  viewer.id = "imageViewer";
  viewer.innerHTML = `
    <div class="viewer-overlay">
      <img id="viewerImg" src="" alt="">
      <p id="viewerCaption"></p>
      <span id="viewerClose">&times;</span>
    </div>`;
  document.body.appendChild(viewer);

  const overlay = viewer.querySelector(".viewer-overlay");
  const imgEl = viewer.querySelector("#viewerImg");
  const captionEl = viewer.querySelector("#viewerCaption");
  const closeBtn = viewer.querySelector("#viewerClose");

  document.querySelectorAll("img[data-view]").forEach(img => {
    img.addEventListener("click", () => {
      imgEl.src = img.src;
      captionEl.textContent = img.alt || "Untitled photo";
      viewer.style.display = "flex";
    });
  });

  closeBtn.onclick = () => viewer.style.display = "none";
  viewer.onclick = e => { if (e.target === viewer) viewer.style.display = "none"; };
});

      document.addEventListener("DOMContentLoaded", () => {
        const toggle = document.getElementById("themeToggle");
        if (toggle) {
          toggle.addEventListener("click", () => {
            const html = document.documentElement;
            const current = html.getAttribute("data-theme");
            html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
          });
        }
      });
    