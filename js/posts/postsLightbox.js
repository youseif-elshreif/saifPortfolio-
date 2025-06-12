export function setupPostLightbox() {
  const lightbox = document.getElementById("post-lightbox");
  const overlay = lightbox.querySelector(".lightbox-overlay");
  const closeBtn = lightbox.querySelector(".close-lightbox");
  const imageContainer = lightbox.querySelector(".lightbox-image-container");
  const lightboxImage = document.getElementById("lightbox-image");
  const titleEl = document.getElementById("lightbox-title");
  const dateEl = document.getElementById("lightbox-date");
  const contentEl = document.getElementById("lightbox-content");
  const tagsEl = document.getElementById("lightbox-tags");

  document.querySelectorAll(".post-card").forEach((card) => {
    card.addEventListener("click", () => {
      let titleDir = card
        .querySelector(".post-header")
        .classList.contains("rtl")
        ? "rtl"
        : "ltr";
      const img = card.querySelector(".post-image img");
      if (img) {
        imageContainer.style.display = "block";
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "Post Image";
      } else {
        imageContainer.style.display = "none";
        lightboxImage.src = "";
        lightboxImage.alt = "";
      }

      titleEl.textContent = card.querySelector("h3").textContent;
      titleEl.classList.add(titleDir);
      dateEl.textContent = card.querySelector(".post-date").textContent;
      contentEl.innerHTML = card.querySelector(".post-content").innerHTML;
      tagsEl.innerHTML = card.querySelector(".post-tags").innerHTML;

      lightbox.classList.add("active");
      document.documentElement.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.documentElement.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}
