window.addEventListener('DOMContentLoaded', () => {
  const continueButton = document.getElementById('continuebutton');
  const chime = document.getElementById('bezziechime');

  // show welcome screen after 1.9s
  setTimeout(() => {
    document.getElementById('loadingscreen').style.display = 'none';
    const welcome = document.getElementById('welcomescreen');
    welcome.style.display = 'flex';
    requestAnimationFrame(() => {
      welcome.style.opacity = '1';
    });
  }, 1900);

  // Preload chime
  if (chime) {
    chime.load();
  }

  // Play chime then redirect
  if (continueButton && chime) {
    continueButton.addEventListener('click', (event) => {
      event.preventDefault(); // stop default navigation

      chime.currentTime = 0;
      chime.play()
        .then(() => {
          console.log('Chime playing...');
          setTimeout(() => {
            window.location.href = "phone1.html";
          }, 1400); // delay to match my chime
        })
        .catch(error => {
          console.error('Chime play failed:', error);
          window.location.href = "phone1.html"; // fallback
        });
    });
  }
});