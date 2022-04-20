let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function createBackground() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, box * 16, box * 16);
}

function createSnake() {
    for (const element of snake) {
        context.fillStyle = "#0f0";
        context.fillRect(element.x, element.y, box, box);
    }
}

createBackground();
createSnake();