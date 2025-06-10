// Select all navigation items
const secDiv = document.querySelectorAll(".pseudo-nav div");

// Function to add active class to the selected element
export function addActive(e, eS) {
  eS.forEach((a) => {
    a.classList.remove("active");
  });
  e.classList.add("active");
}

export function goToTargetSec(secName) {
  let secTop = document.getElementById(secName).offsetTop;
  window.scrollTo({
    top: secTop - 50,
    behavior: "smooth",
  });
}

function activateNavItem(sectionName) {
  secDiv.forEach((navItem) => {
    navItem.classList.remove("active");
    if (navItem.dataset.target.toLowerCase() === sectionName.toLowerCase()) {
      navItem.classList.add("active");
    }
  });
}

secDiv.forEach((e) => {
  e.addEventListener("click", () => {
    addActive(e, secDiv);
    goToTargetSec(e.dataset.target.toLowerCase());
  });
});

window.addEventListener("scroll", () => {
  const sections = [...document.getElementsByTagName("section")].map((e) => {
    return e.id;
  });

  let currentSection = "";

  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (
      section &&
      ((sectionTop < window.innerHeight / 2 && sectionBottom > 0) ||
        (sectionTop >= 0 && sectionTop < window.innerHeight / 2))
    ) {
      currentSection = sectionId;
    }
  });

  if (currentSection) {
    activateNavItem(currentSection);
  }
});
