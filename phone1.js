//PHONE DAY 1 START// 

    window.addEventListener('DOMContentLoaded', () => {
  // only run if this is phone day 1
  const popup1 = document.getElementById('wollongong');
  if (popup1) {
    const closedPopups = {
      'wollongong': false,
      'bezzie-ad': false,
      'lightstrip': false
    };

    window.showImage = function (id) {
  // hide all other popups
  document.querySelectorAll('.pop-up-image').forEach(popup => {
    popup.style.display = 'none';
  });

  // show the one clicked
  const popupToShow = document.getElementById(id);
  if (popupToShow) {
    popupToShow.style.display = 'block';
  }
};

      window.closeImage = function (id) {
      const popup = document.getElementById(id);
      if (popup) {
        popup.style.display = 'none';
        closedPopups[id] = true;
      }
    };
    const continueButton = document.getElementById('continuetophone2');
      if (continueButton) {
    continueButton.addEventListener('click', () => {
      window.location.href = 'phone2.html';
      });
    }
  }
});