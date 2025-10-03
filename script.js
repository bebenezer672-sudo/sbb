const openBtn = document.querySelector("#openBtn");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");




openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
})

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
})



