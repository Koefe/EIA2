var aquarium;
(function (aquarium) {
    document.addEventListener("DOMContentLoaded", init);
    let fishArray = [];
    let blueFishArray = [];
    let bubbleArray = [];
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
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = 10 - 5;
            let dy = Math.random() * 9 - 5;
            let fische;
            fische = new aquarium.Fish();
            fische.x = x;
            fische.y = y;
            fische.dx = dx;
            fische.dy = dy;
            fische.draw();
            fishArray.push(fische);
            console.log(fische);
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = -10;
            let dy = Math.random() * 10 - 7;
            let bluefish;
            bluefish = new aquarium.BlueFish();
            bluefish.x = x;
            bluefish.y = y;
            bluefish.dx = dx;
            bluefish.dy = dy;
            blueFishArray.push(bluefish);
            console.log(bluefish);
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            let dx = Math.random() * 2 - 4;
            let dy = Math.random() * 8 - 9;
            let bubble;
            bubble = new aquarium.Bubbles();
            bubble.x = x;
            bubble.y = y;
            bubble.dx = dx;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            console.log(bubble);
        }
        update();
        //let aquarium = (x = x, y = y);
        //background(x, y);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            drawfish(x, y);
        }
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            drawbluefish(x, y);
        }
        for (let i = 0; i < 20; i++) {
            let x = Math.random() * aquarium.canvas.width;
            let y = Math.random() * aquarium.canvas.height;
            drawbubbles(x, y);
        }
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        aquarium.crc.clearRect(0, 0, aquarium.canvas.width, aquarium.canvas.height);
        aquarium.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
        for (let i = 0; i < blueFishArray.length; i++) {
            blueFishArray[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
    }
    function drawfish(_x, _y) {
        let fishbody = new Path2D();
        fishbody.moveTo(_x + 10, _y);
        fishbody.rect(_x + 10, _y, 20, 20);
        aquarium.crc.fillStyle = "orange";
        aquarium.crc.fill(fishbody);
        aquarium.crc.strokeStyle = "white";
        aquarium.crc.stroke(fishbody);
        let fishhead = new Path2D();
        fishhead.moveTo(_x + 29, _y);
        fishhead.lineTo(_x + 40, _y + 10);
        fishhead.lineTo(_x + 29, _y + 20);
        aquarium.crc.fillStyle = "orange";
        aquarium.crc.fill(fishhead);
        aquarium.crc.strokeStyle = "white";
        aquarium.crc.stroke(fishhead);
        let flosse1 = new Path2D();
        flosse1.moveTo(_x + 13, _y - 1);
        flosse1.lineTo(_x + 25, _y);
        flosse1.lineTo(_x + 15, _y - 10);
        aquarium.crc.fillStyle = "orange";
        aquarium.crc.fill(flosse1);
        aquarium.crc.strokeStyle = "white";
        aquarium.crc.stroke(flosse1);
        let flosse2 = new Path2D();
        flosse2.moveTo(_x + 5, _y + 5);
        flosse2.lineTo(_x + 10, _y + 10);
        flosse2.lineTo(_x + 5, _y + 15);
        aquarium.crc.fillStyle = "orange";
        aquarium.crc.fill(flosse2);
        aquarium.crc.strokeStyle = "white";
        aquarium.crc.stroke(flosse2);
        let orangefisheye = new Path2D();
        orangefisheye.arc(_x + 28, _y + 8, 4, 0, 360);
        aquarium.crc.fillStyle = "white";
        aquarium.crc.fill(orangefisheye);
        let orangefisheyepupil = new Path2D();
        orangefisheyepupil.arc(_x + 28, _y + 8, 2, 0, 360);
        aquarium.crc.fillStyle = "black";
        aquarium.crc.fill(orangefisheyepupil);
    }
    function drawbubbles(_x, _y) {
        let bubble = new Path2D();
        bubble.arc(_x + 10, _y, 20, 0, 360);
        //crc.fillStyle = "lightblue";
        //crc.fill(bubble);
        aquarium.crc.strokeStyle = "white";
        aquarium.crc.stroke(bubble);
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
    function drawbluefish(_x, _y) {
        let bluefishbody = new Path2D();
        bluefishbody.arc(_x + 10, _y, 15, 0, 360);
        aquarium.crc.fillStyle = "SteelBlue";
        aquarium.crc.fill(bluefishbody);
        aquarium.crc.strokeStyle = "white";
        aquarium.crc.stroke(bluefishbody);
        let bluefishfloss = new Path2D();
        bluefishfloss.arc(_x, _y + 8, 5, 0, Math.PI);
        aquarium.crc.fillStyle = "SteelBlue";
        aquarium.crc.fill(bluefishfloss);
        let bluefishfloss1 = new Path2D();
        bluefishfloss1.arc(_x - 5, _y - 3, 10, 0, Math.PI);
        aquarium.crc.fillStyle = "SteelBlue";
        aquarium.crc.fill(bluefishfloss1);
        //crc.strokeStyle = "white";
        //crc.stroke(bluefishfloss);
        let bluefisheye = new Path2D();
        bluefisheye.arc(_x + 15, _y, 4, 0, 360);
        aquarium.crc.fillStyle = "white";
        aquarium.crc.fill(bluefisheye);
        let bluefisheyepupil = new Path2D();
        bluefisheyepupil.arc(_x + 15, _y, 2, 0, 360);
        aquarium.crc.fillStyle = "black";
        aquarium.crc.fill(bluefisheyepupil);
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=canvas.js.map