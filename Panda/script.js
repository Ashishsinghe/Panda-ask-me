// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// New Elements for the final message
const claimBtn = document.getElementById("claim-btn");
const modalOverlay = document.getElementById("modal-overlay");
const closeModal = document.getElementById("close-modal");

// Track scale for Yes button growth
let yesScale = 1;

// 1. Click Envelope to open
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// 2. Logic to move the NO btn and grow the YES btn
noBtn.addEventListener("mouseover", () => {
    const min = 80; 
    const max = 150;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Grow Yes Button slowly
    yesScale += 0.05; 
    yesBtn.style.transition = "transform 0.3s ease-out";
    yesBtn.style.transform = `scale(${yesScale})`;
});

// 3. YES is clicked - Switch to Yippeeee screen
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif"; // Swap to dancing cat gif
    buttons.style.display = "none";
    finalText.style.display = "block"; // Shows voucher and "Click me" button
});

// 4. Claim Button - Open the honest message modal
claimBtn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
});

// 5. Close Modal
closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});

// 6. Close modal if clicking on the dark background
window.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
    }
});