const scores = {
    game:null,
    ctx:null,
    x:0,
    y:0,
    frames: [
        { sx: 990, sy:120, width:25, height:35}, //emplacement du zero
        { sx: 269, sy:910, width:18, height:35}, //emplacement du un
        { sx: 583, sy:320, width:25, height:35}, //emplacement du deux
        { sx: 611, sy:320, width:25, height:35}, //emplacement du trois
        { sx: 640, sy:320, width:25, height:35}, //emplacement du quatre
        { sx: 667, sy:320, width:25, height:35}, //emplacement du cinq
        { sx: 583, sy:368, width:25, height:35}, //emplacement du six
        { sx: 611, sy:368, width:25, height:35}, //emplacement du sept
        { sx: 640, sy:368, width:25, height:35}, //emplacement du huit
        { sx: 667, sy:368, width:25, height:35} //emplacement du huit
    ],
    count:0,
    decimal:0,
    maxCount: 0,


    update(){
        if(this.count === this.maxCount){
            this.count = 0
            this.decimal++
        }
        this.render()
    },
    init(game){
        this.game = game
        this.x = this.game.canvas.width/2
        this.y = this.game.canvas.height/5
        this.maxCount = this.frames.length
    },
    render(){
        this.game.ctx.save()
        this.game.ctx.translate(this.x, this.y)
        this.game.renderSpriteFrame({
            sx:this.frames[this.count].sx,
            sy:this.frames[this.count].sy,
            sw:this.frames[this.count].width,
            sh:this.frames[this.count].height,
            dx:-this.frames[this.count].width/2,
            dy:-this.frames[this.count].height/2,
            dw:this.frames[this.count].width,
            dh:this.frames[this.count].height
    })
        this.game.ctx.restore()
        if(this.decimal){
            this.game.ctx.save()
            this.game.ctx.translate(this.x - this.frames[this.decimal].width/2, this.y + this.frames[this.decimal].height/2)
            this.game.renderSpriteFrame({
                sx:this.frames[this.decimal].sx,
                sy:this.frames[this.decimal].sy,
                sw:this.frames[this.decimal].width,
                sh:this.frames[this.decimal].height,
                dx:-this.frames[this.decimal].width,
                dy:-this.frames[this.decimal].height,
                dw:this.frames[this.decimal].width,
                dh:this.frames[this.decimal].height
            })
            this.game.ctx.restore()
        }

    }

}

export default scores