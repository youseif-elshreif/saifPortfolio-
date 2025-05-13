import { goToTargetSec } from "./secNav.js";

const exploreSkillsBtn = document.getElementById("explore-skills-btn");
if (exploreSkillsBtn) {
  exploreSkillsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the skills section element
    const skillsSection = document.getElementById("skills");

    // Calculate offset based on screen size
    let offset = 50;
    if (window.innerWidth <= 768) {
      offset = 30; // Less offset on mobile
    }

    // Scroll to skills section with the appropriate offset
    const skillsTop = skillsSection.offsetTop;
    window.scrollTo({
      top: skillsTop - offset,
      behavior: "smooth",
    });

    // Update the active navigation item
    const skillsNavItem = document.querySelector(
      '.pseudo-nav div[data-target="Skills"]'
    );
    if (skillsNavItem) {
      const navItems = document.querySelectorAll(".pseudo-nav div");
      navItems.forEach((item) => item.classList.remove("active"));
      skillsNavItem.classList.add("active");
    }
  });
}
