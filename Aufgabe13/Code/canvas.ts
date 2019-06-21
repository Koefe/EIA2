namespace aquarium {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", food);
    export let crc: CanvasRenderingContext2D;

    let fishArray: Fish[] = [];
    //let blueFishArray: BlueFish[] = [];
    //let bubbleArray: Bubbles[] = [];

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
            //let y: number = Math.random() * canvas.height;
            plant(x, y);
        }

        //plant(x, y);
        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);


        for (let i: number = 0; i < 10; i++) {

            let fische: Fish = new Fish() ;
            fishArray.push(fische);
            console.log(fische);
            
            
        }

        for (let i: number = 0; i < 10; i++) {

            let bluefish: BlueFish = new BlueFish();
            fishArray.push(bluefish);
            console.log(bluefish);
        }

        for (let i: number = 0; i < 20; i++) {
  
            let bubble: Bubbles = new Bubbles();
            fishArray.push(bubble);
            console.log(bubble);
        }

        update();


    }


    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < fishArray.length; i++) {
            fishArray[i].update();
        }
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

    function food(_event: MouseEvent): void {
        let newx: number = _event.clientX;
        let newy: number = _event.clientY;

        if (newx <= canvas.width && newy <= canvas.height) {
            let food: Food = new Food(newx, newy);
            fishArray.push(food);
        }
    }
}