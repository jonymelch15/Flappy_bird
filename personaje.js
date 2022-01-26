class Personaje {
    constructor(){
        var options = {
            frictionAir:0.01,
            
        }
        this.body =  Bodies.circle(100, 200, 20, options);
        World.add(world, this.body);
    }
    display(){
     push();
     var pos = this.body.position;
     translate(pos.x,pos.y);
     ellipseMode(RADIUS);
     
     ellipse(0,0,20,20);
     pop();
    }
}