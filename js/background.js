class Background {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.image = new Image();
        this.image.src = '../img/ladrillos.png';//fondo de ladrillos

        this.posX = 0;
        this.posY = 0;

        this.vx = 8; //velocidad del eje X a la que se desplazará el fondo
    }

    draw(){
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.ctx.drawImage(this.image, this.posX, (this.posY + this.height),this.width, this.height)//Esta segunda imágen es para que aparezca a continuación de la otra y haga el efecto de movimiento continuo.
    }

    move() {
        this.posY -= this.vx

        if(this.posY <= -this.height) this.posY = 0;
    }
}