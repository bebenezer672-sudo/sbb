const openBtns = document.querySelectorAll("#openBtn, #openBtnFooter");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");

const chef = document.querySelector("#chefBtn");
const chefPopup = document.querySelector("#chefPopup");
const chefclose = document.querySelector("#chefCloseBtn");



chef.addEventListener("click", () => {
    chefPopup.style.display = "flex";
})

chefclose.addEventListener("click", () => {
    chefPopup.style.display = "none";
})


openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
})



const subsbtn = document.querySelector("#subscribeBtn");
const subpopup = document.querySelector("#subscribePopup");
const subclose = document.querySelector("#subscribeCloseBtn");

subsbtn.addEventListener("click",() => {
    subpopup.style.display = "flex";
})

subclose.addEventListener("click", () => {
    subpopup.style.display = "none";
})