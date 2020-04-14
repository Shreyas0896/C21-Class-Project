var fixedRect, movingRect,gameObject,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject = createSprite(400,150,50,80)
  gameObject.shapeColor = "blue";
  gameObject.debug = true;
  o1 = createSprite(400,500,50,80);
  o1.shapeColor = "red";
  o1.debug = true;
  o2 = createSprite(400,650,50,80);
  o2.shapeColor = "purple";
  o2.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  o1.x = mouseX;
  o1.y = mouseY;
  
  bounceOff (movingRect,gameObject);

if(isTouching(o1,o2)) {
  o1.shapeColor = "pink";
  o2.velocityX = 9;

}

else {

o1.shapeColor = "red"
o2.velocityX = 0;

}

  drawSprites();
}


