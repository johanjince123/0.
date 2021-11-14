class BlowerMouth {

    constructor(x, y, w, h){

        var blowerMouthOptions = {

            isStatic : true

        }

        this.body = Bodies.rectangle(x, y, w, h, blowerMouthOptions);
        this.w = w;
        this.h = h;
        this.image = loadImage("images/blowerMouth.png");
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