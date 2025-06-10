const filterButtons = document.querySelectorAll(".filter-btn");

export function applyFilter(button) {
  const filterValue = button.getAttribute("data-filter");
  const filterableItems = document.querySelectorAll(".filter-item");

  filterableItems.forEach((item) => {
    item.getAttribute("data-type") === filterValue || filterValue === "all"
      ? (item.style.display = "flex")
      : (item.style.display = "none");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    applyFilter(button);
  });
});
