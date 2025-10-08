// Nebius AI Chatbot Server
const API_KEY = "eyJhbGciOiJIUzI1NiIsImtpZCI6IlV6SXJWd1h0dnprLVRvdzlLZWktc0M1akptWXBvX1VaVkxUZlpnMDRlOFUiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMDE0NTcyNzAxNjc4NDU4MDkxNyIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIiwiaXNzIjoiYXBpX2tleV9pc3N1ZXIiLCJhdWQiOlsiaHR0cHM6Ly9uZWJpdXMtaW5mZXJlbmNlLmV1LmF1dGgwLmNvbS9hcGkvdjIvIl0sImV4cCI6MTkxNzU0NTA4MSwidXVpZCI6IjAxOTljMDIyLTBkMDMtNzYxYy05MmFkLWJmMjNmMTVkOTY4MyIsIm5hbWUiOiJ0ZXN0IDEiLCJleHBpcmVzX2F0IjoiMjAzMC0xMC0wNlQxOToyNDo0MSswMDAwIn0.iduurfcqQfVN3vpy8GZV4Lw1a6j3ZHwLuRHWAS7oBSQ";
const API_URL = "https://api.studio.nebius.ai/v1/chat/completions";

// Functie om AI antwoord te krijgen
async function getAIResponse(userMessage) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini", // Of een ander beschikbaar model
                messages: [
                    {
                        role: "system",
                        content: "Je bent een vriendelijke assistent voor Bristo Bakery. Beantwoord vragen over de bakkerij, menu items, openingstijden en locatie. Antwoord altijd in het Nederlands."
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
        
    } catch (error) {
        console.error('Fout bij AI API:', error);
        return "Sorry, ik kan momenteel niet antwoorden. Probeer het later opnieuw.";
    }
}

// Export functie voor gebruik in chatbot
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getAIResponse };
}