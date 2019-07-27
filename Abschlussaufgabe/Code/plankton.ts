namespace aquarium {

    export class Plankton extends Fish {

        constructor() {
            super();
            this.x  = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.dx = -4;
            this.dy = 0;
            this.size = 1;
        }

        draw(): void {

            let planktonbody: Path2D = new Path2D();

            planktonbody.arc(this.x + 10, this.y, 4, 0, 360);

            crc.fillStyle = "green";
            crc.fill(planktonbody);

            crc.strokeStyle = "white";
            crc.stroke(planktonbody);

        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                //fish.newMove(x, y);
                //update();
                //console.log("Plankton Raus");
                this.x = 600 ; //canvas.width / 2;
                //this.y = canvas.height / 2;

            }
        }
    }
}