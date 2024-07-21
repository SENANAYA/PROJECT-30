class Ball{
    constructor(x, y, radius) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic : true
        }
        
       this.body = Bodies.circle(x,y,radius);
       this.shot=false
  World.add(world,this.body);
        this.radius =radius;
      
      }
      display(){
       
        if(this.shot==='being done'){
          Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});

        }
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(rock_img,0,0)
        pop();
      }
}