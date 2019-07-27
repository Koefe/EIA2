var aquarium;
(function (aquarium) {
    class Enemy extends aquarium.Fish {
        constructor(x, y) {
            super();
            this.x = x;
            this.y = y;
            this.dy = Math.random() * 5;
        }
        draw() {
            let food = new Path2D();
            food.moveTo(this.x, this.y);
            food.arc(this.x, this.y, 4, 0, 360);
            aquarium.crc.fillStyle = "brown";
            aquarium.crc.fill(food);
        }
        move() {
            this.y += this.dy;
            if (this.y >= 390) {
                this.dy = 0;
            }
        }
    }
    aquarium.Enemy = Enemy;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=enemy.js.map