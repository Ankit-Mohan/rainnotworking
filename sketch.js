const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100
function preload(){
    lightim1 = loadImage("1.png")
}

function setup(){
var canvas = createCanvas(400,400);   
engine = Engine.create();
world = engine.world; 
rain1 = new rain(100,1);
lightning = createSprite(100,50,10,10);
lightning.addImage(lightim1)
}

function draw(){
 background("Black");
 rain1.display();
 rain1.update();
 
if (frameCount%40===0){
image(100,50,"1.png") 
}

 Engine.update(engine);
}   
