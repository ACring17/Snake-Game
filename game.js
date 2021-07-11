import { update as updateSnake, draw as drawSnake, Snake_Speed, getSnakeHead, snakeIntersection  } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
