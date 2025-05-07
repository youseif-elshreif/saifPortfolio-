export let list = document.querySelector(".list");
export let bars = document.querySelectorAll(".list span");
export let dragedList = document.querySelector(".nav ul");

export function navList() {
  list.addEventListener("click", () => {
    bars.forEach((e) => {
      e.classList.toggle("full");
    });
    dragedList.classList.toggle("draged");
  });
}

export let darkBtn = document.querySelector(".dark");
export function darkMode() {
  darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
    if (document.documentElement.classList.contains("dark-mode")) {
      localStorage.mode = true;
    } else {
      localStorage.mode = false;
    }

    darkBtn.classList.toggle("moon");
  });
}
