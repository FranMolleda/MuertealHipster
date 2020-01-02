class Bullet {
    constructor(ctx, radius, playerX, playerY, playerWidth, playerHeight, floor) {
      this.ctx = ctx;
      this.radius = radius;
  
      this.posX = playerX + playerWidth;
      this.posY = playerY + playerHeight/2;
      this.playerHeight= playerHeight;
      this.playerWidth=playerWidth;
      this.floor = floor;
      this.image = new Image();
      this.image.src = './img/Beer.png'
  
      this.vx = 5;
      this.vy = 7;
      this.gravity = 0.9;
    }
  
    draw() {

      this.ctx.drawImage(this.image, this.posX, this.posY, 40, 40)

    }
  
    move() {
      this.posX += this.vx;
      this.posY += this.vy;
      this.vy += this.gravity;
  
      //Accelerate > 1 &&  Decelerate < 1
      if(this.posY >= this.floor + this.playerHeight) this.vy *= -1
    }
  
  }