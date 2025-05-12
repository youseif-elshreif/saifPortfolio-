import { list, bars, dragedList, navList } from "./events/navlist.js";
import { darkBtn, darkMode } from "./events/dark.js";
import { reachedsec, reachedsec2, numbers } from "./events/scroll.js";
import { animation } from "./home/home.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.getItem("mode") === "true") {
    if (darkBtn) darkBtn.classList.add("moon");
  }
  darkMode();
  navList();
  animation();
  reachedsec("skills", "skills-list", 150, "reached");
  reachedsec("protfolio", "protfolio-list", 200, "reached-pro");
  let titles = document.querySelectorAll(".experience .title");
  for (let i = 1; i < titles.length; i++) {
    reachedsec(`e-${i}`, `t-${i}`, 500, "reached-p");
  }
  numbers.forEach((number) => {
    reachedsec2("my-stats", number, 100);
  });
});

document.addEventListener("click", (e) => {
  if (!list.contains(e.target)) {
    bars.forEach((e) => {
      if (e.classList.contains("full")) {
        e.classList.remove("full");
      }
    });
    dragedList.classList.add("draged");
  }
});
