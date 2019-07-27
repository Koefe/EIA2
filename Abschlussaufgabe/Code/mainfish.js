var aquarium;
(function (aquarium) {
    class MainFish {
        constructor() {
            this.x = Math.random() * aquarium.crc.canvas.width;
            this.y = Math.random() * aquarium.crc.canvas.height;
            this.a = 1;
            this.dx = 0;
            this.dy = 0;
            this.size = 2;
        }
        draw() {
            let mainbody = new Path2D();
            mainbody.arc(this.x + 10 + this.a, this.y + this.a, 10 + this.a, 0, 360);
            aquarium.crc.fillStyle = "red";
            aquarium.crc.fill(mainbody);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(mainbody);
            let fisheye = new Path2D();
            fisheye.arc(this.x + 14 + this.a, this.y + this.a, 3 + this.a, 0, 360);
            aquarium.crc.fillStyle = "white";
            aquarium.crc.fill(fisheye);
            let fisheyepupil = new Path2D();
            fisheyepupil.arc(this.x + 14 + this.a, this.y + this.a, this.a, 0, 360);
            aquarium.crc.fillStyle = "black";
            aquarium.crc.fill(fisheyepupil);
        }
        update(_x, _y) {
            this.move(_x, _y);
            this.draw();
        }
        move(_x, _y) {
            this.x += _x;
            this.y += _y;
            if (this.x >= aquarium.canvas.width || this.x <= 0 || this.y >= aquarium.canvas.height || this.y <= 0) {
                //console.log("Raus");
                this.x = 600;
            }
        }
    }
    aquarium.MainFish = MainFish;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=mainfish.js.map