class Box1 {
    constructor(x, y, width, height) {
      var options = {
        'isStatic':true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
      }
      this.body = Bodies.rectangle(x, y,20,70, options);
      this.width = 20;
      this.height = 70;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue")
      fill(0,0,255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  