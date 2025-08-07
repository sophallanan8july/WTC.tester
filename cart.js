document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPriceDisplay = document.getElementById("total-price");
  let total = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceDisplay.innerText = "";
    return;
  }

  cartItems.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerHTML = `
      <p><strong>${item.name}</strong> - ${item.price}</p>
    `;
    cartContainer.appendChild(itemElement);
    total += parseFloat(item.price.replace(/[^0-9.]/g, ""));
  });

  totalPriceDisplay.innerText = `Total: $${total.toFixed(2)}`;
});
