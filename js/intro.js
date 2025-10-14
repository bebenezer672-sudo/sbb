const skip = document.querySelector(".skip-intro");
const intro = document.querySelector(".intro-screen");





setTimeout(() => {
     intro.classList.add("fade-out");
     
     setTimeout(() => {
         
     }, 800);
}, 3000)



document.addEventListener("keydown", (e) => {
  if (e.key) {
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  }
});