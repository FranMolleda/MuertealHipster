class Brick{
    constructor (ctx, width,height, gameWidth, gameHeight){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.posX = gameWidth-100;
        this.posY = gameHeight - this.height;
        console.log()
    }

    draw(){
        this.ctx.fillStyle = 'rgb(134,196, 152)';
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
}