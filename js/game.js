const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {
        TOP_KEY: 38,
        RIGHT_KEY: 39,
        LEFT_KEY: 37,
        DOWN_KEY: 40,
        SPACE_KEY: 32
    },
    score: 0,
    //Briks config
    numberOfBricks: 3,
    randomX: 0,
    randomH: 0,
    maxBricksY: 0,
    minBricksY: 0,
    maxBricksX: 0,
    minBricksX: 0,
    brickWidth: 35,

    init: function () {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.start();
    },

    start: function () {
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++;

            this.clear();
            this.drawAll();
            this.moveAll();
            this.clearObstacles()
             if(this.framesCounter % 70 === 0) this.generateObstacles()
            // if(this.framesCounter % 100 === 0) this.score++;
            // if(this.isCollision()) this.gameOver()
            if(this.framesCounter > 1000) this.framesCounter = 0;
        }, 1000 / this.fps)
    },

    

    reset: function () {
        this.background = new Background(this.ctx, this.width, this.height);
        this.background2 = new Background2(this.ctx, this.width, this.height);
        this.bricks = [];
        this.player = new Player(this.ctx, 80, 200, './img/hipster2.png', this.width, this.height, this.playerKeys);
        this.obstacles = [];
        //ScoreBoard.init(this.ctx, this.score)
        this.maxBricksY = this.height * .80 //a mayor valor, mas bajo
        this.minBricksY = this.maxBricksY - this.height * 0.25
        this.maxBricksX = this.width - this.brickWidth
        this.minBricksX = this.width * 0.5 //Para que salgan de la mitad de la pantalla hacia final de la pantalla
        this.generateBricks();
    },

    clear: function () {

        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll: function () {
        this.background.draw();
        this.background2.draw()
        this.player.draw(this.framesCounter);
        this.bricks.forEach(brick => brick.draw())
        this.obstacles.forEach(obstacle => obstacle.draw())
        //ScoreBoard.draw(this.score)
    },

    moveAll: function () {
        this.background.move()
        this.background2.move()
        this.player.move()
        this.obstacles.forEach(obstacle => obstacle.move())
    },

    generateBricks: function () {
        let spaceX = (this.maxBricksX - this.minBricksX) / this.numberOfBricks
        let spaceY = (this.maxBricksY - this.minBricksY) / this.numberOfBricks
        for (let i = 0; i < this.numberOfBricks; i++) {
            this.randomX = Math.floor(Math.random()*spaceX)+this.minBricksX + spaceX * i
            this.randomY = Math.floor(Math.random()*spaceY)+this.minBricksY + spaceY * i
            
            this.bricks.push(new Brick(this.ctx, this.brickWidth, -this.randomY/2, this.randomX, this.height * 0.94 ))
        }
    },

    generateObstacles: function() {
        this.obstacles.push(new Obstacle(this.ctx,'./img/barba.jpg', 20, 20, this.width, this.height))
      },


    gameOver: function () {

    },

    isCollision: function () {
        return this.obstacles.some(obs => (this.player.posX + this.player.width > obs.posX && obs.posX + obs.width > this.player.posX && this.player.posY + this.player.height > obs.posY && obs.posY + obs.height > this.player.posY ))

    },

    clearBricks: function () {
        //this.bricks = this.bricks.filter(element => (element.posX = 0))
    },
    clearObstacles: function() {
        this.obstacles = this.obstacles.filter(obstacle => (obstacle.posX >= 0))
      }

}