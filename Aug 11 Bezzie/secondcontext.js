document.addEventListener("DOMContentLoaded", () => {
    console.log("secondcontext.js loaded");

    const loader = document.getElementById('loadingscreen');
    const content = document.getElementById('content');
    const lines = document.querySelectorAll(".context-line");
    const instruction = document.querySelector(".context-instruction");
    const button = document.getElementById('continuebutton');

    const typingSpeed = 35; // ms per character
    const pauseBetweenLines = 400; // pause after a line

    // Save text & clear it
    const lineTexts = Array.from(lines).map(line => line.textContent);
    lineTexts.forEach((_, idx) => lines[idx].textContent = "");
    const instructionText = instruction.textContent;
    instruction.textContent = "";

    button.classList.remove('show'); // hide button initially

    function typeText(element, text, cb) {
        let i = 0;
        const timer = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(timer);
                if (cb) cb();
            }
        }, typingSpeed);
    }
//i had to use copilot for this because when i did it on my own, the text, buttons and audio kept glitching. 
    function startTyping() {
        let delay = 0;

        lineTexts.forEach((txt, idx) => {
            setTimeout(() => {
                typeText(lines[idx], txt);
            }, delay);
            delay += txt.length * typingSpeed + pauseBetweenLines;
        });

        // After all lines are typed, type the instruction and show the button
        setTimeout(() => {
            typeText(instruction, instructionText, () => {
                button.classList.add('show'); // fade in button
            });
        }, delay);
    }

    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
        startTyping();
    }, 3000);

    button.addEventListener('click', () => {
        const chime = document.getElementById('bezziechime');
        if (chime) {
            chime.currentTime = 0;
            const played = chime.play();

            if (played !== undefined) {
                played.then(() => {
                    console.log("Chime playing...");
                    chime.onended = () => {
                        window.location.href = "landing.html"; // redirect after sound
                    };
                }).catch(err => {
                    console.error("Chime failed:", err);
                    window.location.href = "landing.html"; // fallback redirect
                });
            }
        } else {
            window.location.href = "landing.html"; // fallback if no audio element
        }
    });
});