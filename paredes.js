class Paredes{
    constructor(x,y,w,h){
        var options = {
            isStatic: true

        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
        this.h = h;
        this.w = w;
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}