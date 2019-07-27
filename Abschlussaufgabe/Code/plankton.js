var aquarium;
(function (aquarium) {
    class Plankton extends aquarium.Fish {
        constructor() {
            super();
            this.x = Math.random() * aquarium.crc.canvas.width;
            this.y = Math.random() * aquarium.crc.canvas.height;
            this.dx = -4;
            this.dy = 0;
            this.size = 1;
        }
        draw() {
            let planktonbody = new Path2D();
            planktonbody.arc(this.x + 10, this.y, 4, 0, 360);
            aquarium.crc.fillStyle = "green";
            aquarium.crc.fill(planktonbody);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(planktonbody);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > aquarium.canvas.width || this.x < 0 || this.y > aquarium.canvas.height || this.y < 0) {
                //fish.newMove(x, y);
                //update();
                //console.log("Plankton Raus");
                this.x = 600; //canvas.width / 2;
                //this.y = canvas.height / 2;
            }
        }
    }
    aquarium.Plankton = Plankton;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=plankton.js.map