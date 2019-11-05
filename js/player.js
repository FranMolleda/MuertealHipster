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

        this.keys = keys;
        this.bullets = [];
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
            this.width * 4,
            this.height
        )
        this.clearBullets()
        this.bullets.forEach(bullet => bullet.draw())
    }


    move() {
        if (this.posY <= this.posY0) {
            this.posY += this.vy;
            this.vy += this.gravity;
        } else {
            this.vy = 1;
            this.posY = this.posY0;
        }
        this.bullets.forEach(bullet => bullet.move())
    }


    animate(framesCounter) {
        if (framesCounter % 10 === 0) {
            this.framesIndex++;

            if (this.framesIndex > 2) this.framesIndex = 0;
        }
    }

    setListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case this.keys.TOP_KEY:
                    this.posY -= this.posY;
                    //if (this.posY >= this.posY) {
                    //    this.posY -= this.vy;
                    //    this.vy -= 10;
                    //}
                    break;

                case this.keys.RIGHT_KEY:
                    this.posX += this.posX;
                    break;

                case this.keys.LEFT_KEY:
                    this.posX -= this.posX;
                    break;

                case this.keys.DOWN_KEY:
                    this.posY += posY;
                    break;


                case this.keys.SPACE:
                    this.shoot()
                    break;

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