const buttons = document.querySelectorAll(".add-to-cart");
const prices = document.querySelectorAll(".price");
let cart = document.querySelector(".cart-count");

let cartcount = 0;
let total = 0;

const totalAmount = document.querySelector("#totalAmount");

buttons.forEach((button, index) => {
  const priceElement = prices[index];
  const priceText = priceElement.textContent;

  button.addEventListener("click", () => {
    cartcount++;

    if (cart) {
      cart.textContent = cartcount;
     
      
    }

  
    const price = parseFloat(priceText.replace('€', '').replace(',', '.').trim());

    total += price;
    totalAmount.textContent = "€" + total.toFixed(2);
  });
});






const cartBtn = document.querySelector("#cartBtn");
const cartOverlay = document.querySelector("#cartOverlay");
const cartClose = document.querySelector("#cartClose");
const clearCartBtn = document.querySelector(".clear-cart-btn");







clearCartBtn.addEventListener("click", () => {
  cartcount = 0;
  
     totalAmount.textContent = "0.00";
    cart.textContent = cartcount
   
});




cartBtn.addEventListener("click", () => {
   cartOverlay.classList.add("active"); 
   
});


cartClose.addEventListener("click", ()=> {
     cartOverlay.classList.remove("active"); 
});










