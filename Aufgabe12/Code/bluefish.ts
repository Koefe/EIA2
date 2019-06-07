namespace aquarium {

    export class BlueFish {
        x: number;
        y: number;
        dx: number;
        dy: number;
        //color: string;


        draw(): void {

            let bluefishbody: Path2D = new Path2D();

            bluefishbody.arc(this.x + 10, this.y, 15, 0, 360);

            crc.fillStyle = "SteelBlue";
            crc.fill(bluefishbody);

            crc.strokeStyle = "white";
            crc.stroke(bluefishbody);

            let bluefishfloss: Path2D = new Path2D();

            bluefishfloss.arc(this.x, this.y + 8, 5, 0, Math.PI);

            crc.fillStyle = "SteelBlue";
            crc.fill(bluefishfloss);

            let bluefishfloss1: Path2D = new Path2D();

            bluefishfloss1.arc(this.x - 5, this.y - 3, 10, 0, Math.PI);

            crc.fillStyle = "SteelBlue";
            crc.fill(bluefishfloss1);

            //crc.strokeStyle = "white";
            //crc.stroke(bluefishfloss);

            let bluefisheye: Path2D = new Path2D();

            bluefisheye.arc(this.x + 15, this.y, 4, 0, 360);

            crc.fillStyle = "white";
            crc.fill(bluefisheye);

            let bluefisheyepupil: Path2D = new Path2D();

            bluefisheyepupil.arc(this.x + 15, this.y, 2, 0, 360);

            crc.fillStyle = "black";
            crc.fill(bluefisheyepupil);
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