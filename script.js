// ------------------------
// Part 2: Functions & Scope
// ------------------------

// Global variable
let boxAnimationCount = 0;

// Function with parameter and return value
function getBoxStatusMessage(count) {
  return `Box has been animated ${count} time(s).`;
}

// Local scope demo
function logBoxAnimation() {
  boxAnimationCount++;
  const message = getBoxStatusMessage(boxAnimationCount);
  console.log(message);
}

// Event handler to animate box
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
  logBoxAnimation();
});

// ------------------------
// Part 3: Triggering CSS Animations with JS
// ------------------------

const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Function to open modal
function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("show");
}

// Function to close modal
function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hidden");
}

// Event listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
