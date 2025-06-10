export let start = false;
export let numbers = document.querySelectorAll(".stats-item .counter span");

window.addEventListener("scroll", () => {
  reachedsec("skills", "skills-list", 150, "reached");
  // reachedsec("portfolio", "portfolio-list", 200, "reached-pro");

  let titles = document.querySelectorAll(".experience .title");
  for (let i = 0; i < titles.length; i++) {
    reachedsec(`e-${i}`, `t-${i}`, 40, "reached-p");
  }

  if (!start) {
    const section = document.querySelector(".my-stats");
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop + 100 <= windowHeight) {
      start = true;
      numbers.forEach((number) => {
        increaseNumderTo(number);
      });
    }
  }
});

export function reachedsec(secClassName, className, h, addedClass) {
  const section = document.querySelector(`.${secClassName}`);
  const div = section.querySelector(`.${className}`);
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop + h <= windowHeight) {
    addClassToElement(div, addedClass);
  }
}

function increaseNumderTo(target) {
  const end = +target.dataset.count;
  let current = +target.innerText || 0;

  if (current >= end) return;

  let counter = setInterval(() => {
    current++;
    target.innerText = current;
    if (current === end) {
      clearInterval(counter);
    }
  }, 1000 / end);
}

function addClassToElement(e, className) {
  e.classList.add(className);
}
