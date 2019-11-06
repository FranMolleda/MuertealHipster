class Bullet {
    constructor(ctx, radius, playerX, playerY, playerWidth, playerHeight, floor) {
      this.ctx = ctx;
      this.radius = radius;
  
      this.posX = playerX + playerWidth;
      this.posY = playerY + playerHeight/2;
      this.playerHeight= playerHeight;
      this.floor = floor;
  
      this.vx = 15;
      this.vy = 9;
      this.gravity = 0.9;
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#FFB832'
      this.ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2)
      this.ctx.fill()
      this.ctx.closePath();
    }
  
    move() {
      this.posX += this.vx;
      this.posY += this.vy;
      this.vy += this.gravity;
  
      //Accelerate > 1 &&  Decelerate < 1
      if(this.posY >= this.floor + this.playerHeight) this.vy *= -1
    }
  
  }