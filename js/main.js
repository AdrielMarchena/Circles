//Import  the canvas and the context 
const { ctx,canvas, canvasSetup } = require('./canvas/canvasSetup');
//Import a function to resize the canvas
const { resizeCanvas } = require('./canvas/canvasManipulation');
//Some global configs to use
const { mustClean,ballsNumber } = require('./globalConfigs');
const { randomMe } = require('./utils/randomMe');
//Event import
const { resizeWindow } = require('./events/resizeWindow');
//Obj import
const Circle = require('./Class/Circle');


//Resize the canvas to the actual size of DOM window
resizeCanvas(window.innerWidth,window.innerHeight);
//Event to resize window
resizeWindow;

let circleArray = [];
//create the balls

let colorArray = [
    '#0A1747',
    '#0029FA',
    '#8D07F6',
    '#FFFF05',
    '#D4DBF5',
];

//A function to create some balls
function createBalls(){
    circleArray = [];
    for(let i=0;i<ballsNumber;i++){

        let radius = randomMe(2,10);
        let x = randomMe(0+radius,canvas.width-radius*2);
        let y = randomMe(0+radius,canvas.height-radius*2);
        let dx = randomMe(-1,1);
        let dy = randomMe(-1,1);
        let color = colorArray[Math.floor(randomMe(0,colorArray.length))];
        let maxRadius = randomMe(15,40);

        circleArray.push(new Circle(i,x,y,dx,dy,radius,color,maxRadius));
    }
}

//The loop
function loop(){
    requestAnimationFrame(loop);
    if(mustClean)
        ctx.clearRect(0,0,canvas.width,canvas.height);
    
        for(let i=0;i<circleArray.length;i++){
            let actualCircle = circleArray[i];

            actualCircle.draw();
            actualCircle.update();
        }
}
createBalls();
loop();
