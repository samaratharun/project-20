var r,g,b;




function setup() {
  createCanvas(displayWidth,displayHeight);
  text("move the ball to change colour",200,200);
  ellipse(mouseX,250,30,30);
}

function draw() {
  text("move the ball to change colour",200,200);
  ellipse(mouseX,250,30,30);
  drawSprites();
}
function mouseMoved(){
  r=Math.round(random(0,255));
  g=Math.round(random(0,255));
  b=Math.round(random(0,255));
  background(r,g,b);  
}