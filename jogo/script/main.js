const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let a = new Sprite({x: 100, y: 100, width: 50, height: 50, color: "black"})

const map = new Map( {x: 0, y: 0, width: 2000, height: 2000, color: "green"})

const vel = 5

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
    if (key in keys.up) {
        map.move(0, -vel)
    } else if (key in keys.down) {
        map.move(0, vel)
    } else if (key in keys.left) {
        map.move(-vel, 0)
    } else if (key in keys.right) {
        map.move(vel, 0)
    }
})