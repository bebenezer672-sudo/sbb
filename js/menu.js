const buttons = document.querySelectorAll(".add-to-cart");
const prices = document.querySelectorAll(".price");
let cart = document.querySelector(".cart-count");
let cartcount = 0;
buttons.forEach((button, index) => {
  const priceElement = prices[index];
  const priceText = priceElement.textContent;

  button.addEventListener("click", () => {
    cartcount++;
    alert(priceText + " Add to the cart");
    
   if(cart){
    cart.textContent = cartcount
   }

  });
});



const cartBtn = document.querySelector(".cartBtn");

cartBtn.addEventListener("click", () => {
  
});
















