const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball, ball2, ball3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var ball_options = {
        restitution : 1.5
    }

    


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    

    ball = Bodies.circle(200, 100, 20, ball_options);
    World.add(world, ball);
    console.log(ground);
    

    ball2 = Bodies.circle(250, 100, 20, ball_options);
    World.add(world, ball2);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,400,20);

    fill("white");
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);

    ellipse(ball2.position.x, ball2.position.y, 20, 20);



}