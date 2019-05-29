document.addEventListener("DOMContentLoaded", init);

//Globale Variablen

let canvas: HTMLCanvasElement;
let crc: CanvasRenderingContext2D;

function init(): void {

    canvas = document.getElementsByTagName("canvas")[0];
    crc = canvas.getContext("2d");

    let x: number = 10;
    let y: number = 20;
    background(x, y);

    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        //let y: number = Math.random() * canvas.height;
        plant(x, y);
        }
    
    for (let i: number = 0; i < 10; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        drawfish(x, y); }
    
    for (let i: number = 0; i < 20; i++) {
        let x: number = Math.random() * canvas.width;
        let y: number = Math.random() * canvas.height;
        drawbubbles(x, y);
        }

}

function drawfish(_x: number, _y: number): void {
    let fishbody: Path2D = new Path2D();
    fishbody.moveTo(_x + 10, _y);
    fishbody.rect(_x + 10, _y, 20, 20);

    crc.fillStyle = "orange";
    crc.fill(fishbody);

    crc.strokeStyle = "white";
    crc.stroke(fishbody);

    let fishhead: Path2D = new Path2D();

    fishhead.moveTo(_x + 29, _y);
    fishhead.lineTo(_x + 40, _y + 10);
    fishhead.lineTo(_x + 29, _y + 20);

    crc.fillStyle = "orange";
    crc.fill(fishhead);

    crc.strokeStyle = "white";
    crc.stroke(fishhead);

    let flosse1: Path2D = new Path2D();

    flosse1.moveTo(_x + 13, _y - 1);
    flosse1.lineTo(_x + 25, _y);
    flosse1.lineTo(_x + 15, _y - 10);

    crc.fillStyle = "orange";
    crc.fill(flosse1);

    crc.strokeStyle = "white";
    crc.stroke(flosse1);

    let flosse2: Path2D = new Path2D();

    flosse2.moveTo(_x + 5, _y + 5);
    flosse2.lineTo(_x + 10, _y +  10);
    flosse2.lineTo(_x + 5, _y + 15);

    crc.fillStyle = "orange";
    crc.fill(flosse2);

    crc.strokeStyle = "white";
    crc.stroke(flosse2);


}

function drawbubbles(_x: number, _y: number): void {
    let bubble: Path2D = new Path2D();
    bubble.arc(_x + 10, _y, 20, 0, 360);
    //crc.fillStyle = "lightblue";
    //crc.fill(bubble);

    crc.strokeStyle = "white";
    crc.stroke(bubble);

}

function background(_x: number, _y: number): void {
    let background: Path2D = new Path2D();
    background.moveTo(_x - 10, _y - 20);
    background.rect(_x - 10, _y - 20, 600, 400);

    crc.fillStyle = "lightblue";
    crc.fill(background);

    let riff: Path2D = new Path2D();
    riff.moveTo(_x + 100, _y + 350);
    riff.bezierCurveTo(_x , _y + 100, _x + 500, _y + 250, _x + 250, _y + 400);

    crc.fillStyle = "LightSlateGrey ";
    crc.fill(riff);

    let ground: Path2D = new Path2D();
    ground.moveTo(_x - 10, _y + 300);
    ground.rect(_x - 10, _y + 300, 600, 400);

    crc.fillStyle = "BurlyWood";
    crc.fill(ground);


}

function plant(_x: number, _y: number): void {
    let plant1: Path2D = new Path2D();
    plant1.moveTo(_x + 100, _y + 350);
    plant1.bezierCurveTo(_x + 50, _y + 300, _x + 150, _y + 200, _x + 100, _y + 170);

    crc.fillStyle = "green";
    crc.fill(plant1);

    let stone1: Path2D = new Path2D();
    stone1.arc(_x + 10 , _y + 360, 10, 0, 360);

    crc.fillStyle = "DarkGrey";
    crc.fill(stone1);

    let stone2: Path2D = new Path2D();
    stone2.arc(_x + 30 , _y + 10 + 360, 10, 0, 360);

    crc.fillStyle = "DarkSlateGrey ";
    crc.fill(stone2);
}