const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var block1,block2,block3, block4,block5, block6,block7;
var polygon,polygonImage;
var slingShot;


function preload() {
    polygonImage = loadImage("polygon.png");
}

function setup(){
    rectMode(CENTER);
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,605,1200,20);
    stand1 = new Ground(550,450,300,15);
    stand2 = new Ground(1000,250,250,15);
    block2 = new Block(580,420,30,40);
    block1 = new Block(550,420,30,40);
    block3 = new Block(610,420,30,40);
    block4 = new Block(640,420,30,40);
    block5 = new Block(520,420,30,40);
    block6 = new Block(490,420,30,40);
    block7 = new Block(460,420,30,40);
    block8 = new Block(550,370,30,40);
    block9 = new Block(580,370,30,40);
    block10 = new Block(610,370,30,40);
    block11 = new Block(520,370,30,40);
    block12 = new Block(490,370,30,40);
    block13 = new Block(550,330,30,40);
    block14 = new Block(580,330,30,40);
    block15 = new Block(520,330,30,40);
    block16 = new Block(550,300,30,40);
    block17 = new Block(1000,230,30,40);
    block18 = new Block(1030,230,30,40);
    block19 = new Block(1060,230,30,40);
    block20 = new Block(970,230,30,40);
    block21 = new Block(940,230,30,40);
    block22 = new Block(1000,190,30,40);
    block23 = new Block(1030,190,30,40);
    block24 = new Block(970,190,30,40);
    block25 = new Block(1000,150,30,40);

    polygon = Bodies.circle(50,200,50);
    World.add(world,polygon)

    slingShot = new SlingShot(polygon,{x: 200,y: 300});

}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    stand1.display();
    stand2.display();
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
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingShot.display();

    drawSprites();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x : mouseX,y : mouseY })
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(polygon,{x: 200, y: 300});
       slingShot.attach(polygon);
    }
}
