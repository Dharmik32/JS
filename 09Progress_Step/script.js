const step = document.querySelectorAll(".step");

let currentStep = 0;

function updateProgress() {
  step.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function nextStep() {
  if (currentStep < step.length) {
    currentStep++;
    updateProgress();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
  }
}
