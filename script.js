// Simple example: console message or future features
console.log("Guacamole UI loaded 🥑");

// Example: click image to pop effect
const img = document.querySelector("img");

img.addEventListener("click", () => {
  img.classList.toggle("scale-110");
});