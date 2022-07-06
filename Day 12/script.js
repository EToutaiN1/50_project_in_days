const toggleBtn = document.querySelectorAll(".faq-toggle");

toggleBtn.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    removeActive();
    toggle.parentNode.classList.toggle("active");
  });
});

function removeActive() {
  toggleBtn.forEach((toggles) => {
    toggles.parentNode.classList.remove("active");
  });
}
