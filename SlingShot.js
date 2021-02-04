class Sling{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:2.5
        }
        this.sling=Constraint.create(options)
        this.pointB=pointB
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
World.add(world,this.sling)
    }
    display(){
        image(this.sling1,100,410)
        image(this.sling2,70,410)
        if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
        push();
        stroke(48,22,8)
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x+30,pointB.y-65);
        line(pointA.x,pointA.y,pointB.x+70,pointB.y-65);
        image(this.sling3,pointA.x-15,pointA.y,15,30)
        pop();
    }
    
    }
    fly(){
        this.sling.bodyA=null
    }
}
 