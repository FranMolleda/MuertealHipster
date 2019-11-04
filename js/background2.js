class Background2 {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = '../img/stairs.png';//ventana

        this.posX = 0;
        this.posY = 0;

        this.vx = 3; //velocidad del eje X a la que se desplazará el fondo
    }

    draw(){
        this.ctx.drawImage(this.image, 100, this.posY, 80, 160);
        this.ctx.drawImage(this.image, 100, (this.posY - this.height),80, 160)//Esta segunda imágen es para que aparezca a continuación de la otra y haga el efecto de movimiento continuo.
    }

    move() {
       this.posY += this.vx

       if(this.posY >=  this.height) this.posY = 0;
       //this.posX -= this.vx;

       //if(this.posX <= -this.width) this.posX = 0;
    }
}