
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var box1,box2,box3;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);
    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown");
	
	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box1(600,623);
	box2 = new Box1(740,623);
	box3 = new Box2(670,653);
	
	ball1 = new Ball(100,623,40,40);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  

	Engine.run(engine);
	
	
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball1.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});

	}
}



