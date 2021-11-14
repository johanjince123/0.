class Blower {

    constructor(x, y, w, h){

        var blowerOptions = {

            isStatic : true

        }

        this.body = Bodies.rectangle(x, y, w, h, blowerOptions);
        this.w = w;
        this.h = h;
        this.image = loadImage("images/blower.png");
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate (angle);
        imageMode(CENTER);
        image (this.image, 0, 0, this.w, this.h);
        pop ();

    }

}