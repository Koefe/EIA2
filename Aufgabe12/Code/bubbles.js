var aquarium;
(function (aquarium) {
    class Bubbles {
        //color: string;
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x + 10, this.y, 20, 0, 360);
            //crc.fillStyle = "lightblue";
            //crc.fill(bubble);
            aquarium.crc.strokeStyle = "white";
            aquarium.crc.stroke(bubble);
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
                console.log("Bubble Raus");
                this.x = Math.random() * aquarium.canvas.width; //canvas.width / 2;
                this.y = 300; //canvas.height; // 2;
            }
        }
    }
    aquarium.Bubbles = Bubbles;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bubbles.js.map