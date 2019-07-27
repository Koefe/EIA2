namespace aquarium {

    export class MainFish {

        x: number;
        y: number;
        dx: number;
        dy: number;
        a: number;
        size: number;

        constructor() {

            this.x  = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.a = 1;
            this.dx = 0;
            this.dy = 0;
            this.size = 2;
        }

        draw(): void {

            let mainbody: Path2D = new Path2D();

            mainbody.arc(this.x + 10 + this.a, this.y + this.a, 10 + this.a, 0, 360);

            crc.fillStyle = "red";
            crc.fill(mainbody);

            crc.strokeStyle = "white";
            crc.stroke(mainbody);

            let fisheye: Path2D = new Path2D();

            fisheye.arc(this.x + 14 + this.a, this.y + this.a, 3 + this.a, 0, 360);

            crc.fillStyle = "white";
            crc.fill(fisheye);

            let fisheyepupil: Path2D = new Path2D();

            fisheyepupil.arc(this.x + 14 + this.a, this.y + this.a, this.a, 0, 360);

            crc.fillStyle = "black";
            crc.fill(fisheyepupil);

        }

        update(_x: number, _y: number): void {
            this.move(_x, _y);
            this.draw();
        }


        move(_x: number, _y: number): void {
            this.x += _x;
            this.y += _y;
            if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
                //console.log("Raus");
                this.x = 600 ;
            }

        }
    }
}