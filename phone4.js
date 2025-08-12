    window.addEventListener('DOMContentLoaded', () => {
    const closedPopups = {
        'care-package': false,
        'news-article': false,
        'lamp': false
    };

    window.showImage = function (id) {
        // Hide all popups
        document.querySelectorAll('.pop-up-image, .article-popup').forEach(popup => {
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

    const continueButton = document.getElementById('continuetoproduct');
    if (continueButton) {
        continueButton.addEventListener('click', () => {
        window.location.href = 'secondcontext.html';
        });
    }

    let dragTarget = null;
    let offsetX, offsetY;

    window.startDrag = function (e) {
        e.preventDefault();
        dragTarget = e.target.closest('.article-popup');
        if (!dragTarget) return;
        offsetX = e.clientX - dragTarget.offsetLeft;
        offsetY = e.clientY - dragTarget.offsetTop;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    };

    function drag(e) {
        if (!dragTarget) return;
        dragTarget.style.left = (e.clientX - offsetX) + 'px';
        dragTarget.style.top = (e.clientY - offsetY) + 'px';
    }

    function stopDrag() {
        dragTarget = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }
    });
