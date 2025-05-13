export let darkBtn = document.querySelector(".day-night-toggle");
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
