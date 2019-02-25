(function init() {
  let firstStep = document.querySelector('li'),
    currentStep = firstStep,
    motion = !matchMedia('(prefers-reduced-motion)').matches,
    runPattern = function runPattern() {
      let jump = function jump(el) {
        el.classList.add('jump');
        setTimeout(function r() {
          el.classList.remove('jump');
        }, 125);
      };
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
      if (currentStep.classList.contains('selected')) {
        jump(currentStep);
      }
    },
    setHeight = function setHeight() {
      let tr808 = document.querySelector('ul');
      tr808.style.height = firstStep.offsetWidth * 1.75 + 'px';
    },
    animate = motion ? setInterval(runPattern, 100) : null,
    toggle = function toggle() {
      if (animate && motion) {
        clearInterval(animate);
        animate = null;
      } else {
        animate = motion ? setInterval(runPattern, 100) : null;
      }
    };
  setHeight();
  window.addEventListener('resize', setHeight, false);
  document.querySelector('.tr-808').addEventListener('click', toggle, false);
})();
