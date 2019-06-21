namespace aquarium {

    export class Bubbles extends Fish {

        constructor() {
            super();
            this.x = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.dx = Math.random() * 2 - 4;
            this.dy = Math.random() * 8 - 9;
        }

        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x + 10, this.y, 10, 0, 360);
            //crc.fillStyle = "lightblue";
            //crc.fill(bubble);

            crc.strokeStyle = "white";
            crc.stroke(bubble);

            //super.draw();
        }


        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                //fish.newMove(x, y);
                //update();
                console.log("Bubble Raus");
                this.x =  Math.random() * canvas.width; //canvas.width / 2;
                this.y =  300; //canvas.height; // 2;
            }
        }
    }
}