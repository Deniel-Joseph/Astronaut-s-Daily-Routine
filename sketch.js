var bath,bath_img;
var brush,brush_img;
var drink,drink_img;
var eat,eat_img;
var gym,gym_img;
var iss,iss_img;
var move,move_img;
var sleep,sleep_img;

function preload(){
 
 // Animations 
  bath_img = loadAnimation ("bath1.png,bath2.png");
  drink_img = loadAnimation ("drink1.png,drink2.png");
  eat_img = loadAnimation ("eat1.png,eat2.png");
  gym_img = loadAnimation ("gym1.png,gym2.png,gym3.png,gym4.png");
  move_img = loadAnimation ("move1.png,move2.png");

// Images  
  brush_img = loadImage ("brush.png");
  iss_img = loadImage ("iss.png");
  sleep_img = loadImage ("sleep.png");
}

function setup() {
  createCanvas(800,400);

// Animations
  bath = createSprite(400, 200);
  bath.addAnimation("bathing",bath_img);

  drink = createSprite(700,300);
  drink.addAnimation("drinking",drink_img);

  eat = createSprite(650,250);
  eat.addAnimation("eating",eat_img);

  gym = createSprite(600,200);
  gym.addAnimation("gyming",gym_img);

  move = createSprite(550,150);
  move.addAnimation("moving",move_img);
 
// Images
  brush = createSprite(750,350);
  brush.addImage(brush_img);

  sleep = createSprite(500,100);
  sleep.addImage(sleep_img);

  iss = createSprite(400,200);
  iss.addImage(iss_img);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}