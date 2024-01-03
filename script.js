const chatContainer = document.querySelector('.chat-container');
const chatMessages = document.getElementById('chatMessages');
const messageDropdown = document.getElementById('messageDropdown');
const askButton = document.getElementById('askButton');

const predefinedMessages = {
    Services: "We offer a range of real estate services including sale, purchase, lease, investment, and legal advice.",
    Contact: "You can reach us at rajeshkhithani1965@gmail.com or call us at +919892391317 / +919372629116.",
    Availability: "Our office hours are from 10 am to 10 pm, Monday to Saturday, excluding holidays declared by the Indian Government.",
    Community: "We provided properties in Mumbai, Navi Mumbai, Pune & even in International cities.",
};

function sendMessage() {
    const selectedMessage = messageDropdown.value;

    if (selectedMessage) {
        appendMessage('user', selectedMessage);
        simulateBotResponse(selectedMessage);
        disableOption(selectedMessage);
        checkAllQuestionsAsked(); 
    }
}

function simulateBotResponse(userChoice) {
    const botResponse = `${predefinedMessages[userChoice]}`;

    setTimeout(() => {
        appendMessage('bot', botResponse);
    }, 500);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = message;

    chatMessages.appendChild(messageElement);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function disableOption(optionValue) {
    const selectedOption = messageDropdown.querySelector(`[value="${optionValue}"]`);
    selectedOption.disabled = true;
}

function checkAllQuestionsAsked() {
    const allOptions = Array.from(messageDropdown.options);
    const allOptionsDisabled = allOptions.every(option => option.disabled);

    if (allOptionsDisabled) {
        alert("If you have any further queries, please feel free to call us!");
    }
}
