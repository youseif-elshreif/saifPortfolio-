import {
  list,
  bars,
  dragedList,
  navList,
  darkBtn,
  darkMode,
} from "./events.js";

document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.getItem("mode") === "true") {
    if (darkBtn) darkBtn.classList.add("moon");
  }
  darkMode();
  navList();
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
