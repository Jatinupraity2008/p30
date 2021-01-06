class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'density':0.1
          
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      if(this.body.speed < 3){
        push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(1);
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
      }
      
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
    }
  };