import { goToTargetSec } from "./secNav.js";

const exploreSkillsBtn = document.getElementById("explore-skills-btn");
if (exploreSkillsBtn) {
  exploreSkillsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    goToTargetSec("skills");
  });
}
