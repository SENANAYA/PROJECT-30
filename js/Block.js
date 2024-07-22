class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            // set the isStatic property 
            isStatic :false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255
        World.add(world, this.body);
      }
      display(r,g,b){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<5){
          push();
         
          fill(r,g,b,255)
         
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }else{
          World.remove(world,this.body)
          push();
          strokeWeight(0)
          fill(r,g,b,this.Visibility)
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
          this.Visibility=this.Visibility-5
        }
        
      }
}