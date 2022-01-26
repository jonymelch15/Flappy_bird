const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var pajaro;
var pared1, pared2;
var paredes = [];
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  pajaro = new Personaje();
  pared1 = new Paredes(100,390,800,10);
  //pared2 = new Paredes(400,300,30,200);
}

function draw() {
  background(255,255,155); 
  Engine.update(engine);
  pajaro.display();
  pared1.display();
  //pared2.display(); 

  crearParedes();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(pajaro.body,{x:0,y:0},{x:0,y:-0.05});
  }
}
function crearParedes(){
  if(frameCount%50 == 0){
    var pared = new Paredes(750,100,30,200);
    paredes.push(pared);
    //pared.display();
    
  }
  for(var contador = 0;contador<paredes.length;contador++){
    if(paredes[contador]){
      Matter.Body.setVelocity(paredes[contador].body,{x:-0.5, y:0});
      paredes[contador].display(); 
    }
 
  }
}