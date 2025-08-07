const API_ORDERS = "https://your-backend-url.com/api/orders";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkoutForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const contact = form.contact.value;
    const address = form.address.value;
    const fulfillment = form.fulfillment.value;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    try {
      const response = await fetch(`${API_ORDERS}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact, address, fulfillment, items: cart })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        window.location.href = "orderhistory.html";
      } else {
        alert("Checkout failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Error during checkout: " + err.message);
    }
  });
});
