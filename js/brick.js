class Brick{
    constructor (ctx, width, gameHeight, posX, posY){
        this.ctx = ctx;
        this.width = width;
        this.height = gameHeight;

        this.posX = posX;
        this.posY = posY

        this.image = new Image();
      this.image.src = './img/nube.png'
  
    }

    draw(){
       // this.ctx.fillStyle = '#2F2C2C';
        this.ctx.drawImage(this.image, this.posX, this.posY, 150, 40)
    }
}