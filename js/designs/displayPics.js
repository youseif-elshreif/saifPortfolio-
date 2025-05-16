let designItems = [...document.querySelectorAll(".design-item")];
let lightbox = document.querySelector(".lightbox");
let lightboxOverlay = document.querySelector(".lightbox-overlay");
let lightboxImage = document.querySelector(".lightbox-image-container img");
let lightboxTitle = document.querySelector(".lightbox-title");
let lightboxDescription = document.querySelector(".lightbox-description");
let lightboxClose = document.querySelector(".lightbox-close");
let campaignControls = document.querySelector(".campaign-controls");
let slideIndicator = document.querySelector(".slide-indicator");

closeLightbox();

designItems.forEach((item) => {
  item.addEventListener("click", () => {
    setLightbox(item);
  });
});

function setLightbox(item) {
  if (item.getAttribute("data-campaign-images")) {
    let campaignImages = JSON.parse(item.getAttribute("data-campaign-images"));
    let campaignTitles = JSON.parse(item.getAttribute("data-campaign-titles"));
    let campaignDescriptions = JSON.parse(
      item.getAttribute("data-campaign-desc")
    );
    let currentIndex = 0;

    lightboxImage.src = campaignImages[0];
    lightboxTitle.innerHTML = campaignTitles[0];
    lightboxDescription.innerHTML = campaignDescriptions[0];

    campaignControls.style.display = "flex";
    slideIndicator.innerHTML = `1/${campaignImages.length}`;

    nextSlideShow(
      currentIndex,
      campaignImages,
      campaignTitles,
      campaignDescriptions
    );
    prevSlideShow(
      currentIndex,
      campaignImages,
      campaignTitles,
      campaignDescriptions
    );
  } else {
    lightboxSingle(item);
  }
  lightbox.classList.add("active");
}

function lightboxSingle(item) {
  let imageSrc = item.querySelector(".design-card img").src;
  let imageAlt = item.querySelector(".design-card img").alt;
  let imageTitle = item.querySelector("h3").innerText;
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightboxTitle.innerHTML = imageTitle;
}

function nextSlideShow(
  currentIndex,
  campaignImages,
  campaignTitles,
  campaignDescriptions
) {
  let nextSlide = document.querySelector("#next-slide");
  nextSlide.addEventListener("click", () => {
    if (currentIndex < campaignImages.length - 1) {
      currentIndex++;
      setLightboxFromCurentSlide(
        currentIndex,
        campaignImages,
        campaignTitles,
        campaignDescriptions
      );
    } else {
      currentIndex = 0;
      setLightboxFromCurentSlide(
        currentIndex,
        campaignImages,
        campaignTitles,
        campaignDescriptions
      );
    }
  });
}

function prevSlideShow(
  currentIndex,
  campaignImages,
  campaignTitles,
  campaignDescriptions
) {
  let prevSlide = document.querySelector("#prev-slide");
  prevSlide.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      setLightboxFromCurentSlide(
        currentIndex,
        campaignImages,
        campaignTitles,
        campaignDescriptions
      );
    } else {
      currentIndex = campaignImages.length - 1;
      setLightboxFromCurentSlide(
        currentIndex,
        campaignImages,
        campaignTitles,
        campaignDescriptions
      );
    }
  });
}

function setLightboxFromCurentSlide(
  currentIndex,
  campaignImages,
  campaignTitles,
  campaignDescriptions
) {
  lightboxImage.src = campaignImages[currentIndex];
  lightboxTitle.innerHTML = campaignTitles[currentIndex];
  lightboxDescription.innerHTML = campaignDescriptions[currentIndex];
  slideIndicator.innerHTML = `${currentIndex + 1}/${campaignImages.length}`;
}

function closeLightbox() {
  let closeLightbox = document.querySelector(".close-lightbox");
  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });

  lightboxOverlay.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}
