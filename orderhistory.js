const API_ORDERS = "https://your-backend-url.com/api/orders";

document.addEventListener("DOMContentLoaded", async () => {
  const orderList = document.getElementById("order-list");

  try {
    const res = await fetch(API_ORDERS);
    const orders = await res.json();

    if (!res.ok || !Array.isArray(orders)) throw new Error("Failed to fetch orders");

    if (orders.length === 0) {
      orderList.innerHTML = "<p>No orders found.</p>";
      return;
    }

    orders.forEach(order => {
      const div = document.createElement("div");
      div.classList.add("order-entry");
      div.innerHTML = `
        <h4>Order on ${new Date(order.createdAt).toLocaleString()}</h4>
        <p><strong>Contact:</strong> ${order.contact}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Fulfillment:</strong> ${order.fulfillment}</p>
        <ul>
          ${order.items.map(i => `<li>${i.name} - ${i.price}</li>`).join("")}
        </ul>
        <hr />
      `;
      orderList.appendChild(div);
    });
  } catch (err) {
    orderList.innerHTML = `<p>Error loading orders: ${err.message}</p>`;
  }
});
