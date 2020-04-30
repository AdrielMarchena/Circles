const { canvas } = require('./canvasSetup')

let resizeCanvas = function(x,y){
    canvas.width = x;
    canvas.height = y;
}

module.exports = { resizeCanvas };