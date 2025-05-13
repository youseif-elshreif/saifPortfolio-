export let start = false;
export let numbers = document.querySelectorAll(".stats-item .counter span");
window.addEventListener("scroll", () => {
  reachedsec("skills", "skills-list", 150, "reached");
  reachedsec("portfolio", "portfolio-list", 200, "reached-pro");
  let titles = document.querySelectorAll(".experience .title");
  for (let i = 0; i < titles.length; i++) {
    reachedsec(`e-${i}`, `t-${i}`, 40, "reached-p");
  }
  if (!start) {
    numbers.forEach((number) => {
      reachedsec2("my-stats", number, 100);
    });
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

export function reachedsec2(secClassName, e, h) {
  const section = document.querySelector(`.${secClassName}`);
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop + h <= windowHeight) {
    increaseNumderTo(e);
  }
}

function increaseNumderTo(target) {
  start = true;
  const end = +target.dataset.count;
  let counter = setInterval(() => {
    target.innerText++;
    if (target.innerText == end) {
      clearInterval(counter);
    }
  }, 1000 / end);
}

function addClassToElement(e, className) {
  e.classList.add(className);
}
