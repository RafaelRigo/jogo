const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let vel = 10

let a = new Sprite({x: canvas.clientWidth/2 - 25, y: canvas.height/2 - 25, width: 50, height: 50, color: "black"})

const map = new Map( {x: 0, y: 0, width: 500, height: 500, color: "green"})

function clear() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
}

function draw() {
    map.draw(ctx)
    a.draw(ctx)
}

function loop() {
    clear()
    draw()

    requestAnimationFrame(loop)
}

loop()

window.addEventListener('keydown', ( {key} ) => {
    map.move(key, 'keydown')
})

window.addEventListener('keyup', ( {key} ) => {
    map.move(key, 'keyup')
})