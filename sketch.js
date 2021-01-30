
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,body1;

function preload(){
	boy = loadImage("boy.png");
	bg1 = loadImage("bg.jpeg");
	tree1 = loadImage("tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	groundObj = new ground();

	stoneObj=new Stone(230,403,40);

	mango1=new mango(1100,100,30);
	mango2=new mango(1140,100,27);
	mango3=new mango(1060,140,30);
	mango4=new mango(1200,100,20);
	mango5=new mango(1100,180,25);
	mango6=new mango(1140,100,32);
	mango7=new mango(1060,200,22);
	mango8=new mango(1200,100,20);
	mango9=new mango(1100,220,30);
	mango10=new mango(1140,100,18);
	mango11=new mango(1060,240,26);
	mango12=new mango(1100,100,30);

  launcherObject = new SlingShot(stoneObj.body,{x:230,y:403})

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() 
{

  Engine.update(engine);

  imageMode(CENTER);
  image(bg1,650,300,1300,600);
  image(tree1,1000,300,650,650);
  image(boy,300,480,200,300);

  textSize(25);
  fill("red");
  text("Press space to get another chance",50,50);
 
  detectollision()
  {
    stoneObj.body=body;
    mongo1.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo2.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo3.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo4.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo5.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo6.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo7.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo8.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo9.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo10.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo11.body=mango;
  }
  detectollision()
  {
    stoneObj.body=body;
    mongo12.body=mango;
  }
 
  //Add code for displaying text here!

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  mango1.collide(groundObject);
  mango2.collide(groundObject);
  mango3.collide(groundObject);
  mango4.collide(groundObject);
  mango5.collide(groundObject);
  mango6.collide(groundObject);
  mango7.collide(groundObject);
  mango8.collide(groundObject);
  mango9.collide(groundObject);
  mango10.collide(groundObject);
  mango11.collide(groundObject);
  mango12.collide(groundObject);

  groundObject.display();

  stoneObj.display();

  launcherObject.display();

  launcherObject.attach(stoneObj.body);
}
function mouseDragged()
{
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  launcherObject.fly();
}
function detectollision(body,mango)
{
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmago.body,false);
  }
}
function keypressed()
{
  if (keycode === 32)
  {
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
    launcherObj.attach(stoneObj.body);
  }
}