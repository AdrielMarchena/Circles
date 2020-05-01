let detectColision = true; /* Allow the colision detection */
let warpMode = true;        /* Allow warp mode for balls */
let mustResize = true;      /* Allow canvas resize when screen is resize */
let mustClean = true;       /* Allow the canvas to clean each frame*/
let ballsNumber = 200;     /* Especify the number of balls to be created */

let colorArray = [         /*Some color for the balls */
    '#0A1747',
    '#0029FA',
    '#8D07F6',
    '#FFFF05',
    '#D4DBF5',
];

module.exports = {
    detectColision, 
    warpMode,       
    mustResize,    
    mustClean,      
    ballsNumber,
    colorArray
};   