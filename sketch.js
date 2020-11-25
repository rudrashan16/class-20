var fixRect, moveRect;

function setup() {
  createCanvas(1200,1200);
  
  fixRect = createSprite(200, 200, 50, 80);
  fixRect.shapeColor =  "yellow";
  moveRect = createSprite(400,200,80,30);
  moveRect.shapeColor =  "yellow";
}

function draw() {
  background(0);  
 
  moveRect.x = World.mouseX;
  moveRect.y = World.mouseY;

 if(moveRect.x - fixRect.x < fixRect.width/2+moveRect.width/2
  && fixRect.x - moveRect.x< fixRect.width/2+moveRect.width/2 &&
  moveRect.y - fixRect.y < fixRect.height/2+moveRect.height/2
  && fixRect.y - moveRect.y< fixRect.height/2+moveRect.height/2){

    
   moveRect.shapeColor = "red";
   fixRect.shapeColor = "red";
 }
  else {
  moveRect.shapeColor = "yellow";
  fixRect.shapeColor = "yellow";
 }
  drawSprites();
}