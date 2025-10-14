const subsbtn = document.querySelector("#subscribeBtn");
const subpopup = document.querySelector("#subscribePopup");
const subclose = document.querySelector("#subscribeCloseBtn");




const input = document.querySelector(".newsletter-input");
const btn = document.querySelector(".newsletter-btn");

btn.addEventListener("click", () => {
   if(input.value !== input.textContent){
    subsbtn.addEventListener("click",() => {
    subpopup.style.display = "flex";
})
 }else{
    alert("vul wat in")
   }

setTimeout(()=> {
subpopup.style.display = "none";
}, 3000)

  
})



