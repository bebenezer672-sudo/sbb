const buttons = document.querySelectorAll(".add-to-cart");
const prices = document.querySelectorAll(".price");
let cart = document.querySelector(".cart-count");
const cartempty = document.querySelector(".cart-empty");

let cartcount = 0;
let total = 0;

const totalAmount = document.querySelector("#totalAmount");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cartcount++;

      cart.textContent = cartcount;


    const price = parseFloat(button.value);
    total += price;
    totalAmount.textContent = "€" + total.toFixed(2);

      cartempty.style.display = "none";
      const cr = document.createElement("div");
      
      cr.textContent = "€" + button.value;
      document.querySelector(".cart-items").appendChild(cr);
      

  });
});






const cartBtn = document.querySelector("#cartBtn");
const cartOverlay = document.querySelector("#cartOverlay");
const cartClose = document.querySelector("#cartClose");
const clearCartBtn = document.querySelector(".clear-cart-btn");







clearCartBtn.addEventListener("click", () => {
  cartcount = 0;
  total = 0;
  
  totalAmount.textContent = "€0.00";
  cart.textContent = cartcount;
  
    
  if (cartempty) {
    cartempty.style.display = "block";
  }
});




cartBtn.addEventListener("click", () => {
   cartOverlay.classList.add("active"); 
   
});


cartClose.addEventListener("click", ()=> {
     cartOverlay.classList.remove("active"); 
});









fetch("db.json")
.then(call => call.json())
.then(data => take(data.menu))


function take(menuData) {
const  menu = document.querySelector("all-items");
menu.innerHTML = "";

}

