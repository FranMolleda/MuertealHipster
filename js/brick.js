class Brick{
    constructor (ctx, width, gameHeight, posX, posY){
        this.ctx = ctx;
        this.width = width;
        this.height = gameHeight;

        this.posX = posX;
        this.posY = posY
    }

    draw(){
        this.ctx.fillStyle = '#2F2C2C';
        this.ctx.fillRect(this.posX, this.posY, 100, 0)
    }
}