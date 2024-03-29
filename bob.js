class Bob {
    constructor(x,y,radius) {
        var options={
            //isStatic: false,
            'restitution':0.0,
            'friction':0.0,
            'density':0.5                 
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius);
    }
}