var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", food);
    let fishArray = [];
    //let blueFishArray: BlueFish[] = [];
    //let bubbleArray: Bubbles[] = [];
    let fps = 30;
    let imageData;
    function init() {
        let x = 10;
        let y = 20;
        aquarium.canvas = document.getElementsByTagName("canvas")[0];
        aquarium.crc = aquarium.canvas.getContext("2d");
        background(x, y);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width - 150;
            //let y: number = Math.random() * canvas.height;
            plant(x, y);
        }
        //plant(x, y);
        imageData = aquarium.crc.getImageData(0, 0, aquarium.canvas.width, aquarium.canvas.height);
        for (let i = 0; i < 10; i++) {
            let fische = new aquarium.Fish();
            fishArray.push(fische);
            console.log(fische);
        }
        for (let i = 0; i < 10; i++) {
            let bluefish = new aquarium.BlueFish();
            fishArray.push(bluefish);
            console.log(bluefish);
        }
        for (let i = 0; i < 20; i++) {
            let bubble = new aquarium.Bubbles();
            fishArray.push(bubble);
            console.log(bubble);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aquarium.crc.clearRect(0, 0, aquarium.canvas.width, aquarium.canvas.height);
        aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
    }
    function background(_x, _y) {
        let background = new Path2D();
        background.moveTo(_x - 10, _y - 20);
        background.rect(_x - 10, _y - 20, 600, 400);
        aquarium.crc.fillStyle = "lightblue";
        aquarium.crc.fill(background);
        let riff = new Path2D();
        riff.moveTo(_x + 100, _y + 350);
        riff.bezierCurveTo(_x, _y + 100, _x + 500, _y + 250, _x + 250, _y + 400);
        aquarium.crc.fillStyle = "LightSlateGrey";
        aquarium.crc.fill(riff);
        let riff2 = new Path2D();
        riff2.moveTo(_x + 400, _y + 300);
        riff2.bezierCurveTo(_x + 400, _y + 300, _x + 400, _y + 150, _x + 150, _y + 300);
        aquarium.crc.fillStyle = "SlateGray";
        aquarium.crc.fill(riff2);
        let ground = new Path2D();
        ground.moveTo(_x - 10, _y + 300);
        ground.rect(_x - 10, _y + 300, 600, 400);
        aquarium.crc.fillStyle = "BurlyWood";
        aquarium.crc.fill(ground);
    }
    function plant(_x, _y) {
        let plant1 = new Path2D();
        plant1.moveTo(_x + 100, _y + 350);
        plant1.bezierCurveTo(_x + 50, _y + 300, _x + 150, _y + 200, _x + 100, _y + 170);
        aquarium.crc.fillStyle = "green";
        aquarium.crc.fill(plant1);
        let stone1 = new Path2D();
        stone1.arc(_x + 10, _y + 360, 10, 0, 360);
        aquarium.crc.fillStyle = "DarkGrey";
        aquarium.crc.fill(stone1);
        let stone2 = new Path2D();
        stone2.arc(_x + 30, _y + 10 + 360, 10, 0, 360);
        aquarium.crc.fillStyle = "DarkSlateGrey ";
        aquarium.crc.fill(stone2);
    }
    function food(_event) {
        let newx = _event.clientX;
        let newy = _event.clientY;
        if (newx <= aquarium.canvas.width && newy <= aquarium.canvas.height) {
            let food = new aquarium.Food(newx, newy);
            fishArray.push(food);
        }
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=canvas.js.map