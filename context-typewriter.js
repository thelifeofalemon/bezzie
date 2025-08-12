document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loadingscreen');
  const content = document.getElementById('content');
  const lines = document.querySelectorAll(".context-line");
  const instruction = document.querySelector(".context-instruction");
  const button = document.getElementById('beginbutton') || document.getElementById('continuebutton');

  const typingSpeed = 35; // speed per letter
  const pauseBetweenLines = 400; // gap between lines

  // Save original text & clear it
  const textArray = Array.from(lines).map(line => line.textContent);
  lines.forEach(line => line.textContent = "");

  let instructionText = "";
  if (instruction) {
    instructionText = instruction.textContent;
    instruction.textContent = "";
  }

  if (button) button.style.visibility = "hidden";

  // Typing function
  function typeText(el, text, cb) {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (cb) cb();
      }
    }, typingSpeed);
  }

  // Sequence typing
  function startTyping() {
    let delay = 0;
    textArray.forEach((txt, idx) => {
      setTimeout(() => {
        typeText(lines[idx], txt);
      }, delay);
      delay += txt.length * typingSpeed + pauseBetweenLines;
    });

    if (instruction) {
      setTimeout(() => {
        typeText(instruction, instructionText, () => {
          if (button) button.style.visibility = "visible";
        });
      }, delay);
    } else if (button) {
      setTimeout(() => {
        button.style.visibility = "visible";
      }, delay);
    }
  }

  // Wait for loader to finish, then start typing
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
    startTyping();
  }, 3000); // match your loader animation length
});