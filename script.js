const messages = [
    "Are you sure Mazi jaanudi?",
    "Really sure Mera Baccha ??",
    "Are you positive Meri jaan?",
    "Pookie please naa...",
    "Just think about it!",
    "Tumhi Nahi mhananr, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad bubu...",
    "say yes please! meri jaaanu ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio('sajna.mp3');
    audio.loop = true;

    var noButton = document.querySelector('.no-button');
    noButton.addEventListener("click", function() {
        audio.play().catch(error => {
            console.log('Auto-play was prevented:', error);
        });
    });
});