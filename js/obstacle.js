class Obstacle {
    constructor(ctx, image, width, height, gameWidth, gameHeight) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.image = new Image();
      this.image.src = image;
  
      this.posX = gameWidth;
      this.posY = Math.floor(Math.random()*820)+ 100;
      this.frames= 8;
      this.framesIndex=0;
  
      this.vx = 6;
    }

    draw(framesCounter) {
      this.ctx.drawImage(	
      this.image,
      (this.image.width/this.frames)*this.framesIndex,
      0,
      this.image.width/this.frames,
      this.image.height,
      this.posX,
      this.posY,
      this.width,
      this.height,
      )
      this.animate(framesCounter)
    }
  
    move() {
      this.posX -= this.vx;
    }

    animate(framesCounter) {
      if(framesCounter % 10 === 0) {
        this.framesIndex++;
  
        if(this.framesIndex > this.frames-1) this.framesIndex = 0;
      }
    }
  }