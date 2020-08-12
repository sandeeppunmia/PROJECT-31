const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

var plinkos = [];
var particles = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(485,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,790,790,20);

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
 
  for(var k = 15; k <= width; k = k + 50){
    plinkos.push(new Plinko(k, 175));
  }

  for(var k = 40; k <= width; k = k + 50){
    plinkos.push(new Plinko(k, 275));
  }

  for(var k = 15; k <= width; k = k + 50){
    plinkos.push(new Plinko(k, 375));
  }


  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k,height - divisionHeight/2, 10, divisionHeight));
  }

  

}

function draw() {
  rectMode(CENTER);
  background(0);

  

  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }

  ground.display();

  for(var i = 0; i < divisions.length; i++){
  divisions[i].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
console.log(particles.length);

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  drawSprites();
}