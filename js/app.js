(function init() {
  let firstStep = document.querySelector('li'),
    currentStep = firstStep,
    motion = !matchMedia('(prefers-reduced-motion)').matches,
    speed = 100,
    runPattern = function runPattern() {
      let jump = function jump(el) {
        el.classList.add('jump');
        setTimeout(function r() {
          el.classList.remove('jump');
        }, 125);
      };
      if (speed && motion) {
        if (currentStep && currentStep.nextElementSibling) {
          currentStep.classList.remove('active');
          currentStep.nextElementSibling.classList.add('active');
          currentStep = currentStep.nextElementSibling;
        } else {
          currentStep.classList.remove('active');
          firstStep.classList.add('active');
          currentStep = firstStep;
        }
        if (currentStep.classList.contains('selected')) {
          jump(currentStep);
        }
        setTimeout(function again() {
          requestAnimationFrame(runPattern);
        }, speed);
      }
    },
    setHeight = function setHeight() {
      let tr808 = document.querySelector('ul');
      tr808.style.height = firstStep.offsetWidth * 1.75 + 'px';
    },
    toggle = function toggle() {
      if (speed) {
        speed = 0;
      } else {
        speed = 100;
        requestAnimationFrame(runPattern);
      }
    };
  setHeight();
  requestAnimationFrame(runPattern);
  window.addEventListener('resize', setHeight, false);
  document.querySelector('.tr-808').addEventListener('click', toggle, false);
})();
