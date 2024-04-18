
const canvas = document.getElemendById('canvas');
const ctx = canvas.getContext ('2d'); 


canvas.addEventListener("pointerdown", e =>{
  console.log(e)
})


function setup() {
  // set canvas to window size
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(180,17,240);

  fill('magenta');

  // for each touch, draw an ellipse at its location.
  // touches are stored in array.
  for (var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 50, 50);
  }
}

// do this prevent default touch interaction
function mousePressed() {
  return false;
}

document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
});


var coordX = 0;
var coordY = 0;

window.onmousemove = coordHandler;
window.ontouchstart = coordHandler;
window.ontouchmove = coordHandler;

function coordHandler(event) {
    switch (event.type) {
        case 'mousemove':
            coordX = event.clientX;
            coordY = event.clientY;
            break;
        case 'touchstart':
        case 'touchmove':
            var firstTouch = event.touches[0];
            coordX = firstTouch.clientX;
            coordY = firstTouch.clientY;
            break;
    }
}