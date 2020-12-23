class Bob{
    constructor(x,y,radius){
       var options ={
            isStatic: false,
            restitution :0.4,
            friction :0.5,
            density :1.2
        }
        this.x=x;
		this.y=y;
		this.radius=radius
    this.body=Bodies.circle(this.x, this.y, (this.radius)/2,options);
    World.add(world,this.body)
	// this.radius = radius;
   
    }
    display(){
		var pos =this.body.position;
		var angle =this.body.angle;
		push();
		translate(pos.x,pos.y);
        // rotate(angle);
        rectMode(CENTER)
		fill("purple")
		// ellipseMode(RADIUS);
		ellipse(0,0,this.radius,this.radius);
		pop();
    }
}
