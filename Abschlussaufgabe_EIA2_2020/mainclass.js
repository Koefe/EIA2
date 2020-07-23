var Zeichenfläche;
(function (Zeichenfläche) {
    class Mainclass {
        constructor() {
            this.x = Math.random() * Zeichenfläche.crc.canvas.width;
            this.y = Math.random() * Zeichenfläche.crc.canvas.height;
            this.dx = 0;
            this.dy = 0;
            this.a = 1;
            this.size = 5;
        }
        draw() {
            // let fishbody: Path2D = new Path2D();
            // fishbody.moveTo(this.x + 10, this.y);
            // fishbody.rect(this.x + 10, this.y, 20, 20);
            // crc.fillStyle = "orange";
            // crc.fill(fishbody);
            // crc.strokeStyle = "white";
            // crc.stroke(fishbody);
            // let fishhead: Path2D = new Path2D();
            // fishhead.moveTo(this.x + 29, this.y);
            // fishhead.lineTo(this.x + 40, this.y + 10);
            // fishhead.lineTo(this.x + 29, this.y + 20);
            // crc.fillStyle = "orange";
            // crc.fill(fishhead);
            // crc.strokeStyle = "white";
            // crc.stroke(fishhead);
            // let flosse1: Path2D = new Path2D();
            // flosse1.moveTo(this.x + 13, this.y - 1);
            // flosse1.lineTo(this.x + 25, this.y);
            // flosse1.lineTo(this.x + 15, this.y - 10);
            // crc.fillStyle = "orange";
            // crc.fill(flosse1);
            // crc.strokeStyle = "white";
            // crc.stroke(flosse1);
            // let flosse2: Path2D = new Path2D();
            // flosse2.moveTo(this.x + 5, this.y + 5);
            // flosse2.lineTo(this.x + 10, this.y + 10);
            // flosse2.lineTo(this.x + 5, this.y + 15);
            // crc.fillStyle = "orange";
            // crc.fill(flosse2);
            // crc.strokeStyle = "white";
            // crc.stroke(flosse2);
            // let orangefisheye: Path2D = new Path2D();
            // orangefisheye.arc(this.x + 28, this.y + 8, 4, 0, 360);
            // crc.fillStyle = "white";
            // crc.fill(orangefisheye);
            // let orangefisheyepupil: Path2D = new Path2D();
            // orangefisheyepupil.arc(this.x + 28, this.y + 8, 2, 0, 360);
            // crc.fillStyle = "black";
            // crc.fill(orangefisheyepupil);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //this.x += this.dx;
            //this.y += this.dy;
            //if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            //    this.x = 0 ; 
            //    this.y = canvas.height / 2;
            //}
        }
    }
    Zeichenfläche.Mainclass = Mainclass;
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=mainclass.js.map