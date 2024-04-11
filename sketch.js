//Set aside computer memory to store the sound
//load sound into memory
// play sound when mouse is clicked in browser 
// stop sound when mouse click ends

let watersound; 
let shapeColor;



function preload(){

    watersound = loadSound('water1.mp3')
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

function mousePressed(){
  shapeColor = color(random(255), random(255), random(255) );
   watersound.play();
  
}

function startup() {
  const el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart);
  el.addEventListener("touchend", handleEnd);
  el.addEventListener("touchcancel", handleCancel);
  el.addEventListener("touchmove", handleMove);
  log("Initialized.");
}

document.addEventListener("DOMContentLoaded", startup);

document.addEventListener("touchstart", e => {
  ;[...e.changedTouches].forEach(touch => {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
    dot.id = touch.identifier
    document.body.append(dot)   
    shapeColor = color(random(255), random(255), random(255) );
    watersound.play(); 
  })
})

document.addEventListener("touchmove", e => {
  ;[...e.changedTouches].forEach(touch => {
    const dot = document.getElementById(touch.identifer)
    dot.style.top = `${touch.pageY}px`
    dot.style.left = `${touch.pageX}px`
  }) 
})

document.addEventListener("touchend", e => {
;[...e.changedTouches].forEach(touch => {
  const dot = document.getElementById(touch.identifer)
  dot.remove()
  })
})