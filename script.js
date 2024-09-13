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
