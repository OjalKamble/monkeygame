var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstaclesGroup;
var survialTime;
var PLAY=1;
var score;
var END=0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,400);
  
  //create sprites
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  //console.log(ground.x);
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  
  //calling the function
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  
  
}


function draw() {
background("green");
  
  
    //reset the ground
  if (ground.x > 0){
    ground.x = ground.width/2;
  }
  //to jump the monkey when space key is pressed
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
  //adding gravity
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  
  //#collide
  monkey.collide(ground);
  
 //display score 
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SURVIVALTIME : "+survivalTime,100,50);
  
  
  FoodGroup();
  ObstructionGroup();
  
drawSprites();  
}

function FoodGroup(){
  if(frameCount%80===0){
    var banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -5;
    banana.addImage(bananaImage);
    banana.scale = 0.10;
    banana.lifetime=120;
    bananaGroup.add(banana);
   }
}

function ObstructionGroup(){
  if(frameCount%60===0){
    var obstacles = createSprite(400,319,20,20);
    obstacles.velocityX=-6;
    obstacles.addImage(obstacleImage);
    obstacles.scale=0.14;
    obstacles.lifetime=120;
    obstaclesGroup.add(obstacles);
  }
}