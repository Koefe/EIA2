var aquarium;
(function (aquarium) {
    class Fish {
        draw() {
            let fishbody = new Path2D();
            fishbody.moveTo(this.x + 10, this.y);
            fishbody.rect(this.x + 10, this.y, 20, 20);
            aquarium.crc.fillStyle = "orange";
            aquarium.crc.fill(fishbody);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(fishbody);
            let fishhead = new Path2D();
            fishhead.moveTo(this.x + 29, this.y);
            fishhead.lineTo(this.x + 40, this.y + 10);
            fishhead.lineTo(this.x + 29, this.y + 20);
            aquarium.crc.fillStyle = "orange";
            aquarium.crc.fill(fishhead);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(fishhead);
            let flosse1 = new Path2D();
            flosse1.moveTo(this.x + 13, this.y - 1);
            flosse1.lineTo(this.x + 25, this.y);
            flosse1.lineTo(this.x + 15, this.y - 10);
            aquarium.crc.fillStyle = "orange";
            aquarium.crc.fill(flosse1);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(flosse1);
            let flosse2 = new Path2D();
            flosse2.moveTo(this.x + 5, this.y + 5);
            flosse2.lineTo(this.x + 10, this.y + 10);
            flosse2.lineTo(this.x + 5, this.y + 15);
            aquarium.crc.fillStyle = "orange";
            aquarium.crc.fill(flosse2);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(flosse2);
            let orangefisheye = new Path2D();
            orangefisheye.arc(this.x + 28, this.y + 8, 4, 0, 360);
            aquarium.crc.fillStyle = "white";
            aquarium.crc.fill(orangefisheye);
            let orangefisheyepupil = new Path2D();
            orangefisheyepupil.arc(this.x + 28, this.y + 8, 2, 0, 360);
            aquarium.crc.fillStyle = "black";
            aquarium.crc.fill(orangefisheyepupil);
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
                console.log("Orange Raus");
                this.x = 0; //canvas.width / 2;
                this.y = aquarium.canvas.height / 2;
            }
        }
    }
    aquarium.Fish = Fish;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=animation.js.map