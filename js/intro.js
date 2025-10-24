const intro = document.querySelector(".intro-screen");





setTimeout(() => {
     intro.classList.add("fade-out");
     
}, 3000)



document.addEventListener("keydown", () => {
 
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  
});