    window.addEventListener('DOMContentLoaded', () => {
    const popup1 = document.getElementById('missed-call');
    if (popup1) {
        const closedPopups = {
        'missed-call': false,
        'bezzie-ring': false,
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

        const continueButton = document.getElementById('continuetophone3');
        if (continueButton) {
        continueButton.addEventListener('click', () => {
        window.location.href = 'phone3.html';
        });
    }
  }
});
