
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj4,bobObj5;
var roof, rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	//Create the Bodies Here.
	bobObj1 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	
	bobObj2 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);

	bobObj3 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	
	bobObj4 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObj5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);


	roof = new Roof(width/2,height/4,width/7,20);

	rope1 = new Rope(bobObj1.body,roof.body,-bobDiameter*2, 0)	
	rope2 = new Rope(bobObj2.body,roof.body,-bobDiameter*1, 0)
	rope3 = new Rope(bobObj3.body,roof.body,0, 0)
	
	rope4 = new Rope(bobObj4.body,roof.body,bobDiameter*1, 0)

	rope5 = new Rope(bobObj5.body,roof.body,bobDiameter*2, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
}



