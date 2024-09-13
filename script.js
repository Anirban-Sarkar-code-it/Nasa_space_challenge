document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const popups = document.querySelectorAll(".popup");

    // Add click event listeners to each card to open the corresponding popup
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const targetPopupId = card.getAttribute("data-target");
            if (targetPopupId) {
                openPopup(targetPopupId);
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotQuery = document.getElementById('chatbot-query');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle chatbot visibility
    chatbotClose.addEventListener('click', function () {
        chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'flex' : 'none';
    });

    // Handle message sending
    chatbotSend.addEventListener('click', function () {
        const query = chatbotQuery.value;
        if (query.trim()) {
            addMessage('You: ' + query);
            chatbotQuery.value = '';
            fetchChatbotResponse(query);
        }
    });

    // Fetch response from the chatbot
    async function fetchChatbotResponse(query) {
        try {
            const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: `Answer the following query about exoplanets: ${query}`,
                    max_tokens: 150
                })
            });
            const data = await response.json();
            addMessage('Bot: ' + data.choices[0].text.trim());
        } catch (error) {
            console.error('Error fetching chatbot response:', error);
            addMessage('Bot: Sorry, I am having trouble answering that right now.');
        }
    }
    document.getElementById('chatbot-query').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('chatbot-send').click();
    }
});

    // Add message to chat
    function addMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to bottom
    }
});


    // Add click event listeners to each popup close button
    popups.forEach((popup) => {
        const closeButton = popup.querySelector(".close-btn");
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                closePopup(popup.id);
            });
        }

        // Close popup when clicking outside the content
        popup.addEventListener("click", function (e) {
            if (e.target === popup) {
                closePopup(popup.id);
            }
        });
    });
});

// Function to open a popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'flex'; // Flex is used for centering
    }
}

// Function to close a popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}
