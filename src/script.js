let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let box = 32
let snake = []
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

let direction = 'right'
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood() {
  // draw the food
  context.fillStyle = '#f00'
  context.fillRect(food.x, food.y, box, box)
}

function startGame() {
  // start game by drawing the snake and the background
  createBackground()
  createSnake()
  drawFood()

  // make the snake appear on the other side of the screen
  if (snake[0].x > 15 * box && direction === 'right') {
    snake[0].x = 0
  } else if (snake[0].x < 0 && direction === 'left') {
    snake[0].x = 16 * box
  } else if (snake[0].y > 15 * box && direction === 'down') {
    snake[0].y = 0
  } else if (snake[0].y < 0 && direction === 'up') {
    snake[0].y = 16 * box
  }

  // verify if the snake collides with itself
  for (let i = 1; i < snake.length; i++) {
    if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
      handlePause()
      alert('Game Over! :(')
    }
  }

  let snakePositionX = snake[0].x
  let snakePositionY = snake[0].y

  // move the snake
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

  // check if the snake eats the food
  if (snakePositionX === food.x && snakePositionY === food.y) {
    food.x = Math.floor(Math.random() * 15 + 1) * box
    food.y = Math.floor(Math.random() * 15 + 1) * box
  } else {
    // remove the last element of the snake
    snake.pop()
  }

  // add the new head of the snake
  let newHead = {
    x: snakePositionX,
    y: snakePositionY
  }

  snake.unshift(newHead)
}

let game = setInterval(startGame, 100) // 100ms = 10fps

function handleKeyboard(event) {
  // handle keyboard input
  if (event.keyCode === 37 && direction !== 'right') {
    direction = 'left'
  } else if (event.keyCode === 38 && direction !== 'down') {
    direction = 'up'
  } else if (event.keyCode === 39 && direction !== 'left') {
    direction = 'right'
  } else if (event.keyCode === 40 && direction !== 'up') {
    direction = 'down'
  } else if (event.keyCode === 32) {
    handlePause()
  } else if (event.keyCode === 13) {
    handleResume()
  } else if (event.keyCode === 82) {
    handleRestart()
  } else if (event.keyCode === 86) {
    handleAcelerante()
  } else if (event.keyCode === 66) {
    handleDesacelerante()
  }
}

function handleRestart() {
  // restart the game
  clearInterval(game)
  snake = []
  snake[0] = {
    x: 8 * box,
    y: 8 * box
  }
  direction = 'right'
  food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
  }
  game = setInterval(startGame, 100)
}

function handleAcelerante() {
  // acelerante the game
  clearInterval(game)
  game = setInterval(startGame, 50)
}

function handleDesacelerante() {
  // break the game
  clearInterval(game)
  game = setInterval(startGame, 500)
}

function handlePause() {
  // pause the game
  clearInterval(game)
}

function handleResume() {
  // resume the game
  clearInterval(game)
  game = setInterval(startGame, 100)
}

document.addEventListener('keydown', handleKeyboard)
