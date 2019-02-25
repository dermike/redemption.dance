(function init() {
  let firstStep = document.querySelector('li'),
    currentStep = firstStep,
    runPattern = function runPattern() {
      if (currentStep && currentStep.nextElementSibling) {
        currentStep.classList.remove('active');
        currentStep.nextElementSibling.classList.add('active');
        currentStep = currentStep.nextElementSibling;
      } else {
        currentStep.classList.remove('active');
        firstStep.classList.add('active');
        currentStep = firstStep;
      }
    };
  setInterval(runPattern, 100);
})();
