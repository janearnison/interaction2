//Set aside computer memory to store the sound
//load sound into memory
// play sound when mouse is clicked in browser 
// stop sound when mouse click ends


let watersound; 
let shapeColor;
let addEventListener; 
  



function preload(){

    watersound = loadSound('water1.mp3')
    window.addEventListener("DOMContentLoaded", e =>{})
    
}
function setup(){
createCanvas(400, 400);
shapeColor = color(245, 10, 90);
  
}


function draw() {
  background(187, 227, 247);
  
	noStroke();
  fill(shapeColor);
  ellipse(width/2, height/2, 200,200);
  
}

function touchstart(){
  canvas.addEventListener("touchstart", e=> {
    ;[...e.changedTouches].forEach(touch => {
    const dot = canvas.createElement("div")
    dot.classList.add("dot")
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
    dot.id = touch.identifier
    canvas.body.append(dot)   
    shapeColor = color(random(255), random(255), random(255) );
    watersound.play(); 
    })
  })
  
}