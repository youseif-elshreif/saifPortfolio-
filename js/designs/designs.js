// Designs Page Functionality - Simple Version

document.addEventListener("DOMContentLoaded", function () {
  console.log("Designs script loaded!");

  // DOM Elements - Get them again to ensure they're loaded
  const designItems = document.querySelectorAll(".design-item");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const lightbox = document.getElementById("design-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-description");
  const closeBtn = document.querySelector(".close-lightbox");
  const lightboxOverlay = document.querySelector(".lightbox-overlay");
  const campaignControls = document.getElementById("campaign-controls");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  const slideIndicator = document.getElementById("slide-indicator");

  console.log("Found " + designItems.length + " design items");
  console.log("Found " + filterButtons.length + " filter buttons");

  // Campaign navigation variables
  let campaignImages = [];
  let campaignTitles = [];
  let campaignDescriptions = [];
  let currentSlide = 0;

  // Basic direct filtering - Super simple implementation
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Filter button clicked: " + this.getAttribute("data-filter"));

      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filterValue = this.getAttribute("data-filter");

      // Filter the items
      designItems.forEach((item) => {
        const category = item.getAttribute("data-category");
        console.log("Item category: " + category);

        if (filterValue === "all" || filterValue === category) {
          // Show the item
          item.style.display = "";
        } else {
          // Hide the item
          item.style.display = "none";
        }
      });
    });
  });

  // Initialize lightbox functionality
  designItems.forEach((item) => {
    const card = item.querySelector(".design-card");

    if (card) {
      card.addEventListener("click", () => {
        openLightbox(item);
      });
    }
  });

  // Close events
  if (closeBtn) {
    closeBtn.addEventListener("click", closeLightbox);
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener("click", closeLightbox);
  }

  // Keyboard controls
  document.addEventListener("keydown", handleKeyboardNavigation);

  // Campaign navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", showPreviousSlide);
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", showNextSlide);
  }

  // Open lightbox with item content
  function openLightbox(item) {
    const isCampaign = item.getAttribute("data-type") === "campaign";
    const imgSrc = item.querySelector("img").getAttribute("src");
    const title = item.querySelector("h3").textContent;

    if (isCampaign) {
      // Handle campaign with multiple slides
      try {
        campaignImages = JSON.parse(item.getAttribute("data-campaign-images"));
        campaignTitles = JSON.parse(item.getAttribute("data-campaign-titles"));
        campaignDescriptions = JSON.parse(
          item.getAttribute("data-campaign-desc")
        );

        // Reset to first slide
        currentSlide = 0;
        updateCampaignSlide();

        // Show campaign controls
        if (campaignControls) {
          campaignControls.classList.add("active");
        }
      } catch (error) {
        console.error("Error parsing campaign data:", error);
        showSingleDesign(imgSrc, title, "");
      }
    } else {
      // Handle single design
      showSingleDesign(imgSrc, title, "");
    }

    // Show lightbox
    if (lightbox) {
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  }

  // Show single design in lightbox
  function showSingleDesign(imgSrc, title, description) {
    if (lightboxImage) lightboxImage.src = imgSrc;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxDesc) lightboxDesc.textContent = description;
    if (campaignControls) campaignControls.classList.remove("active");
  }

  // Update campaign slide
  function updateCampaignSlide() {
    if (campaignImages.length > 0) {
      if (lightboxImage) lightboxImage.src = campaignImages[currentSlide];
      if (lightboxTitle)
        lightboxTitle.textContent = campaignTitles[currentSlide] || "";
      if (lightboxDesc)
        lightboxDesc.textContent = campaignDescriptions[currentSlide] || "";

      // Update indicator
      if (slideIndicator) {
        slideIndicator.textContent = `${currentSlide + 1} / ${
          campaignImages.length
        }`;
      }
    }
  }

  // Show previous campaign slide
  function showPreviousSlide() {
    currentSlide =
      (currentSlide - 1 + campaignImages.length) % campaignImages.length;
    updateCampaignSlide();
  }

  // Show next campaign slide
  function showNextSlide() {
    currentSlide = (currentSlide + 1) % campaignImages.length;
    updateCampaignSlide();
  }

  // Handle keyboard navigation
  function handleKeyboardNavigation(e) {
    if (lightbox && lightbox.classList.contains("active")) {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (
        campaignControls &&
        campaignControls.classList.contains("active")
      ) {
        if (e.key === "ArrowLeft") {
          showPreviousSlide();
        } else if (e.key === "ArrowRight") {
          showNextSlide();
        }
      }
    }
  }

  // Close lightbox
  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling

      // Reset after animation completes
      setTimeout(() => {
        if (lightboxImage) lightboxImage.src = "";
        if (campaignControls) campaignControls.classList.remove("active");
      }, 300);
    }
  }
});
