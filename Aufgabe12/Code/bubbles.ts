namespace aquarium {

    export class Bubbles {
        x: number;
        y: number;
        dx: number;
        dy: number;
        //color: string;


        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x + 10, this.y, 20, 0, 360);
            //crc.fillStyle = "lightblue";
            //crc.fill(bubble);

            crc.strokeStyle = "white";
            crc.stroke(bubble);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}