namespace Zeichenfläche {

    export class Rect extends Mainclass {

        constructor() {
            super();
            this.x = Math.random() * crc.canvas.width;
            this.y = Math.random() * crc.canvas.height;
            this.dx = 0;
            this.dy = 0;
            this.a = 1;
            this.size = 8;
            this.color = "SteelBlue" || "pink" || "purple";
            this.rainbow = false;
            this.type = "rec";
            this.moving = false;
        }

        draw(): void {

            let xrect: Path2D = new Path2D();

            xrect.rect(this.x, this.y, 50, 50);

            crc.fillStyle = "SteelBlue";
            crc.fill(xrect);

            crc.strokeStyle = "white";
            crc.stroke(xrect);


            let angleA: number = Math.random() * 360;
            let angleB: number = Math.random() * 360;

            if (this.rainbow == true) {

                let gr: CanvasGradient = crc.createLinearGradient(0, 0, 600, 600);               
                gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   
                gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   
                crc.fillStyle = gr;                                            
                crc.fill(xrect);                                  

            }

            //let color: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
            let purple: HTMLInputElement = <HTMLInputElement>document.getElementById("purple1");
            let pink: HTMLInputElement = <HTMLInputElement>document.getElementById("pink1");
            let blue: HTMLInputElement = <HTMLInputElement>document.getElementById("blue1");

            //mit && noch checkboxen einpflegen um so die Farbe anzupassen
            if (purple.checked == true) {
                crc.fillStyle = "purple";
                crc.fill(xrect);

                crc.strokeStyle = "white";
                crc.stroke(xrect);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
                
                if (this.rainbow == true) {

                    let gr: CanvasGradient = crc.createLinearGradient(0, 0, 600, 600);               
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   
                    crc.fillStyle = gr;                                            
                    crc.fill(xrect);                                  
    
                }

            }

            if (pink.checked == true) {
                crc.fillStyle = "pink";
                crc.fill(xrect);

                crc.strokeStyle = "white";
                crc.stroke(xrect);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();

                if (this.rainbow == true) {

                    let gr: CanvasGradient = crc.createLinearGradient(0, 0, 600, 600);               
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   
                    crc.fillStyle = gr;                                            
                    crc.fill(xrect);                                  
    
                }

            }
            if (blue.checked == true) {
                crc.fillStyle = "SteelBlue";
                crc.fill(xrect);

                crc.strokeStyle = "white";
                crc.stroke(xrect);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
            }

        }

        move(): void {

            this.x += this.dx;
            ///damit die Kreise wieder am Bildschirmrand auftauchen
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                this.x = 0;
                console.log("hello");
            }
            
        }

    }

}
