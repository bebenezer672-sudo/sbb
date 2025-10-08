const chatBtn = document.querySelector(".chatbot-btn");
const chatWindow = document.querySelector(".chat-window");
const verstuurd = document.querySelector(".chat-input button");
const inputVeld = document.querySelector(".chat-input input");
const chatMessages = document.querySelector(".chat-messages");

chatBtn.addEventListener("click", () => {
    chatWindow.style.display = "flex";
})

document.addEventListener("click", (e) => {
    if (!e.target.closest(".chat-bot")) {
        chatWindow.style.display = "none";
    }
})

// SIMPELE TEST VERSIE EERST
verstuurd.addEventListener("click", async () => {
    const bericht = inputVeld.value.trim();
    
    if (bericht) {
        // Voeg user bericht toe
        chatMessages.innerHTML += `<div class="user-message"><p>${bericht}</p></div>`;
        inputVeld.value = "";
        
        // Test met simpel bot antwoord
        setTimeout(() => {
            chatMessages.innerHTML += `<div class="bot-message"><p>Bedankt voor je bericht: "${bericht}". Ik ben je Bristo Bakery assistent!</p></div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
});

// Enter toets support
inputVeld.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        verstuurd.click();
    }
});

