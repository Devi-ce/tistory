// CSS 추가
(function() {
  const shakeStyle = document.createElement('style');
  shakeStyle.textContent = `
    .shake-text {
      display: inline-block;
    }

    @keyframes earthquake {
      0%, 100% { transform: translate(0, 0); filter: blur(0px); }
      10% { transform: translate(-3px, 2px); filter: blur(0.5px); }
      20% { transform: translate(3px, -2px); filter: blur(0.8px); }
      30% { transform: translate(-2px, 3px); filter: blur(0.5px); }
      40% { transform: translate(2px, -3px); filter: blur(0.8px); }
      50% { transform: translate(-3px, 2px); filter: blur(1px); }
      60% { transform: translate(3px, -2px); filter: blur(0.8px); }
      70% { transform: translate(-2px, 3px); filter: blur(0.5px); }
      80% { transform: translate(2px, -3px); filter: blur(0.8px); }
      90% { transform: translate(-3px, 2px); filter: blur(0.5px); }
    }

    .shake-text.shaking {
      animation: earthquake 0.15s ease-in-out 0s 7;
    }
  `;
  document.head.appendChild(shakeStyle);

  document.addEventListener('DOMContentLoaded', function() {
    const shakeElements = document.querySelectorAll('.shake-text');
    const observed = new Set();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !observed.has(entry.target)) {
          observed.add(entry.target);
          entry.target.classList.add('shaking');
          
          setTimeout(() => {
            entry.target.classList.remove('shaking');
            observed.delete(entry.target);
          }, 1000);
        }
      });
    }, {
      threshold: 0.5
    });

    shakeElements.forEach(el => observer.observe(el));
  });
})();
