namespace Zeichenfläche {

    export class Mainclass {
        x: number;
        y: number;
        dx: number;
        dy: number;
        a: number;
        size: number;
        color: string;
        rainbow: boolean;
        type: string;
        moving: boolean;
        
        newColor: boolean;

        constructor() {
            // this.x = Math.random() * crc.canvas.width;
            // this.y = Math.random() * crc.canvas.height;
            // this.dx = 0;
            // this.dy = 0;
            // this.a = 1;
            // this.size = 5;

        }

        draw(): void {
            ////// - hier kommt noch ne Form rein wenn ich Zeit habe - //////

        }

        update(): void {
            this.move();
            this.draw();
        }


        move(): void {

        ///// - /////
        }
    }
}