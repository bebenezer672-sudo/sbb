const input = document.querySelector(".newsletter-input");
const btn = document.querySelector(".newsletter-btn");

btn.addEventListener("click", () => {
   if(input.value !== input.textContent){
    alert("verstuurd")
   }else{
    alert("vul wat in")
   }
})


