class Brick{
    constructor (ctx, width, gameHeight, posX, posY){
        this.ctx = ctx;
        this.width = width;
        this.height = gameHeight;

        this.posX = posX;
        this.posY = posY
    }

    draw(){
        this.ctx.fillStyle = '#3B4033';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
}