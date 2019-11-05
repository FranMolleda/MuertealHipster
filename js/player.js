class Player {
    constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = image;

        this.posX = 50;
        this.posY = gameHeight * 0.94 - this.height;
        this.posY0 = gameHeight * 0.94 - this.height;
        this.vy = 1;
        this.gravity = 0.4;
        this.gameWidth = gameWidth;

        this.frames = 3;
        this.framesIndex = 0;

        this.speed=3

        this.keys = keys;
        this.bullets = [];
        this.keyState = {
            keyDown : false,
            keyUp : false
          }
        this.setListeners()
    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.framesIndex * Math.floor(this.image.width / this.frames),
            0,
            Math.floor(this.image.width),
            this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height

        )
        this.clearBullets()
        this.bullets.forEach(bullet => bullet.draw())
        //this.animate(framesCounter)
    }


    move() {
        if(this.keyState.keyUp && this.posY > 0){
            this.posY -= this.speed
            

          }
          if(this.keyState.keyDown && this.posY < this.posY0){ //PosY0 es la posición del player encima de la tabla
        
            this.posY += this.speed
          }
        }
        //this.bullets.forEach(bullet => bullet.move())
    


   // animate(framesCounter) {
   //     if (framesCounter % 10 === 0) {
   //         this.framesIndex++;
//
   //         if (this.framesIndex > 2) this.framesIndex = 0;
   //     }
   // }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            if (e.keyCode === 38) {
                this.keyState.keyUp = true;
            }
            if (e.keyCode === 40) {
                this.keyState.keyDown = true;
            }
          })
          document.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 38) {
                this.keyState.keyUp = false;
            }
            if (e.keyCode === 40) {
                this.keyState.keyDown = false;
            }
          })
    }

    shoot() {
        this.bullets.push(new Bullet(this.ctx, 10, this.posX, this.posY, this.width, this.height, this.posY0))
    }

    clearBullets() {
        this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth)
    }
}

