import { reachedsec, reachedsec2, numbers } from "./homeScroll.js";

document.addEventListener("DOMContentLoaded", async () => {
  reachedsec("skills", "skills-list", 150, "reached");
  reachedsec("portfolio", "portfolio-list", 200, "reached-pro");
  let titles = document.querySelectorAll(".experience .title");
  for (let i = 1; i < titles.length; i++) {
    reachedsec(`e-${i}`, `t-${i}`, 500, "reached-p");
  }
  numbers.forEach((number) => {
    reachedsec2("my-stats", number, 100);
  });
});
