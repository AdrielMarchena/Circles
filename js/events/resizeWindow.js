const { resizeCanvas } = require('../canvas/canvasManipulation');

/**
 * Event that listen to the resize of the window
 * then resize the canvas to the exact same size 
 */
let resizeWindow = window.addEventListener('resize',function(){
    resizeCanvas(window.innerWidth,window.innerHeight);
});

module.exports = { resizeWindow };

