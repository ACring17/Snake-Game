import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
/*import { countTimer } from './timer.js'*/

/* For the start of the game  */
let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

/* Main function updating every second  */
function main(currentTime) {
    if (gameOver) {
        if (confirm('You Lost! Press Ok to restart.')) {
            window.location = './'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
    /*countTimer()*/
}

/* Creates the Snake and Food */
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

/* Checking if player has lost */
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
