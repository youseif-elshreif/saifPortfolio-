// Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const filterableItems = [...document.querySelectorAll(".filter-item")];

document.addEventListener("DOMContentLoaded", () => {
  filterableItems.forEach((item) => {
    item.style.display = "none";
  });
  let defaultFilter = document.querySelector(".filter-btn.active");
  applyFilter(defaultFilter);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    applyFilter(button);
  });
});

function applyFilter(button) {
  const filterValue = button.getAttribute("data-filter");

  filterableItems.forEach((item) => {
    item.getAttribute("data-type") === filterValue || filterValue === "all"
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
}
