const openBtns = document.querySelectorAll("#openBtn, #openBtnFooter");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");


openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
})



