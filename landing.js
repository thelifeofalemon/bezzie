document.addEventListener('DOMContentLoaded', () => {
  // SIGN UP POPUP
  document.querySelector('.floating-signup').addEventListener('click', () => {
    document.getElementById('signupPopup').style.display = 'block';
  });

  // CLOSE POPUP
  window.closePopup = function () {
    document.getElementById('signupPopup').style.display = 'none';
  };

  // DRAGGABLE
  let dragTarget = null;
  let offsetX, offsetY;

  window.startDrag = function (e) {
    dragTarget = e.target.closest('.signup-popup');
    if (!dragTarget) return;

    offsetX = e.clientX - dragTarget.offsetLeft;
    offsetY = e.clientY - dragTarget.offsetTop;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  };

  function drag(e) {
    if (!dragTarget) return;
    dragTarget.style.left = `${e.clientX - offsetX}px`;
    dragTarget.style.top = `${e.clientY - offsetY}px`;
  }

  function stopDrag() {
    dragTarget = null;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
  }

  // floating signup button and the footer
const signupBtn = document.querySelector('.floating-signup');
const footer = document.querySelector('.site-footer');

//IntersectionObserver for smooth scrollin
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // move button up when footer is seen
        signupBtn.style.bottom = '140px';
      } else {
        // reset button when footer not seen
        signupBtn.style.bottom = '24px';
      }
    });
  },
  {
    root: null,       // viewport
    threshold: 0.1    // trigger when 10% of footer is visible
  }
);

observer.observe(footer);

});
