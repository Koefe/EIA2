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
            bluefishfloss.arc(this.x, this.y + 8, 5, 0, Math.PI);
            aquarium.crc.fillStyle = "SteelBlue";
            aquarium.crc.fill(bluefishfloss);
            let bluefishfloss1 = new Path2D();
            bluefishfloss1.arc(this.x - 5, this.y - 3, 10, 0, Math.PI);
            aquarium.crc.fillStyle = "SteelBlue";
            aquarium.crc.fill(bluefishfloss1);
            //crc.strokeStyle = "white";
            //crc.stroke(bluefishfloss);
            let bluefisheye = new Path2D();
            bluefisheye.arc(this.x + 15, this.y, 4, 0, 360);
            aquarium.crc.fillStyle = "white";
            aquarium.crc.fill(bluefisheye);
            let bluefisheyepupil = new Path2D();
            bluefisheyepupil.arc(this.x + 15, this.y, 2, 0, 360);
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
        }
    }
    aquarium.BlueFish = BlueFish;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bluefish.js.map