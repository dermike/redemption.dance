(function init() {
  let firstStep = document.querySelector('li'),
    currentStep = firstStep,
    runPattern = function runPattern() {
      if (currentStep && currentStep.nextElementSibling) {
        requestAnimationFrame(function addNext() {
          currentStep.classList.remove('active');
          currentStep.nextElementSibling.classList.add('active');
          currentStep = currentStep.nextElementSibling;
        });
      } else {
        requestAnimationFrame(function addFirst() {
          currentStep.classList.remove('active');
          firstStep.classList.add('active');
          currentStep = firstStep;
        });
      }
    },
    setHeight = function setHeight() {
      let tr808 = document.querySelector('ul');
      tr808.style.height = firstStep.offsetWidth * 2 + 'px';
    };
  setHeight();
  setInterval(runPattern, 100);
  window.addEventListener('resize', setHeight, false);
})();
