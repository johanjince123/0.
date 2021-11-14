const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;
var ballObject, blowerObject, blowerMouthObject;
var button;

function setup() {

  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  ballObject = new Ball(width/2 + 100 , 0, 60, 60);
  blowerObject = new Blower(width/2 + 100, height/2, 120, 120);
  blowerMouthObject = new BlowerMouth(width/2-59, height/2 + 50, 200, 20);

  button = createButton("Click here to blow");
  button.position(width/2, height-100);
  button.mousePressed(blow);

}

function draw() {
  
  Engine.update(engine);
  background(0);  
  ballObject.display();
  blowerObject.display();
  blowerMouthObject.display();

  textSize(50);
  fill ("pink")
  text("BLOWER PIPE", width/2 - 150, 50);
  
}

function blow(){

  Matter.Body.applyForce(ballObject.body, {x : 0, y : 0}, { x : -0.01, y : -0.02});

}