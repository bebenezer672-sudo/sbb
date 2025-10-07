const buttons = document.querySelectorAll(".add-to-cart");
const prices = document.querySelectorAll(".price");

buttons.forEach((button, index) => {
  const priceElement = prices[index];
  const priceText = priceElement.textContent;

  button.addEventListener("click", () => {
    alert(priceText + " Add to the cart");
  });
});















