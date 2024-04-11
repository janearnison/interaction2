//Set aside computer memory to store the sound
//load sound into memory
// play sound when mouse is clicked in browser 
// stop sound when mouse click ends


let watersound; 
let shapeColor;
let addEventListener;
let value = 0; 

  
function preload(){

    watersound = loadSound('water1.mp3')
    
}

function setup(){
  
 let cnv = createCanvas(400, 400);
  
  background = color(245, 10, 90);
  
  cnv.touchmoved(randomColor); 
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

function touchStarted() {

    shapeColor = color(random(255), random(255), random(255) );
    watersound.play();
 
}

function randomColor(){

  let c = randomColor;
}