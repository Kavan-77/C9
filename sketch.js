var box;
function setup() {
  box = createSprite(200,200,100,200)
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) 
  {
  box.position.x = box.position.x+5  
  }
  if (keyIsDown(LEFT_ARROW))
  {
   box.position.x = box.position.x-5
  }
drawSprites();
}




