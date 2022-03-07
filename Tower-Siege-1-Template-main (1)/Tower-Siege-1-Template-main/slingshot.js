class Slingshot{
    constructor(bodyA,pointB){
            var options = {
            bodyA : bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 2
    }
        this.sling = Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.sling);
        
    }
    //create functions here
display(){
if(this.sling.bodyA){
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;


strokeWeight(69);
stroke("red");
line(pointA.x,pointA.y,pointB.x,pointB.y);



}
}
fly(){
    this.sling.bodyA =null;
}

 //ref
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }

}


























