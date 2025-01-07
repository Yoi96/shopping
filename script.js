const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user-message");
        userInput.value = '';
        respondToUser(userMessage);
    }
}

function addMessage(message, type) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(type);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(message) {
    let botResponse = '';
    
    if (message.toLowerCase().includes("products") || message.toLowerCase().includes("items")) {
        botResponse = 'We have T-shirts, Laptops, Shoes, and more. What are you looking for?';
    } else if (message.toLowerCase().includes("laptop")) {
        botResponse = 'We have amazing laptops starting from $500. Would you like to add one to your cart?';
    } else if (message.toLowerCase().includes("t-shirt")) {
        botResponse = 'We have cool T-shirts starting from $20. Would you like to add one to your cart?';
    } else if (message.toLowerCase().includes("yes")) {
        botResponse = 'Great! I have added the item to your cart. Do you want to add anything else?';
    } else {
        botResponse = 'I\'m sorry, I didn\'t quite understand that. Can you please ask about our products or items?';
    }
    
    setTimeout(() => {
        addMessage(botResponse, "bot-message");
    }, 1000);
}

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});
