class Brick{
    constructor (ctx, width, posY, posX, gameHeight){
        this.ctx = ctx;
        this.width = width;
        this.height = gameHeight;

        this.posX = posX;
        this.posY = posY
    }

    draw(){
        this.ctx.fillStyle = '#7C4943';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
}