var ball, blower, blowerMouth;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

button = createButton("Click to Blow");
button.position(width / 2, height - 100);
button.class("blowButton");
button.mousePressed(blow);

}

function draw() {
  background(255,255,255); 
  
  ball.show();
  blower.show();
  blowerMouth.show();

  drawSprites();
}


function blow(){
  Matter.Body.applyForce(ball.body, { x:0, y:0}, { x:0, y:0.05});
}