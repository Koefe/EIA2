var Zeichenfläche;
(function (Zeichenfläche) {
    class Circle extends Zeichenfläche.Mainclass {
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
            this.newColor = false;
        }
        draw() {
            let xcircle = new Path2D();
            xcircle.arc(this.x + 10 + this.a, this.y + this.a, 15 + this.a, 0, 360);
            Zeichenfläche.crc.fillStyle = "SteelBlue";
            Zeichenfläche.crc.fill(xcircle);
            Zeichenfläche.crc.strokeStyle = "white";
            Zeichenfläche.crc.stroke(xcircle);
            let angleA = Math.random() * 360;
            let angleB = Math.random() * 360;
            if (this.rainbow == true) {
                let gr = Zeichenfläche.crc.createLinearGradient(0, 0, 600, 600);
                gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");
                gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");
                Zeichenfläche.crc.fillStyle = gr;
                Zeichenfläche.crc.fill(xcircle);
            }
            let purple = document.getElementById("purple");
            let pink = document.getElementById("pink");
            let blue = document.getElementById("blue");
            //mit && noch checkboxen einpflegen um so die Farbe anzupassen
            if (purple.checked == true) {
                Zeichenfläche.crc.fillStyle = "purple";
                Zeichenfläche.crc.fill(xcircle);
                Zeichenfläche.crc.strokeStyle = "white";
                Zeichenfläche.crc.stroke(xcircle);
                this.move(); //// move aufrufen und dort einstellen das bei check rotate farbe übernommen wird. this.move();
                if (this.rainbow == true) {
                    let gr = Zeichenfläche.crc.createLinearGradient(0, 0, 600, 600);
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");
                    Zeichenfläche.crc.fillStyle = gr;
                    Zeichenfläche.crc.fill(xcircle);
                }
            }
            if (pink.checked == true) {
                Zeichenfläche.crc.fillStyle = "pink";
                Zeichenfläche.crc.fill(xcircle);
                Zeichenfläche.crc.strokeStyle = "white";
                Zeichenfläche.crc.stroke(xcircle);
                this.move(); //// move aufrufen und dort einstellen das bei check farbe übernommen wird. this.move();
                if (this.rainbow == true) {
                    let gr = Zeichenfläche.crc.createLinearGradient(0, 0, 600, 600);
                    gr.addColorStop(0, "hsl(" + (angleA % 360) + ",100%, 50%)");
                    gr.addColorStop(1, "hsl(" + (angleB % 360) + ",100%, 50%)");
                    Zeichenfläche.crc.fillStyle = gr;
                    Zeichenfläche.crc.fill(xcircle);
                }
            }
            if (blue.checked == true) {
                Zeichenfläche.crc.fillStyle = "SteelBlue";
                Zeichenfläche.crc.fill(xcircle);
                Zeichenfläche.crc.strokeStyle = "white";
                Zeichenfläche.crc.stroke(xcircle);
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
    Zeichenfläche.Circle = Circle;
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=cube.js.map