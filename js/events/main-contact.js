const contactBtn = document.querySelector(".main-contact span");
const contactLinks = document.querySelector(".main-contact .links");

export function contactBtnEvent() {
  if (contactBtn && contactLinks) {
    contactBtn.addEventListener("click", function (e) {
      this.classList.toggle("active");
      contactLinks.classList.toggle("show");
    });

    // Close links if clicking outside
    document.addEventListener("click", function (e) {
      if (!contactBtn.contains(e.target) && !contactLinks.contains(e.target)) {
        contactLinks.classList.remove("show");
        contactBtn.classList.remove("active");
      }
    });
  }
}
