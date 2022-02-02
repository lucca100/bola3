const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var cubo;
var bola
var reta


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

     
    cubo = new Cubo (40,200)

    bola = new Bola (100,100)

    reta = new Reta(400,10)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    cubo.display();
    bola.display()
    reta.display()

    
 
}