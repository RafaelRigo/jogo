class Map extends Sprite {
    constructor({x, y, width, height, color}) {
        super({x, y, width, height, color})
    }

    move(dx, dy) {
        this.pos.x += dx
        this.pos.y += dy
    }
}