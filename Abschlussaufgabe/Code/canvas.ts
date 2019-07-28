//import { insert } from "./Database";

namespace aquarium {

    document.addEventListener("DOMContentLoaded", init);
    //document.addEventListener("mousedown", food);
    document.addEventListener("keydown", control);
    //document.addEventListener("DOMContentLoaded", name);

    //let serverAdress: string = "http://localhost:8100";

    //document.addEventListener("DOMContentLoaded", hitbox);

    export let crc: CanvasRenderingContext2D;

    export let fishArray: Fish[] = [];
    let mainfishArray: MainFish[] = [];
    let pointArray: Fish[] = [];

    //let gegnerArray: Fish[] = [];

    let fps: number = 30;
    let imageData: ImageData;
    export let canvas: HTMLCanvasElement;

    function init(): void {

        let x: number = 10;
        let y: number = 20;

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        background(x, y);

        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * canvas.width - 150;
            plant(x, y);
        }

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 3; i++) {

            let fisch: Fish = new Fish();
            fishArray.push(fisch);
            //console.log(fisch);
        }

        for (let i: number = 0; i < 5; i++) {

            let bluefish: BlueFish = new BlueFish();
            fishArray.push(bluefish);
            //console.log(bluefish);
        }

        for (let i: number = 0; i < 5; i++) {

            let bubble: Bubbles = new Bubbles();
            fishArray.push(bubble);
            //console.log(bubble);
        }

        for (let i: number = 0; i < 1; i++) {
            let mainfish: MainFish = new MainFish();
            mainfishArray.push(mainfish);
            //console.log(mainfish);

        }

        for (let i: number = 0; i < 10; i++) {
            let plankton: Plankton = new Plankton();
            fishArray.push(plankton);
            //console.log(plankton);

        }

        update();

    }

    //function name(): void {
        //let base: number = 10;
        //let nickname: string = prompt("nickname");
        //insert(nickname);
        //find();
    //}


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
            mainfishArray[0].update(0, 0);
        }

        collision();
    }



    function background(_x: number, _y: number): void {
        let background: Path2D = new Path2D();
        background.moveTo(_x - 10, _y - 20);
        background.rect(_x - 10, _y - 20, 600, 400);

        crc.fillStyle = "lightblue";
        crc.fill(background);

        let riff: Path2D = new Path2D();
        riff.moveTo(_x + 100, _y + 350);
        riff.bezierCurveTo(_x, _y + 100, _x + 500, _y + 250, _x + 250, _y + 400);

        crc.fillStyle = "LightSlateGrey";
        crc.fill(riff);

        let riff2: Path2D = new Path2D();
        riff2.moveTo(_x + 400, _y + 300);
        riff2.bezierCurveTo(_x + 400, _y + 300, _x + 400, _y + 150, _x + 150, _y + 300);

        crc.fillStyle = "SlateGray";
        crc.fill(riff2);

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
        stone1.arc(_x + 10, _y + 360, 10, 0, 360);

        crc.fillStyle = "DarkGrey";
        crc.fill(stone1);

        let stone2: Path2D = new Path2D();
        stone2.arc(_x + 30, _y + 10 + 360, 10, 0, 360);

        crc.fillStyle = "DarkSlateGrey ";
        crc.fill(stone2);

    }

    //function food(_event: MouseEvent): void {
        //let newx: number = _event.clientX;
        //let newy: number = _event.clientY;

        //if (newx <= canvas.width && newy <= canvas.height) {
            //let food: Food = new Food(newx, newy);
            //fishArray.push(food);
        //}
    //}

    function control(_event: KeyboardEvent): void {

        //window.setTimeout(update, 1000 / fps);

        if (_event.keyCode == 68) {
            mainfishArray[0].update(15, 0);
        }
        if (_event.keyCode == 65) {
            mainfishArray[0].update(-15, 0);
        }
        if (_event.keyCode == 87) {
            mainfishArray[0].update(0, -15);
        }
        if (_event.keyCode == 83) {
            mainfishArray[0].update(0, 15);
        }
    }

    function collision(): void {
        for (let i: number = 0; i < fishArray.length; i++) {
            if (fishArray[i].x > mainfishArray[0].x - 10 && fishArray[i].x < mainfishArray[0].x + 10 && fishArray[i].y > mainfishArray[0].y - 10 && fishArray[i].y < mainfishArray[0].y + 10) {
                //(mainfishArray[0].x + 10 <= fishArray[i].x + 10 && mainfishArray[0].y + 5 <= fishArray[i].y - 10 || fishArray[i].x <= mainfishArray[0].x + 10 && mainfishArray[0].y + fishArray[i].y + 10 ) {
                //let deleteIndex: number = 1;
                //fishArray[i].splice(deleteIndex, 1);

                if (mainfishArray[0].size < fishArray[i].size) {
     
                    let playerName: string = prompt("name eingeben");
                    insert(playerName);
                    find();
                    

                }
                else {
                    fishArray.splice(i, 1);

                   
                    let plankton: Plankton = new Plankton();
                    fishArray.push(plankton);
                    let bluefish: BlueFish = new BlueFish();
                    fishArray.push(bluefish);

                    pointArray.push(fishArray[i]);
                    counter();
                    scaleFish();

                }

            }

        }

    }

    export let score: number = pointArray.length;
    function counter(): void {

        document.getElementById("counter").innerHTML = pointArray.length.toString();
    }

    function scaleFish(): void {
        mainfishArray[0].a += 0.2;
        mainfishArray[0].size += 0.2;
    }

}