import { reachedsec, numbers } from "./homeScroll.js";
import { loadExperience } from "./experience.js";
document.addEventListener("DOMContentLoaded", async () => {
  reachedsec("skills", "skills-list", 150, "reached");
  reachedsec("services", "services-list", 200, "reached-pro");
  let titles = document.querySelectorAll(".experience .title");
  for (let i = 1; i < titles.length; i++) {
    reachedsec(`e-${i}`, `t-${i}`, 500, "reached-p");
  }

  await loadExperience("./js/home/experience.json", ".experience-listt");
  await loadExperience(
    "./js/home/volunteering-experience.json",
    ".v-experience-list"
  );
});
