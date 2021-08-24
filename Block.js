class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          visibility=225

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      this.image= loadImage("block.png");

      console.log(this.body.speed)
      if(this.body.speed < 3){
        this.body.display();
      }
      else{
        tint(225,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
      }
    }
}