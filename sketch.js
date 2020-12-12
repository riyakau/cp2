
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, side,side1,side2,ground,bin,img;
function preload()
{
	img=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bin=createSprite(635,570,200);
bin.addImage(img);
bin.scale = 0.7;
bin.depth = +1;
	//Create the Bodies Here.
paper = new Paper(100,600,70);


side = new Dustbin(560, 555, 20, 200);
side1 = new Dustbin(635, 660,150,20);
side2 = new Dustbin(710, 555, 20, 200);
ground = new Ground(400, 680, 800, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);
  

ground.display();
paper. display();
side1.display();
side.display();

side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:80,y:-145})
	}
}

