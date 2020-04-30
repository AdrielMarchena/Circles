let mouse = {
    x:undefined,
    y:undefined
}
let mouseTrack = window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

module.exports = { mouseTrack, mouse }