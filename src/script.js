let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let box = 32;

function createBackground() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, box * 16, box * 16);
}

createBackground();