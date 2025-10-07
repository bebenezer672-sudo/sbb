const skip = document.querySelector(".skip-intro");
const intro = document.querySelector(".intro-screen");


skip.addEventListener("click", () => {
   intro.style.display = "none"
})


setTimeout(() => {
     intro.style.display = "none"
}, 500000)


