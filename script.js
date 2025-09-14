// Modal logic
const modal = document.getElementById("orderModal");
const closeBtn = document.querySelector(".close");
const productInput = document.getElementById("productInput");

// Open modal from header button
document.getElementById("orderBtn").addEventListener("click", () => {
  productInput.value = "";
  modal.style.display = "flex";
});

// Open modal from product order buttons
document.querySelectorAll(".order-product").forEach(btn => {
  btn.addEventListener("click", () => {
    productInput.value = btn.dataset.product;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Order form submit
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch("https://script.google.com/macros/s/AKfycbybRGe1nOUWyPXB-AXutyCzVZ74qlbi4h0i8h8o6vabZxVEsnVmcPi1yTYx4inSiGLR/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    document.getElementById("responseMsg").innerText = "✅ Order placed successfully!";
    this.reset();
  })
  .catch(err => {
    document.getElementById("responseMsg").innerText = "❌ Error! Please try again.";
    console.error(err);
  });
});
