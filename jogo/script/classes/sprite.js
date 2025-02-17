class Sprite {
    constructor({x, y, width, height, color}) {
        this.pos = {x, y}
        this.size = {width, height}
        this.color = color
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.pos.x, this.pos.y, this.size.width, this.size.height)
    }
}