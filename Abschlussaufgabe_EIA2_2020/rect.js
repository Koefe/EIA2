var Zeichenfläche;
(function (Zeichenfläche) {
    class Rect extends Zeichenfläche.Mainclass {
        constructor() {
            super();
            this.x = Math.random() * Zeichenfläche.crc.canvas.width;
            this.y = Math.random() * Zeichenfläche.crc.canvas.height;
            this.dx = 0;
            this.dy = 0;
            this.a = 1;
            this.size = 8;
            this.color = "SteelBlue" || "pink" || "purple";
            this.rainbow = false;
        }
        draw() {
            let xrect = new Path2D();
            xrect.rect(this.x, this.y, 50, 50);
            Zeichenfläche.crc.fillStyle = "SteelBlue";
            Zeichenfläche.crc.fill(xrect);
            Zeichenfläche.crc.strokeStyle = "white";
            Zeichenfläche.crc.stroke(xrect);
            let angleA = Math.random() * 360;
            let angleB = Math.random() * 360;
            if (this.rainbow == true) {
                let gr = Zeichenfläche.crc.createLinearGradient(0, 0, 600, 600);
                gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");
                gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");
                Zeichenfläche.crc.fillStyle = gr;
                Zeichenfläche.crc.fill(xrect);
            }
            //let color: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
            let purple = document.getElementById("purple1");
            let pink = document.getElementById("pink1");
            let blue = document.getElementById("blue1");
            //mit && noch checkboxen einpflegen um so die Farbe anzupassen
            if (purple.checked == true) {
                Zeichenfläche.crc.fillStyle = "purple";
                Zeichenfläche.crc.fill(xrect);
                Zeichenfläche.crc.strokeStyle = "white";
                Zeichenfläche.crc.stroke(xrect);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
                if (this.rainbow == true) {
                    let gr = Zeichenfläche.crc.createLinearGradient(0, 0, 600, 600);
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");
                    Zeichenfläche.crc.fillStyle = gr;
                    Zeichenfläche.crc.fill(xrect);
                }
            }
            if (pink.checked == true) {
                Zeichenfläche.crc.fillStyle = "pink";
                Zeichenfläche.crc.fill(xrect);
                Zeichenfläche.crc.strokeStyle = "white";
                Zeichenfläche.crc.stroke(xrect);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
                if (this.rainbow == true) {
                    let gr = Zeichenfläche.crc.createLinearGradient(0, 0, 600, 600);
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");
                    Zeichenfläche.crc.fillStyle = gr;
                    Zeichenfläche.crc.fill(xrect);
                }
            }
            if (blue.checked == true) {
                Zeichenfläche.crc.fillStyle = "SteelBlue";
                Zeichenfläche.crc.fill(xrect);
                Zeichenfläche.crc.strokeStyle = "white";
                Zeichenfläche.crc.stroke(xrect);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
            }
        }
        move() {
            this.x += this.dx;
            ///damit die Kreise wieder am Bildschirmrand auftauchen
            if (this.x > Zeichenfläche.canvas.width || this.x < 0 || this.y > Zeichenfläche.canvas.height || this.y < 0) {
                this.x = 0;
                console.log("hello");
            }
        }
    }
    Zeichenfläche.Rect = Rect;
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=rect.js.map