class Obstacle {
    constructor(ctx, image, width, height, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.image = new Image();
      this.image.src = image;
  
      this.posX = gameWidth;
      this.posY = Math.floor(Math.random()*820)+ 100

  
      this.vx = 6;
    }
  
    draw() {
      this.ctx.drawImage(	
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
      )
    }
  
    move() {
      this.posX -= this.vx;
    }
  }