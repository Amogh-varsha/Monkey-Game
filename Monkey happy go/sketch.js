
var monkey , monkey_running , ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
 
}



function setup() {
 createCanvas (600,300)  

  monkey = createSprite(80,250,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  
  ground = createSprite(200,250,900,10)
  ground.velocityX = -4
  
  score = 0
 }


function draw() {
 background(600)
  
text("Score: "+ score,500,50)  
  
  text("SurvivalTime: " + survivalTime,400,50)
  
  
   ground.x=ground.width/2
  
  monkey.collide(ground)
  
  
    score = score + Math.round(getFrameRate()/60)
    survivalTime = Math.ceil(frameCount/frameRate())
  
  if(keyDown("space") && monkey.y>=200){
    monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
   
  spawnBanana();
  
  spawnObstacle();
  
  drawSprites();
}

function spawnBanana(){
  if (frameCount % 80 == 0){
    banana = createSprite(200,200,10,10)
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.y = Math.round(random(120,200))
    banana.velocityX = -4 
    banana.lifetime = 150
    FoodGroup.add(banana)
  }
}

function spawnObstacle(){
  if (frameCount % 300 == 0){
    obstacle = createSprite(200,225,10,10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -4
    obstacle.lifetime = 150
    obstacleGroup.add(obstacle)
  }
}




