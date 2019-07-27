namespace aquarium {

    export class Enemy extends Fish {

        constructor(x: number, y: number) {
            super();
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 5;

        }

        draw(): void {
            let food: Path2D = new Path2D();
            food.moveTo(this.x, this.y);
            food.arc(this.x, this.y, 4, 0 , 360);
            crc.fillStyle = "brown";
            crc.fill(food);
        }

        move(): void {
            this.y += this.dy;
            if (this.y >= 390) {
                this.dy = 0;
            }
        }
    }
}