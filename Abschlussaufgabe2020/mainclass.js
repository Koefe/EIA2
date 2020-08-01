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
            ////// - hier kommt noch ne Form rein wenn ich Zeit habe - //////
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            ///// - /////
        }
    }
    Zeichenfläche.Mainclass = Mainclass;
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=mainclass.js.map