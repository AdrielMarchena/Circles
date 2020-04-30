let canvas;
let ctx;

let canvasSetup = function(){
    canvas = document.getElementById('viewport');
    //Check if canvas exist in html document
    //If not, create one
    if(canvas == undefined || canvas == null){
        canvas = document.createElement('canvas');
        canvas.id = 'viewport';
        document.body.insertAdjacentElement('afterbegin',canvas);
    }
    //Get the context
    ctx = canvas.getContext('2d');
}

canvasSetup();

module.exports = { canvas, ctx };