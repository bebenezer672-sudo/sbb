const skip = document.querySelector(".skip-intro");
const intro = document.querySelector(".intro-screen");





setTimeout(() => {
     intro.classList.add("fade-out");
     
     setTimeout(() => {
         intro.style.display = "none";
     }, 800);
}, 3000)

