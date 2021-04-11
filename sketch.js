const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0,ground1;
var divisions = [];
var particle, turn =0, count = 0;

var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


   for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
}
 


function draw() {
  background("black");
  
 //text(mouseX+','+mouseY,mouseX,mouseY)
 
  if(gameState === "play")
  {

    textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(30)
  text("500",15,530)
  text("500",95,530)
  text("500",175,530)
  text("500",255,530)
  text("100",335,530)
  text("100",415,530)
  text("100",495,530)
  text("200",575,530)
  text("200",655,530)
  text("200",735,530)

    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
      
    }
    /*
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
      score++;
    }*/
  
   for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }

    if (particle!=null)
   {
     particle.display();
     if(particle.body.position.y>760)
     {
       if(particle.body.position.x<=321)
       {
         score = score+500
          particle = null
         
       }
       
       else if(particle.body.position.x>=322 && particle.body.position.x<=563)
       {
         score = score + 100;
         particle = null
       }
       else if(particle.body.position.x>=563 && particle.body.position.x<=900)
       {
        score = score + 200;
        particle = null
       }
     }
   }

   
 
  }

  if(turn > 5)
   {
     gameState = "end"
     fill("white")
     textSize(25)
     text("Game Over",350,400)
   }
   
   
}

function mousePressed()
{
  if(gameState != "end")
  {
    count++;
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }

  
}