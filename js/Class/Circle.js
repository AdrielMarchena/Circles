const { detectColision,warpMode } = require('../globalConfigs');
const { ctx,canvas } = require('../canvas/canvasSetup');
const { mouseTrack, mouse } = require('../events/mouseTrack');

mouseTrack;
module.exports = class Circle{
    constructor(id,x,y,dx,dy,radius,color,maxRadius){
        this.id = id;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.maxRadius = maxRadius;
        this.minRadius = radius;
    }
    draw(){

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius, 0 , Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

    }
    update(){
        //Colisions
        if(detectColision){
            if(this.x + this.radius > canvas.width || this.x - this.radius < 0)
                this.dx = -this.dx;
            if(this.y + this.radius > canvas.height || this.y - this.radius < 0)
                this.dy = -this.dy;
        }
        
        //Make balls warp in middle if they pass to much of the screen
        if(warpMode){
            if(this.x + this.radius-10 > canvas.width || this.x - this.radius+10 < 0){
                this.x = innerWidth/2;
                this.y = innerHeight/2;
            }   
            if(this.y + this.radius-10 > canvas.height || this.y - this.radius+10 < 0){
                this.x = innerWidth/2;
                this.y = innerHeight/2;
            }
        }

        this.x += this.dx;
        this.y += this.dy;

        //Interativity
        if(mouse.x - this.x<50 && mouse.x - this.x > -50 && 
            mouse.y - this.y<50 && mouse.y - this.y>-50){
                if(this.radius < this.maxRadius)
                    this.radius += 1;
        }else if(this.radius > this.minRadius){
            this.radius -=1;
        }
       
    }
}