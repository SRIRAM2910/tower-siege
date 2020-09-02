const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,block1;
var slingshot

function setup() {
  var canvas = createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,20);
    block9 = new Block(390,155,30,40);
    block10 = new Block(390,155,30,40);

    box = newBox(100,100)

    
    slingShot = new Slingshot(bird.body,{x:100,y:100});
    
}


function draw() {
  background(255,255,255);  
  Engine.update(engine);
    strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    box1.dislpay();
    slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(box.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly()
}
