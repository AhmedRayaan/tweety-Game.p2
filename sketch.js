var bg,bgImg;
var player, shooterImg, shooter_shooting;
var tweety,tweetyGroup,tweetyImg;
var heart1,heart2,heart3
var heart1Img,heart2Img,heart3Img;

function preload(){
  
  heart1Img=loadImage("assets/heart_1.png")
  heart2Img=loadImage("assets/heart_2.png")
  heart3Img=loadImage("assets/heart_3.png")

  shooterImg = loadImage("assets/elmer_fudd.png")
  shooter_shooting = loadImage("assets/elmer_fudd_shooting.png")

  bgImg = loadImage("assets/park.jpg")

  tweetyImg= loadImage("assets/tweety.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1780, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.4
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

tweetyGroup=new Group();

heart1=createSprite(displayWidth-500,40,20,20)
heart1.visible=false
heart1.addImage(heart1Img)
heart1.scale=0.4

heart2=createSprite(displayWidth-500,40,20,20)
heart2.visible=false
heart2.addImage(heart2Img)
heart2.scale=0.4

heart3=createSprite(displayWidth-500,40,20,20)
heart3.addImage(heart3Img)
heart3.scale=0.4



}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
 player.x = player.x-30
}
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(tweetyGroup.isTouching(player)){

for(var i=0;i<tweetyGroup.length;i++){
  if(tweetyGroup[i].isTouching(player)){
    tweetyGroup[i].destroy()
  }
}
}

enemy();

drawSprites();

}

function enemy(){
  if(frameCount%50===0){

   tweety= createSprite(random(1600,1100),random(100,500),40,40)

  
  tweety.addImage(tweetyImg)
  tweety.scale=0.32
  tweety.velocityX=-3
  tweety.debug=true
  tweety.setCollider("rectangle",0,0,300,300)

  tweety.lifetime= 400
  tweetyGroup.add(tweety);

  }

}
