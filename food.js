import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const Expansion_Rate = 1

export function update() {
     if (onSnake(food)) {
        expandSnake(Expansion_Rate)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = food.y
    snakeElement.style.gridColumnStart = food.x
    snakeElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
