var player;
var food;
var score = 0;
var player1,player2,player3,player4;
var foodImage,snakeImage;

function preload() 
{
  foodImage = loadImage("foodImage.jpg");
  snakeImage = loadImage("snakeImage.png");

}
function setup() 
{
  createCanvas(displayWidth-20,displayHeight-20);

  frameRate(80);
  h = 10;
  player = createSprite(750,400,10,h);
  player.addImage("snake Image",snakeImage);
  player.shapeColor = "red";
  player.scale = 0.4;
  
  x = random(50,700);
  y = random(50,700);

  food = createSprite(x,y,10,10);
  food.shapeColor = "white";
  food.addImage("burger image",foodImage);
  food.scale = 0.4;

  console.log("this is X position"+x);
  console.log("this is Y position" +y);
}

function draw() 
{
  background(255);

  textSize(20);

  
  fill(255);

  /*if (score === 2 || score === 4) {
    player2 = createSprite(player.x,player.y,10,10);
    player2.shapeColor = "red";
  }
  if (score === 5 || score === 7) {
    player3 = createSprite(player.x,player.y,10,10);
    player3.shapeColor = "red";
  }
  if (score === 6 || score === 8) {
    player4 = createSprite(player.x,player.y,10,10);
    player4.shapeColor = "red";
  }
*/
  push();
  fill(0,0,0);
  textSize(30);
  text( "Score : "+score,1000,player.y-200);

  pop();
  camera.position.x = displayHeight/2;
  camera.position.y = player.y;
  if(keyDown("UP_ARROW"))
  {
    player.velocityY=-3;
  } else 
  {
    player.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")) 
  {
    player.velocityY = 3;
  } 
  if(keyDown("LEFT_ARROW")) 
  {
    player.velocityX = -3;
  } else 
  {
    player.velocityX = 0;
  }
  if(keyDown("RIGHT_ARROW")) 
  {
    player.velocityX = 3;
  } 
   if(player.isTouching(food)) 
  {
    food.x = random(50,700);
    food.y = random(50,700);
    score = score +1;
    player.height = player.height+100;
  }
 
  drawSprites();
}
