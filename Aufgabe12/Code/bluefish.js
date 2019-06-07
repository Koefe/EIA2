var aquarium;
(function (aquarium) {
    class BlueFish {
        //color: string;
        draw() {
            let bluefishbody = new Path2D();
            bluefishbody.arc(this.x + 10, this.y, 15, 0, 360);
            aquarium.crc.fillStyle = "SteelBlue";
            aquarium.crc.fill(bluefishbody);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(bluefishbody);
            let bluefishfloss = new Path2D();
            bluefishfloss.arc(this.x + 25, this.y - 4, 5, 0, Math.PI);
            aquarium.crc.fillStyle = "SteelBlue";
            aquarium.crc.fill(bluefishfloss);
            let bluefishfloss1 = new Path2D();
            bluefishfloss1.arc(this.x + 20, this.y + 3, 10, 0, Math.PI);
            aquarium.crc.fillStyle = "SteelBlue";
            aquarium.crc.fill(bluefishfloss1);
            //crc.strokeStyle = "white";
            //crc.stroke(bluefishfloss);
            let bluefisheye = new Path2D();
            bluefisheye.arc(this.x + 2, this.y, 4, 0, 360);
            aquarium.crc.fillStyle = "white";
            aquarium.crc.fill(bluefisheye);
            let bluefisheyepupil = new Path2D();
            bluefisheyepupil.arc(this.x + 2, this.y, 2, 0, 360);
            aquarium.crc.fillStyle = "black";
            aquarium.crc.fill(bluefisheyepupil);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > aquarium.canvas.width || this.x < 0 || this.y > aquarium.canvas.height || this.y < 0) {
                //fish.newMove(x, y);
                //update();
                console.log("Blau Raus");
                this.x = 600; //canvas.width / 2;
                this.y = aquarium.canvas.height / 2;
            }
        }
    }
    aquarium.BlueFish = BlueFish;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bluefish.js.map