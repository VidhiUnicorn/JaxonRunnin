var Jaxon, jaxon_sprite
var road,road_sprite
var iv1 , iv2

function preload(){
  road = loadImage("path.png");
  Jaxon = loadAnimation("Runner-1.png", "Runner-2.png");


}

function setup(){
  createCanvas(400,400);
  road_sprite = createSprite(200,200);
  road_sprite.addImage(road);
  road_sprite.velocityY = 3;
  road_sprite.scale = 1.2;

  
  jaxon_sprite  = createSprite(200,300)
  jaxon_sprite.addAnimation("like",Jaxon);
  jaxon_sprite.scale =0.09;

  iv1 = createSprite(370,200,20,400);
  iv1.visible = false;

  iv2 = createSprite(35,200,20,400);
  iv2.visible = false; 
}

function draw() {
  background(0);

  if (road_sprite.y > 350){
    road_sprite.y = 200;
  }

  jaxon_sprite.x = mouseX; 
  jaxon_sprite.collide(iv1);
  jaxon_sprite.collide(iv2);

  drawSprites();
}
