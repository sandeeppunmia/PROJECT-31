class Plinko {
    constructor(x,y) {
      var options = {
        isStatic:true,
        restitution:1,
        friction:0
      }
      this.body = Bodies.circle(x,y,8,options);
      this.radius = 8;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      fill(255);
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }
