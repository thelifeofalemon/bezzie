window.addEventListener('DOMContentLoaded', () => {
  const beginButton = document.getElementById('beginbutton');
  const chime = document.getElementById('bezziechime');
  const loadingScreen = document.getElementById('loadingscreen');
  const content = document.getElementById('content');

  // loading animation first
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
    requestAnimationFrame(() => {
      content.style.opacity = '1';
    });
  }, 3000);

  //Preload chime
  if (chime) {
    chime.load();
  }

  //Play chime then go to next page
  if (beginButton && chime) {
    beginButton.addEventListener('click', (event) => {
      event.preventDefault();

      chime.currentTime = 0;
      chime.play()
        .then(() => {
          console.log('Chime playing...');
          setTimeout(() => {
            window.location.href = "welcome.html";
          }, 1500); // delay to match chime length
        })
        .catch(error => {
          console.error('Chime play failed:', error);
          window.location.href = "welcome.html"; // fallback redirect
        });
    });
  }
});