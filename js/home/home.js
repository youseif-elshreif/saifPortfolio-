export function AddAnimationToTextWhenTransformTranslate3dEqualNum() {
  let Plist = document.querySelectorAll(".protfolio-item");
  Plist.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      let text = item.querySelector(".text");
      text.classList.add("animation-text");

      let a = item.querySelector("a");
      a.classList.add("animation-a");
    });
  });
}
