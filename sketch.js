var player;
var gameState = 0;
var speedlevel  = 100;
var exponentialIncreaseRate = 0;
var obstacleGroup;
var life = 100;
var playeri;
var asteroid1i;
var asteroid2i;
var asteroid3i;
function preload(){
  playeri = loadImage("car1.png");
  asteroid2i = loadImage("asteroid2.jpg");
}
function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200 ,50 ,100);
  player.addImage("car1", playeri)
  obstacleGroup = createGroup();
} 
function draw() {
  background(255, 255, 255, 51);  
  exponentialIncreaseRate += 0.7;
  speedlevel -= exponentialIncreaseRate;
  if (obstacleGroup.isTouching(player)){
    life -= 1;
  }
  if (life > 0){
  drawSprites(); 
  giveControls();
  spawnEnemies();
  textFont("impact");
  textStyle("bold");
  textSize(30);
  text("life : " + life, 100, 100);
  }else{
    textFont("impact");
    textStyle("bold");
    textSize(120);
    fill(0, 144, 255);
    text("You are out !!!", 0, 200);
  }

}

function giveControls(){
  if (keyDown("RIGHT_ARROW")) {
    player.velocityX = 10;
  }else if (keyDown("LEFT_ARROW")) {
    player.velocityX = -10;
  }else{
    player.velocityX = 0;
  }
}

function spawnEnemies(){
  if (World.frameCount % 10 == 0){
    var cacti = createSprite(random(0, 800), 0, 10, 10);
    cacti.velocityY = 5;
    obstacleGroup.add(cacti);
    let randnum = random(0, 3);
    cacti.addImage("asteroid2.jpg", asteroid2i);
  }
}