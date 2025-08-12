    window.addEventListener('DOMContentLoaded', () => {
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

        const continueButton = document.getElementById('continuetophone4');
        if (continueButton) {
        continueButton.addEventListener('click', () => {
        window.location.href = 'phone4.html';
        });
    }
  }
);
