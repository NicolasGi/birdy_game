export default class TubesPair {
    constructor(game) {
        this.game = game
        this.spaceBetween = 80
        this.x = game.canvas.width
        this.speed = 3
        this.width = 52
        this.height = 317
        this.yTop = -Math.floor(Math.random() * 280) - 25
        this.yBottom = this.yTop + this.height + this.spaceBetween

        this.tubesTopFrame = {
            sx: 113,
            sy: 647,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height
        };
        this.tubesBottomFrame = {
            sx: 168,
            sy: 647,
            sw: this.width,
            sh: this.height,
            dx: 0,
            dy: 0,
            dw: this.width,
            dh: this.height
        }
    }

    update() {
        this.x -= this.speed
        this.render()
    }

    render() {
        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.yTop)
        this.game.renderSpriteFrame(this.tubesTopFrame)
        this.game.ctx.restore()

        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.yBottom)
        this.game.renderSpriteFrame(this.tubesBottomFrame)
        this.game.ctx.restore()
    }
}