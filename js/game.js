const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60, 
    framesCounter: 0,
    playerKeys: {
        TOP_KEY: 38, 
        DOWN_KEY: 40,
        SPACE_KEY: 32
    },
    score: 0,

    init: function(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = window.innerWidth;
        this.height= window.innerHeight;
        this.canvas.width=this.width;
        this.canvas.height = this.height;

        this.start();
    },

    start: function(){
        this.reset()
      this.interval = setInterval(() => {
         this.framesCounter++;

        this.clear();
        this.drawAll();
        this.moveAll();
        this.generateBricks();
        console.log(this.bricks)
       // this.clearObstacles()
       // if(this.framesCounter % 70 === 0) this.generateObstacles()
       // if(this.framesCounter % 100 === 0) this.score++;
       // if(this.isCollision()) this.gameOver()
       // if(this.framesCounter > 1000) this.framesCounter = 0;
      }, 1000/this.fps)
    },

    reset: function(){
        this.background = new Background(this.ctx, this.width, this.height);
        //this.background2 = new Background2(this.ctx, this.width/2, this.height);
        this.bricks = [];
        this.player = new Player(this.ctx, 50, 150, './img/hipster2.png', this.width,this.height, this.playerKeys);
        //this.obstacles = [];
        //ScoreBoard.init(this.ctx, this.score)
    },

    clear: function(){
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll: function(){
        this.background.draw();
        //this.background2.draw()
        this.player.draw(this.framesCounter);
        this.bricks.forEach(brick => brick.draw())
        //ScoreBoard.draw(this.score)
    },

    moveAll: function(){
        this.background.move()
        //this.background2.move()
        this.player.move()
        //this.obstacles.forEach(obstacle => obstacle.move())
    },

   generateBricks: function() {
            this.bricks.push(new Brick(this.ctx, 35, 280, this.width -50, this.height*0.935))
            this.bricks.push(new Brick(this.ctx, 35, 180, this.width -150, this.height*0.94))
            this.bricks.push(new Brick(this.ctx, 35, 150, this.width -300, this.height*0.94))
  },
  

    gameOver: function() {

    },

    isCollision: function (){

    },

    clearBricks: function(){
        this.bricks = this.bricks.filter(element => (element.posX >= 0))
    }
}

