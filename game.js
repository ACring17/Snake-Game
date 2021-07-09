let lastRenderTime = 0
const Snake_Speed = 2

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / Snake_Speed) return

    console.log('Render')
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {

}

function draw() {

}
