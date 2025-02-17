const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

let a = new Sprite({x: 100, y: 100, width: 50, height: 50, color: "black"})

function clear() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
}

function draw() {
    a.draw(ctx)
}

function loop() {
    clear()
    draw()

    requestAnimationFrame(loop)
}

loop()