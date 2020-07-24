namespace Zeichenfläche {

    export class Circle extends Mainclass {

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
        }


        draw(): void {

            let xcircle: Path2D = new Path2D();

            xcircle.arc(this.x + 10 + this.a, this.y + this.a, 15 + this.a, 0, 360);

            crc.fillStyle = "SteelBlue";
            crc.fill(xcircle);

            crc.strokeStyle = "white";
            crc.stroke(xcircle);


            let angleA: number = Math.random() * 360;
            let angleB: number = Math.random() * 360;

            if (this.rainbow == true) {

                let gr: CanvasGradient = crc.createLinearGradient(0, 0, 600, 600);               
                gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   
                gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   
                crc.fillStyle = gr;                                            
                crc.fill(xcircle);                                  

            }

            //let color: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
            let purple: HTMLInputElement = <HTMLInputElement>document.getElementById("purple");
            let pink: HTMLInputElement = <HTMLInputElement>document.getElementById("pink");
            let blue: HTMLInputElement = <HTMLInputElement>document.getElementById("blue");

            //mit && noch checkboxen einpflegen um so die Farbe anzupassen
            if (purple.checked == true) {
                crc.fillStyle = "purple";
                crc.fill(xcircle);

                crc.strokeStyle = "white";
                crc.stroke(xcircle);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
                

                if (this.rainbow == true) {

                    let gr: CanvasGradient = crc.createLinearGradient(0, 0, 600, 600);               
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   
                    crc.fillStyle = gr;                                            
                    crc.fill(xcircle);                                  
    
                }

            }

            if (pink.checked == true) {
                crc.fillStyle = "pink";
                crc.fill(xcircle);

                crc.strokeStyle = "white";
                crc.stroke(xcircle);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();

                if (this.rainbow == true) {

                    let gr: CanvasGradient = crc.createLinearGradient(0, 0, 600, 600);               
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");   
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");   
                    crc.fillStyle = gr;                                            
                    crc.fill(xcircle);                                  
    
                }

            }
            if (blue.checked == true) {
                crc.fillStyle = "SteelBlue";
                crc.fill(xcircle);

                crc.strokeStyle = "white";
                crc.stroke(xcircle);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
            }



            //if (edit.checked && changedArray)

        }

        move(): void {

            this.x += this.dx;
            ///damit die Kreise wieder am Bildschirmrand auftauchen
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
                this.x = 0;
                console.log("hello");
            }
            ///

        }

    }

    //setInterval(this.move, 100);
    //}
}
//}
