// Placeholder for future interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Desi Gujiya site loaded ✅");
  // Example: Add-to-cart button feedback
  document.querySelectorAll(".add-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Item added to cart 🛒");
    });
  });
});