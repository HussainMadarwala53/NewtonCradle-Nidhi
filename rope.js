class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX =offsetX;
        this.offsetY =offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB :{x:this.offsetX,y:this.offsetY},
         }
       console.log(options);  
      this.rope = Constraint.create(options);
      World.add(world,this.rope); 
    }
    display(){
       var Apos=this.rope.bodyA.position;
       var Bpos=this.rope.bodyB.position;
       strokeWeight(4);
       line(Apos.x,Apos.y,Bpos.x,Bpos.y)  
    }
}