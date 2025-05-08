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
