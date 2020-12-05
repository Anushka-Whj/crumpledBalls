
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
  
	  ground=new Ground(600,390,1200,20);
	  paper=new Paper(600,580,20);

}


function draw() {
	background("skyBlue");  
	rectMode(CENTER);
  
	Engine.update(engine)
  
	
ground.display();
paper.display();

 
}



