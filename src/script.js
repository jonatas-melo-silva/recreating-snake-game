let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

let direction = 'right'

function createBackground() {
  // create the background
  context.fillStyle = '#000'
  context.fillRect(0, 0, box * 16, box * 16)
}

function createSnake() {
  // create the snake
  for (const element of snake) {
    context.fillStyle = '#0f0'
    context.fillRect(element.x, element.y, box, box)
  }
}

function startGame() {
  // start game by drawing the snake and the background
  createBackground()
  createSnake()

  let snakePositionX = snake[0].x
  let snakePositionY = snake[0].y

  if (direction === 'right') {
    snakePositionX += box
  }
  if (direction === 'left') {
    snakePositionX -= box
  }
  if (direction === 'up') {
    snakePositionY -= box
  }
  if (direction === 'down') {
    snakePositionY += box
  }

  snake.pop()

  let newHead = {
    x: snakePositionX,
    y: snakePositionY
  }

  snake.unshift(newHead)
}

let game = setInterval(startGame, 100) // 100ms = 10fps
