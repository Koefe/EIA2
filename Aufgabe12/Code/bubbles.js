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
        }
    }
    aquarium.Bubbles = Bubbles;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bubbles.js.map