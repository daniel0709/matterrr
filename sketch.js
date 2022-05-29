
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var block1_options ={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options ={
		restitution:0.1,
		friction:1,
		frictionAir:0.3
	}


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}

	block3 = Bodies. circle(350,50,10,10,block3_options)
	World.add(World,block3)

	block2 = Bodies.rectangle(110,50,10,10,block2_options)
	World.add(World,block2)

	block1 = Bodies.circle(220,10,10,block1_options)
	World.add(World,block1)


	Engine.run(engine);
	engine.update(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  
  drawSprites();
 
}



