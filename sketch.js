const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1,bgImage;
var platform,sling
function preload(){
    bgImage=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(100,700,200,200);
    box1 = new Box(700,720,70,70);
    box2 = new Box(920,720,70,70);
    pig1 = new Pig(810, 750);
    log1 = new Log(810,660,300, PI/2);

    box3 = new Box(700,640,70,70);
    box4 = new Box(920,640,70,70);
    pig3 = new Pig(810, 620);

    log3 =  new Log(810,580,300, PI/2);

    box5 = new Box(810,560,70,70);
    log4 = new Log(760,520,150, PI/7);
    log5 = new Log(870,520,150, -PI/7);
   
    bird = new Bird(50,500);
    sling = new Sling(bird.body,{x:100,y:500});
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    
    platform.display();
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
   
    bird.display();
    sling.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling.fly();
}