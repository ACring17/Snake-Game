import { onSnake, expandSnake } from './snake.js'

let food = { x: 0, y: 0 }
const Expansion_Rate = 1

export function update() {
     if (onSnake(food)) {
        expandSnake(Expansion_Rate)
        food = { x: 20, y: 10 }
    }
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = food.y
        snakeElement.style.gridColumnStart = food.x
        snakeElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    })
}
