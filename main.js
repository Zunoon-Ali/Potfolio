document.getElementById('year').textContent = new Date().getFullYear();

// Get the preview button
document.getElementById("previewBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const pdfUrl = "assets/M.Zunoon_Ali.pdf"; // Replace with the path to your PDF file
    window.open(pdfUrl, "_blank"); // Open the PDF in a new tab
});


const nameElement = document.querySelector('.name');
const nameText = "Muhammad Zunoon Ali";
let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        nameElement.textContent = nameText.slice(0, index++);
    } else {
        nameElement.textContent = nameText.slice(0, index--);
    }

    if (index === nameText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (index === 1 && isDeleting) {
        isDeleting = false; // Restart typing after deleting
        setTimeout(typeEffect, 1000); // Pause before restarting
        return;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150); // Adjust typing and deleting speed
}

typeEffect();

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-percent");
        bar.style.width = targetWidth + "%";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".skill-circle");
    circles.forEach((circle) => {
        const finalPercent = circle.style.getPropertyValue("--percent");
        circle.style.setProperty("--final-percent", finalPercent);
        circle.style.setProperty("--percent", 0);
        setTimeout(() => {
            circle.style.setProperty("--percent", finalPercent);
        }, 100);
    });
});
