let lightbox = document.querySelector(".lightbox");
let lightboxOverlay = document.querySelector(".lightbox-overlay");
let lightboxImage = document.querySelector(".lightbox-image-container img");
let campaignControls = document.querySelector(".campaign-controls");
let slideIndicator = document.querySelector(".slide-indicator");
let closeBtn = document.querySelector(".close-lightbox");

let currentIndex = 0;

function openLightbox() {
  lightbox.classList.add("active");
  document.documentElement.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.documentElement.style.overflow = "";
}

function updateLightboxContent(images, index) {
  lightboxImage.src = images[index];
  slideIndicator.innerHTML = `${index + 1}/${images.length}`;
}

function setLightboxFromCurrentSlide(index, images) {
  currentIndex = index;
  updateLightboxContent(images, currentIndex);
}

export function setLightbox(item) {
  const hasCampaign = item.hasAttribute("data-campaign-images");
  if (hasCampaign) {
    const campaignImages = JSON.parse(
      item.getAttribute("data-campaign-images")
    );

    currentIndex = 0;
    updateLightboxContent(campaignImages, currentIndex);

    campaignControls.style.display = "flex";

    document.querySelector("#next-slide").onclick = () => {
      setLightboxFromCurrentSlide(
        (currentIndex + 1) % campaignImages.length,
        campaignImages
      );
    };

    document.querySelector("#prev-slide").onclick = () => {
      setLightboxFromCurrentSlide(
        (currentIndex - 1 + campaignImages.length) % campaignImages.length,
        campaignImages
      );
    };
  } else {
    const imgEl = item.querySelector(".design-card img");
    lightboxImage.src = imgEl.src;
    lightboxImage.alt = imgEl.alt || "";
    campaignControls.style.display = "none";
    slideIndicator.innerHTML = "";
  }
  openLightbox();
}

closeBtn.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});
