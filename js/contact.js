const nam = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("textarea");
const verstuurd = document.querySelector(".verstuurd");

verstuurd.addEventListener("click", () => {
  if(nam.value === "" || email.value === "" || message.value === ""){
     alert("vull wat in");
  }else{
    alert("gelukt");
  }
})

