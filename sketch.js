
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,600,1000,20);

	//Create the Bodies Here.
	tree = new Tree(750,600);
	mango1 = new Mango(750,220,20);
	mango2 = new Mango(800,230,20);
	mango3 = new Mango(680,100,30);
	mango4 = new Mango(750,250,30);
	mango5 = new Mango(700,200,30);

	stone = new Stone(100,200,50);

	slingshot = new Slingshot(stone.body,{x:150,y:400})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  textSize(25);
  text("Press Space to play again!",60 ,80);
  drawSprites();
  image(boyImg, 100,300,200,400);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display(); 
  mango5.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

  stone.display();
  slingshot.display();
}

function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
	  {
		  Matter.Body.setStatic(lmango.body,false);
	  }
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:150,y:400});
		slingshot.attach(stone.body);
	}
}


