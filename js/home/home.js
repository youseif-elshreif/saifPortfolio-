export function animation() {
  let Plist = document.querySelectorAll(".portfolio-item");
  Plist.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let text = item.querySelector(".text");
      text.classList.add("animation-text");

      let a = item.querySelector("a");
      a.classList.add("animation-a");
    });
  });
}
