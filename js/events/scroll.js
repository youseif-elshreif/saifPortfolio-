window.addEventListener("scroll", () => {
  reachedsec("skills", "skills-list", 150, "reached");
  reachedsec("protfolio", "protfolio-list", 200, "reached");
  let titles = document.querySelectorAll(".experience .title");
  for (let i = 0; i < titles.length; i++) {
    reachedsec(`e-${i}`, `t-${i}`, 40, "reached-p");
  }
});

export function reachedsec(secClassName, className, h, addedClass) {
  const section = document.querySelector(`.${secClassName}`);
  const div = section.querySelector(`.${className}`);
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop + h <= windowHeight) {
    div.classList.add(addedClass);
  }
}
