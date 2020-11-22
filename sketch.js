var tower,towerImg
var door,doorImg
var climber,climberImg
var doorsGroup,climbersGroup
var ghost,ghostImg
var invisibleBlock,invisibleBlockGroup
var gameState="play"
var spookySound










function preload(){
  towerImg=loadImage("tower.png")
  doorImg=loadImage("alex castle.png")
  climberImg=loadImage("climber.png")
  ghostImg=loadImage("alex naruto.png")
  spookySound=loadSound("spooky.wav")
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
function setup(){
  createCanvas(600,600);
  spookySound.loop();
 tower=createSprite(300,300,100,100)
 tower.addImage(towerImg)
  tower.velocityY=2
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImg)
  ghost.scale=0.1
  
}









function draw(){
  background(0)
  if (gameState==="play"){
    

   if (tower.y > 400){
     tower.y=300;
     
    }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3;
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3;
  }
   if(keyDown("space")){
    ghost.velocityY=-5
  }
 ghost.velocityY=ghost.velocityY+0.8
  if (climbersGroup.isTouching(ghost)){
    ghost.velocityY=0
  }
  if (invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end"
  }
  
 
  
 spawnDoors(); 
  
  drawSprites();
  }
 if(gameState==="end"){
   fill("yellow")
   textSize(30)
   text("Game Over",230,250)
 }
  
  
  
  
  
  
  
}

function spawnDoors(){
if (frameCount % 240 === 0){
  door=createSprite(200,-50) 
  door.addImage(doorImg)
  door.velocityY =2
  door.x=Math.round(random(120,450))
  door.scale=0.3
  door.lifetime = 600;
  doorsGroup.add(door)
  
  climber=createSprite(200,10)
  climber.addImage(climberImg)
  climber.velocityY=2
  climber.x=door.x
  climber.lifetime=600;
  climbersGroup.add(climber)
  
  invisibleBlock=createSprite(200,15,100,100)
  invisibleBlock.visible=false
  invisibleBlock.width=climber.width
  invisibleBlock.height=2
  invisibleBlock.velocityY=1
  invisibleBlock.x=door.x
  invisibleBlock.lifetime=600
  invisibleBlockGroup.add(invisibleBlock)
  
   ghost.depth=door.depth;
   ghost.depth+=1
}
  
  
}





































































