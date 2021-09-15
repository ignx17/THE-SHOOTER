var mainPlane1,mainPlane2;
var planeImg;
var bullet,bullImg;
var bulletImg;

var enemy, enemy1;
var enemyImg;
var bullet1,bulletImg;


var bg;

var ref1, ref2;


var scoreboard;
var score=0; 

var box, boxImg;

var bulletD1,bulletD2;

function preload(){

  bg=loadImage("sky.png");

planeImg= loadImage("plane.png");
bulletImg= loadImage("bullet.png");

enemyImg= loadImage("Opponent.png");
//bulImg= loadImage("bul.png");

boxImg= loadImage("box.png");
}

function setup() {

  createCanvas(1200,600);

  fill ("red");
  textSize(25);
  text("You have one try, can you shoot the box out??",600, 100);


 mainPlane1=createSprite(970, 150, 50, 50);
 mainPlane1.addImage(planeImg);
 mainPlane1.scale= 0.25;

 mainPlane2=createSprite(970, 360, 50, 50);
 mainPlane2.addImage(planeImg);
 mainPlane2.scale= 0.25;

 enemy=createSprite(230, 220, 50, 50);
 enemy.velocityY= 10;
 enemy.addImage(enemyImg);
 enemy.scale= 0.25;

 enemy1=createSprite(230, 520, 50, 50);
 enemy1.velocityY= -10;
 enemy1.addImage(enemyImg);
 enemy1.scale= 0.25;

 ref1= createSprite(230, 40, 600, 3);
 ref1.visible= false;
 ref2= createSprite(230, 560, 600, 3);
 ref2.visible= false;

 box= createSprite(50, 300, 10, 10);
 box.addImage(boxImg);
 box.scale= 0.05;
 box.velocityY=30; 

 bulletD1= createSprite(970, 220, 55, 10);

 bulletD1.visible= false;


 bulletD2= createSprite(970, 430, 55, 10);

 bulletD2.visible= false;
 

}

function draw() {

  background(bg);

  if (enemy.isTouching(ref2)){
    enemy.velocityY= -25;
  }
  if (enemy.isTouching(ref1)){
    enemy.velocityY= 20;
  }
  if (enemy1.isTouching(ref2)){
    enemy1.velocityY= -25;
  }
 if(enemy1.isTouching(ref1)){
   enemy1.velocityY= 20;
 }

 if(box.isTouching(ref1)){
  box.velocityY= 40;
}
if(box.isTouching(ref2)){
  box.velocityY= -40;
}
   
 
  if (keyDown("LEFT_ARROW")){

    bulletD1.velocityX=-40; 

    bullet = createSprite(970, 220, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale= 0.03;

    bullet.velocityX= -40;

   
  }

  
  if (keyDown("A")){

    bulletD2.velocityX=-40;

    bullet = createSprite(970, 430, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale= 0.03;

    bullet.velocityX= -40;

    if (bullet.isTouching(enemy)){
      enemy.x=-1000;
    }

  }

 if (bulletD1.isTouching(enemy)){
  enemy.destroy() ;
  bulletD1.destroy();
 }
 if (bulletD1.isTouching(enemy1)){
  enemy.destroy() ;
  bulletD1.destroy();
 }
 if (bulletD2.isTouching(enemy)){
  enemy.destroy() ;
  bulletD2.destroy();
 }
 if (bulletD2.isTouching(enemy1)){
  enemy.destroy() ;
  bulletD2.destroy();
 }
 if (bulletD2.isTouching(box)){
  box.destroy() ;
  bulletD2.destroy();
 }
 if (bulletD1.isTouching(box)){
  box.destroy() ;
  bulletD1.destroy();
 }
 
 
  
  
   
 

  drawSprites();
} 
// Ask how to spawn airplanes.
 // Ask how to shoot bullets with space inbetween them.
// Add if bullet touches airplane.
// Add scorecard.
// Increase the number of Enemy planes. 
