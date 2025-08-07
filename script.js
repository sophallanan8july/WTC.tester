document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const productCard = e.target.closest(".product");
      const name = productCard.querySelector("p strong").innerText;
      const price = productCard.querySelectorAll("p")[1].innerText;
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push({ name, price });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(name + " added to cart!");
    });
  });
});
