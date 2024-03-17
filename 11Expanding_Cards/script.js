const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((pannel) => {
    pannel.classList.remove("active");
  });
}
