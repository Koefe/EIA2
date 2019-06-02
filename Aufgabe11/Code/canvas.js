document.addEventListener("DOMContentLoaded", init);
//Globale Variablen
let canvas;
let crc;
function init() {
    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");
    let x = 10;
    let y = 20;
    background(x, y);
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        //let y: number = Math.random() * canvas.height;
        plant(x, y);
    }
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawfish(x, y);
    }
    for (let i = 0; i < 15; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawbluefish(x, y);
    }
    for (let i = 0; i < 20; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        drawbubbles(x, y);
    }
}
function drawfish(_x, _y) {
    let fishbody = new Path2D();
    fishbody.moveTo(_x + 10, _y);
    fishbody.rect(_x + 10, _y, 20, 20);
    crc.fillStyle = "orange";
    crc.fill(fishbody);
    crc.strokeStyle = "white";
    crc.stroke(fishbody);
    let fishhead = new Path2D();
    fishhead.moveTo(_x + 29, _y);
    fishhead.lineTo(_x + 40, _y + 10);
    fishhead.lineTo(_x + 29, _y + 20);
    crc.fillStyle = "orange";
    crc.fill(fishhead);
    crc.strokeStyle = "white";
    crc.stroke(fishhead);
    let flosse1 = new Path2D();
    flosse1.moveTo(_x + 13, _y - 1);
    flosse1.lineTo(_x + 25, _y);
    flosse1.lineTo(_x + 15, _y - 10);
    crc.fillStyle = "orange";
    crc.fill(flosse1);
    crc.strokeStyle = "white";
    crc.stroke(flosse1);
    let flosse2 = new Path2D();
    flosse2.moveTo(_x + 5, _y + 5);
    flosse2.lineTo(_x + 10, _y + 10);
    flosse2.lineTo(_x + 5, _y + 15);
    crc.fillStyle = "orange";
    crc.fill(flosse2);
    crc.strokeStyle = "white";
    crc.stroke(flosse2);
    let orangefisheye = new Path2D();
    orangefisheye.arc(_x + 28, _y + 8, 4, 0, 360);
    crc.fillStyle = "white";
    crc.fill(orangefisheye);
    let orangefisheyepupil = new Path2D();
    orangefisheyepupil.arc(_x + 28, _y + 8, 2, 0, 360);
    crc.fillStyle = "black";
    crc.fill(orangefisheyepupil);
}
function drawbubbles(_x, _y) {
    let bubble = new Path2D();
    bubble.arc(_x + 10, _y, 20, 0, 360);
    //crc.fillStyle = "lightblue";
    //crc.fill(bubble);
    crc.strokeStyle = "white";
    crc.stroke(bubble);
}
function background(_x, _y) {
    let background = new Path2D();
    background.moveTo(_x - 10, _y - 20);
    background.rect(_x - 10, _y - 20, 600, 400);
    crc.fillStyle = "lightblue";
    crc.fill(background);
    let riff = new Path2D();
    riff.moveTo(_x + 100, _y + 350);
    riff.bezierCurveTo(_x, _y + 100, _x + 500, _y + 250, _x + 250, _y + 400);
    crc.fillStyle = "LightSlateGrey";
    crc.fill(riff);
    let riff2 = new Path2D();
    riff2.moveTo(_x + 400, _y + 300);
    riff2.bezierCurveTo(_x + 400, _y + 300, _x + 400, _y + 150, _x + 150, _y + 300);
    crc.fillStyle = "SlateGray";
    crc.fill(riff2);
    let ground = new Path2D();
    ground.moveTo(_x - 10, _y + 300);
    ground.rect(_x - 10, _y + 300, 600, 400);
    crc.fillStyle = "BurlyWood";
    crc.fill(ground);
}
function plant(_x, _y) {
    let plant1 = new Path2D();
    plant1.moveTo(_x + 100, _y + 350);
    plant1.bezierCurveTo(_x + 50, _y + 300, _x + 150, _y + 200, _x + 100, _y + 170);
    crc.fillStyle = "green";
    crc.fill(plant1);
    let stone1 = new Path2D();
    stone1.arc(_x + 10, _y + 360, 10, 0, 360);
    crc.fillStyle = "DarkGrey";
    crc.fill(stone1);
    let stone2 = new Path2D();
    stone2.arc(_x + 30, _y + 10 + 360, 10, 0, 360);
    crc.fillStyle = "DarkSlateGrey ";
    crc.fill(stone2);
}
function drawbluefish(_x, _y) {
    let bluefishbody = new Path2D();
    bluefishbody.arc(_x + 10, _y, 15, 0, 360);
    crc.fillStyle = "SteelBlue";
    crc.fill(bluefishbody);
    crc.strokeStyle = "white";
    crc.stroke(bluefishbody);
    let bluefishfloss = new Path2D();
    bluefishfloss.arc(_x, _y + 8, 5, 0, Math.PI);
    crc.fillStyle = "SteelBlue";
    crc.fill(bluefishfloss);
    let bluefishfloss1 = new Path2D();
    bluefishfloss1.arc(_x - 5, _y - 3, 10, 0, Math.PI);
    crc.fillStyle = "SteelBlue";
    crc.fill(bluefishfloss1);
    //crc.strokeStyle = "white";
    //crc.stroke(bluefishfloss);
    let bluefisheye = new Path2D();
    bluefisheye.arc(_x + 15, _y, 4, 0, 360);
    crc.fillStyle = "white";
    crc.fill(bluefisheye);
    let bluefisheyepupil = new Path2D();
    bluefisheyepupil.arc(_x + 15, _y, 2, 0, 360);
    crc.fillStyle = "black";
    crc.fill(bluefisheyepupil);
}
//# sourceMappingURL=canvas.js.map