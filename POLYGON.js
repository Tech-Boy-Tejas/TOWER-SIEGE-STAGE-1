class Polygon{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius - 5);
        this.radius = radius;

        this.image = loadImage("STONE.png");

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}