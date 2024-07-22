const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var rock_img;
var shot=false;
function preload(){
  rock_img=loadImage("rock.png");
  
}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  rock_img.resize(40,40)
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  
  ball =new Ball(50,200,20);
  slingShot = new Slingshot(ball.body,{x:100,y:200});

}

function draw() {
  background(56,44,44); 
 
  
  // write image() to display the polygon image 
  //use the same x and y position as ball
  


  stroke(0,0,0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  text("press R to grab the stone again",100,60);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(0,0,0);
  
  
  block1.display(0,50,255);
  block2.display(0,50,255);
  block3.display(0,50,255);
  block4.display(0,50,255);
  block5.display(0,50,255);
  block6.display(0,50,255);
  block7.display(0,50,255);
  
  block8.display(255,50,50);
  block9.display(255,50,50);
  block10.display(255,50,50);
  block11.display(255,50,50);
  block12.display(255,50,50);

  block13.display(0,100,255);
  block14.display(0,100,255);
  block15.display(0,100,255);
  
  block16.display(50,50,50);
  
  blocks1.display(0,50,255);
  blocks2.display(0,50,255);
  blocks3.display(0,50,255);
  blocks4.display(0,50,255);
  blocks5.display(0,50,255);
  blocks6.display(0,100,255);
  blocks7.display(0,100,255);
  blocks8.display(0,100,255);
  
  blocks9.display(255,50,50);
  fill("gold");

ball.display()
  
  slingShot.display();
}
function mouseDragged(){
 if(ball.shot==='done'===false){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  ball.shot = 'being done'
  }
}
function mouseReleased(){
if(ball.shot==='being done'){
  slingShot.fly();
  ball.shot = 'done'
}
}
function keyPressed(){
  if(key ==='r'){
    Matter.Body.setPosition(ball.body,{x:50,y:200});
    Matter.Body.setVelocity(ball.body,{x:0,y:0});
    slingShot.reset()
    ball.shot='false'
  }
}