export let start = false;
export let numbers = document.querySelectorAll(".stats-item .counter span");

window.addEventListener("scroll", () => {
  reachedsec("skills", "skills-list", 150, "reached");
  reachedsec("services", "services-list", 200, "reached-pro");
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
  const duration = 1500; // 1 ثانية
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(progress * end);

    target.innerText = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      target.innerText = end; // تأكيد الوصول للقيمة النهائية
    }
  }

  requestAnimationFrame(update);
}

function addClassToElement(e, className) {
  e.classList.add(className);
}
