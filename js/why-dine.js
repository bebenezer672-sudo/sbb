const play = document.querySelector(".playbtn");
const pla = document.querySelector("video");


play.addEventListener("click", () => {
  video.play();
   play.style.display = "none";

   
})

pla.addEventListener("ended", () => {
    play.style.display = "flex"
});