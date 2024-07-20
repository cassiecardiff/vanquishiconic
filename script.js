const emojis = ["🤡", "💩"];
const container = document.querySelector('.container');
const numEmojis = 20;
const speed = 2;

function createEmoji(index) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[index % emojis.length];
    emoji.style.top = `${Math.random() * 100}vh`;
    emoji.style.left = `${Math.random() * 100}vw`;
    container.appendChild(emoji);
    moveEmoji(emoji);
}

function moveEmoji(emoji) {
    let positionX = parseFloat(emoji.style.left);
    let positionY = parseFloat(emoji.style.top);

    function updatePosition() {
        positionX += speed;
        positionY += speed;
        emoji.style.left = `${positionX}vw`;
        emoji.style.top = `${positionY}vh`;

        if (positionX > 100 || positionY > 100) {
            positionX = -10;
            positionY = -10;
        }

        requestAnimationFrame(updatePosition);
    }

    requestAnimationFrame(updatePosition);
}

for (let i = 0; i < numEmojis; i++) {
    createEmoji(i);
}
