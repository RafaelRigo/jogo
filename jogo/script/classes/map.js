class Map extends Sprite {
    constructor({x, y, width, height, color}) {
        super({x, y, width, height, color})
    }

     async move(key, type) {
        switch (type) {
            case 'keydown':
                if (keys.up.includes(key)) {
                    this.pos.y += vel
                } if (keys.right.includes(key)) {
                    this.pos.x -= vel
                } if (keys.left.includes(key)) {
                    this.pos.x += vel
                } if (keys.down.includes(key)) {
                    this.pos.y -= vel
                }
        }
    }
}