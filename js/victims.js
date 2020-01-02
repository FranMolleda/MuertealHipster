class Victim{
    constructor (ctx, width, height, posX, posY){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = './img/zombie_walk.png'

        this.posX = posX;
        this.posY = posY;
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, 100, 150)
    }
}