var player,playerAnim;
var ground;
var slab1,slab2,slab3,slab4,slab5,slab6;
var s1,s2,s3,s4,s5,s6;
var score;
var coins,coinAnim;
var bg,background,bg3;
var gameState = "l1";
var gift1,gift2,gift3;
var giftGroup;
var ghostGroup;
var ghostImg,ghostAnim;

function preload (){
 coinAnim = loadAnimation("coin3-removebg-preview-removebg-preview.png","coin3-removebg-preview-removebg-preview (1).png","coin3-removebg-preview-removebg-preview (2).png");
  bg = loadImage("game image background.jpg");
  
 bg3 = loadImage("GhostBackground.jpg");
  
  ghostAnim = loadAnimation("Ghost1.png","Ghost2.png","Ghost3.png");
  playerAnim = loadAnimation("P1.png","P2.png","P3.png");
  
  gift1 = loadImage("coin3-removebg-preview-removebg-preview.png");
  gift2 = loadImage("coin3-removebg-preview-removebg-preview.png");
  gift3 = loadImage("coin3-removebg-preview-removebg-preview.png");
  
}
function setup(){
  createCanvas(600,400);
  score = 0;
  
  giftGroup = new Group();
  ghostGroup = new Group();
  
  background = createSprite(300,300);
  background.addImage("b1",bg);
  background.addImage("b3",bg3);
  
  
  player = createSprite(50,370,20,20);
  player.addAnimation("p",playerAnim)
  player.scale = 0.7;
  player.debug = true;
  player.setCollider("rectangle",-30,0,20,30)
  
  edges = createEdgeSprites();
  
  ground = createSprite(300,397,620,5);
  ground.shapeColor = "brown";
  
  slab1 = createSprite(130,330,80,10);
  slab2 = createSprite(300,330,80,10);
  slab3 = createSprite(465,330,80,10);
  slab4 = createSprite(370,250,80,10);
  slab5 = createSprite(210,250,80,10);
  slab6 = createSprite(290,170,80,10);
  
  
  
  coin1 = createSprite(130,310,10,10)
  coin1.setCollider("circle",0,0,10);
  
  coin1.addAnimation("c1",coinAnim);
  coin1.scale = 0.3;
  
  
  
  coin2 = createSprite(300,310,10,10)
  coin2.setCollider("circle",0,0,10);
  coin2.addAnimation("c1",coinAnim);
  coin2.scale = 0.3;
  
  coin3 = createSprite(465,310,10,10)
  coin3.setCollider("circle",0,0,10);
  coin3.addAnimation("c1",coinAnim);
  coin3.scale = 0.3;
  
  coin4 = createSprite(370,230,10,10)
  coin4.setCollider("circle",0,0,10);
  coin4.addAnimation("c1",coinAnim);
  coin4.scale = 0.3;
  
  coin5 = createSprite(210,230,10,10);
  coin5.setCollider("circle",0,0,10);
  coin5.addAnimation("c1",coinAnim);
  coin5.scale = 0.3;
  
  coin6 = createSprite(290,150,10,10);
  coin6.setCollider("circle",0,0,10);
  coin6.addAnimation("c1",coinAnim);
  coin6.scale = 0.3;
  

  
  s1 = createSprite(130,325,80,5);
  s1.visible = false;
  
  s2 = createSprite(300,325,80,5);
  s2.visible = false;
  
  s3 = createSprite(465,325,80,5);
  s3.visible = false;
  
  s4 = createSprite(370,245,80,5);
  s4.visible = false;
  
  s5 = createSprite(210,245,80,5);
  s5.visible = false;
  
  s6 = createSprite(290,165,80,5);
  s6.visible = false;
  
  slab1.shapeColor="black";
  slab2.shapeColor="black";
  slab3.shapeColor="black";
  slab4.shapeColor="black";
  slab5.shapeColor="black";
  slab6.shapeColor="black";
  
}

function draw() {
  
text(mouseX+","+mouseY,mouseX,mouseY)
  textSize(20);
  fill("yellow")
  if(gameState==="l1"){
     player.collide(ground);
    
if(player.isTouching(coin1)){
     coin1.destroy();
     score = score+100;
 }
  if(player.isTouching(coin2)){
     coin2.destroy();
     score = score+100;
 }
  if(player.isTouching(coin3)){
     coin3.destroy();
     score = score+100;
 }
  
  if(player.isTouching(coin4)){
     coin4.destroy();
     score = score+100;
 }
  if(player.isTouching(coin5)){
     coin5.destroy();
     score = score+100;
 }
  if(player.isTouching(coin6)){
     coin6.destroy();
     score = score+100;
 }
 if(player.isTouching(s1)){
    player.collide(slab1);
  }
  if(player.isTouching(s2)){
    player.collide(slab2);
  }
  if(player.isTouching(s3)){
    player.collide(slab3);
  }
  if(player.isTouching(s4)){
    player.collide(slab4);
  }
  if(player.isTouching(s5)){
    player.collide(slab5);
  }
  if(player.isTouching(s6)){
    player.collide(slab6);
  }
    if(score===600){
      gameState = "l2";
    }
  }
    
  if(keyDown("space")){
    player.velocityY= -10;
    
  }
  
  
  player.velocityY=player.velocityY+0.4;
  
  if(keyDown(LEFT_ARROW)){
    player.x= player.x-5;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5;
  }
  
  if(gameState==="l2"){
    background.changeAnimation("b3",bg3);
    background.scale = 2.2;
    background.velocityX=-3;
    if(background.x<0){
      background.x=300;
    }
    ground.visible = false;
    var slider = createSprite(200,390,80,10);
    slider.shapeColor = "blue";
    slider.velocityX=3;
    slider.bounceOff(edges[1]);
    
    slab1.visible = false;
    slab2.visible = false;
    slab3.visible = false;
    slab4.visible = false;
    slab5.visible = false;
    slab6.visible = false;
    
    gifts();
    ghosts();
    
    
    if(giftGroup.isTouching(player)){
      score = score+100;
      giftGroup.destroyEach();
      
    }
    if(ghostGroup.isTouching(player)){
      score = score-200;
      ghostGroup.destroyEach(); 
    }
    
  }
  
  
  drawSprites();
  text("Coins:"+score ,500,50);
}

function gifts(){
  if(World.frameCount%90===0){
    var gift = createSprite(600,200,10,10);
    gift.velocityX=-10;
    gift.y = Math.round(random(100,300));
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: gift.addImage(gift1);
        break;
        case 2 : gift.addImage(gift2);
        break;
        case 3 : gift.addImage(gift3);
        break;
        
    }
    giftGroup.add(gift);
    gift.scale = 0.5;
  }
  
}
function ghosts (){
  if(World.frameCount%110===0){
    var ghost = createSprite(600,200,10,10);
    ghost.velocityX=-2;
    ghost.y = Math.round(random(0,400));
    var rand = Math.round(random(1,3));
    ghost.addAnimation("ghostAnim",ghostAnim);
    ghost.scale = 0.2;
    
    
    ghostGroup.add(ghost);
  }
  
}