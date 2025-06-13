import { list, bars, dragedList, navList } from "./events/navlist.js";
import { darkBtn, darkMode } from "./events/dark.js";
import { contactBtnEvent } from "./events/main-contact.js";
document.addEventListener("DOMContentLoaded", async () => {
  if (localStorage.getItem("mode") === "true") {
    if (darkBtn) darkBtn.classList.add("moon");
  }
  darkMode();
  navList();
  contactBtnEvent();
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add("is-touch");
  }
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
