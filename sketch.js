const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, world;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    platform1 = new Ground(700,400,250,20);
    platform2 = new Ground(1400,300,250,20);

    box1 = new Box(721,370,40,40);
    box2 = new Box(761,370,40,40); 
    box3 = new Box(801,370,40,40);
    box4 = new Box(681,370,40,40);
    box5 = new Box(641,370,40,40);
    box6 = new Box(601,370,40,40);
    box7 = new Box(641,330,40,40);
    box8 = new Box(681,330,40,40);
    box9 = new Box(721,330,40,40);
    box10 = new Box(761,330,40,40);
    box11 = new Box(681,290,40,40);
    box12 = new Box(721,290,40,40);
    box13 = new Box(701,250,40,40);
    
    box14 = new Box(1421,270,40,40);
    box15 = new Box(1461,270,40,40);
    box16 = new Box(1501,270,40,40);
    box17 = new Box(1381,270,40,40);
    box18 = new Box(1341,270,40,40);
    box19 = new Box(1301,270,40,40);
    box20 = new Box(1341,230,40,40);
    box21 = new Box(1381,230,40,40);
    box22 = new Box(1421,230,40,40);
    box23 = new Box(1461,230,40,40);
    box24 = new Box(1381,190,40,40);
    box25 = new Box(1421,190,40,40);
    box26 = new Box(1401,150,40,40);

    stone = new Polygon(80,400,60);
    sling = new constraint(stone.body,{x:80,y:400});
}

function draw(){
    background(0);
    Engine.update(engine);

    platform1.display();
    platform2.display();


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    stone.display();
    sling.display();
    
}

function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}