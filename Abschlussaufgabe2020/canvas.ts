namespace Zeichenfläche {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", select);

    //document.addEventListener("mousedown", getNewPosition);

    export let crc: CanvasRenderingContext2D;

    //////// - Formen einfügen Versuch 01
    export let circleArray: Circle[] = [];
    export let changedArray: Circle[] = [];
    //export let selectedColorArray: Circle[] = [];
    export let colorArray: Circle[] = [];
    export let moverArray: Circle[] = [];
    export let deleteArray: Circle[] = [];
    ////////
    // let newClientX: number = 1;
    // let newClientY: number = 1;
    ////////

    let pushedObject: number;
    let fps: number = 30;
    let imageData: ImageData;
    export let backgroundColor: string = "white";

    let draggedObject: boolean = false;
    let testboolean: boolean = false;
    let buttonsAreCreated: boolean = false;

    export let canvas: HTMLCanvasElement;

    //export let pushedButton: boolean = false;


    function init(): void {

        find();

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        let buttonBlue: HTMLButtonElement = <HTMLButtonElement>document.getElementById("blue");
        buttonBlue.addEventListener("click", background);

        let buttonWhite: HTMLButtonElement = <HTMLButtonElement>document.getElementById("white");
        buttonWhite.addEventListener("click", background01);

        let buttonGrey: HTMLButtonElement = <HTMLButtonElement>document.getElementById("grey");
        buttonGrey.addEventListener("click", background02);

        let buttonGreen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("green");
        buttonGreen.addEventListener("click", background03);

        let onchange: HTMLButtonElement = <HTMLButtonElement>document.getElementById("small");
        onchange.addEventListener("change", resizeCanvas_02);

        let onChange01: HTMLButtonElement = <HTMLButtonElement>document.getElementById("medium");
        onChange01.addEventListener("change", resizeCanvas_03);

        let onChange02: HTMLButtonElement = <HTMLButtonElement>document.getElementById("large");
        onChange02.addEventListener("change", resizeCanvas_04);

        /////// - Formen Einfügen 01
        let createCircle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("circle");
        createCircle.addEventListener("click", drawCircle);
        
        let createRect: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rect");
        createRect.addEventListener("click", drawRect);

        ////////

        let edit: HTMLInputElement = <HTMLInputElement>document.getElementById("edit");
        edit.addEventListener("change", select);

        let savePicture: HTMLButtonElement = <HTMLButtonElement>document.getElementById("save");
        savePicture.addEventListener("click", save);

        /////// - Bilder wiederherstellen - ///////

        let restorePicture1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("restore1");
        restorePicture1.addEventListener("click", picture_1);

        let restorePicture2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("restore2");
        restorePicture2.addEventListener("click", picture_2);

        let restorePicture3: HTMLButtonElement = <HTMLButtonElement>document.getElementById("restore3");
        restorePicture3.addEventListener("click", picture_3);

        update();
        ////////// - Drag Shapes
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);

        crc.clearRect(0, 0, canvas.width, canvas.height);
        let background: Path2D = new Path2D();

        background.moveTo(0, 0);
        background.rect(0, 0, canvas.width, canvas.height);

        crc.fillStyle = backgroundColor;
        crc.fill(background);

        /////////
        circleDrawUpdate();

        //scale();
    }

    function background(): void {

        backgroundColor = "lightblue";
    }

    function background01(): void {

        backgroundColor = "white";
    }

    function background02(): void {

        backgroundColor = "lightgrey";
    }

    function background03(): void {

        backgroundColor = "MediumSeaGreen";
    }

    function resizeCanvas_02(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
        crc = canvas.getContext("2d");

        canvas.height = 400;
        canvas.width = 400;
    }

    function resizeCanvas_03(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
        crc = canvas.getContext("2d");

        canvas.height = 600;
        canvas.width = 600;
    }

    function resizeCanvas_04(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
        crc = canvas.getContext("2d");

        canvas.height = 800;
        canvas.width = 800;
    }

    /////////// - Formen einfügen Versuch 01
    function drawCircle(): void {
        let circle: Circle = new Circle();
        circleArray.push(circle);
        //console.log(circle);
    }

    function drawRect(): void {
        let rect: Rect = new Rect();
        circleArray.push(rect);
        //console.log(rect);
    }
    //////////

    function circleDrawUpdate(): void {
        ///////// - Formen einfügen 01
        for (let i: number = 0; i < circleArray.length; i++) {
            circleArray[i].update();
            //changedArray[i].update();
        }

        for (let i: number = 0; i < changedArray.length; i++) {
            changedArray[i].update();
            /////////
        }

        // for (let i: number = 0; i < selectedColorArray.length; i++) {
        //     selectedColorArray[i].update();
        //     /////////
        // }

        for (let i: number = 0; i < colorArray.length; i++) {
            colorArray[i].update();
            /////////
        }

        for (let i: number = 0; i < moverArray.length; i++) {
            moverArray[i].update();
            /////////
        }

    }

    //// - funktioniert noch nicht ganz richtig
    function select(_e: MouseEvent): void {

        if (_e == undefined) {
            console.log("no parameters");

        }
        //console.log(_e.clientX, _e.clientY);
        let clientX: number = _e.clientX;
        let clientY: number = _e.clientY;

        getNewPosition(clientX, clientY);
        let edit: HTMLInputElement = <HTMLInputElement>document.getElementById("edit");

        if (edit.checked == true) {

            // let clientX: number = _e.clientX;
            // let clientY: number = _e.clientY;

            if (clientX > canvas.width || clientY > canvas.height) {
                console.log("außen");
                return;
            }

            for (let i: number = 0; i < circleArray.length; i++) {

                let currentX: number = circleArray[i].x;
                let currentY: number = circleArray[i].y;


                if (clientX < currentX + 30 && clientX > currentX - 10 && clientY < currentY + 20 && clientY > currentY - 20) {

                    //changedArray.splice(0, 5);

                    if (testboolean == false) {

                        changedArray.push(circleArray[i]);
                        pushedObject = i;

                        if (buttonsAreCreated == false) {
                            createAnimationButtons();
                        }

                        buttonsAreCreated = true;

                        console.log("buttons wurden erstellt");

                    }

                    testboolean = false;
                    //}

                }
            }
        }
    }

    function createAnimationButtons(): void {

        let buttonDelete: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        //buttonDelete.setAttribute("id", "button1");
        buttonDelete.innerHTML = "delete";
        document.getElementById("animations").appendChild(buttonDelete);
        buttonDelete.addEventListener("click", deleteObjects);

        let buttonMove: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        buttonMove.setAttribute("id", "mover");
        buttonMove.innerHTML = "move";
        document.getElementById("animations").appendChild(buttonMove);
        buttonMove.addEventListener("click", moverObjects);

        let buttonDrag: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        buttonDrag.innerHTML = "drag";
        document.getElementById("animations").appendChild(buttonDrag);
        buttonDrag.addEventListener("click", dragObjects);

        let buttonColor: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
        buttonColor.innerHTML = "rainbow";
        document.getElementById("animations").appendChild(buttonColor);
        buttonColor.addEventListener("click", colorObjects);

    }

    function getNewPosition(_x: number, _y: number): void {
        // console.log("ahhhhhhhhhhhhhhh");
        // console.log(_x, _y);

        window.setTimeout(getNewPosition, 10000);
        if (draggedObject == true) {
            console.log("R");
            // newClientX = _x;
            // newClientY = _y;
            drawCircleAtNewLocation(_x, _y);

        }

    }

    function drawCircleAtNewLocation(_newClientX: number, _newClientY: number): void {

        testboolean = true;

        changedArray[0].x = _newClientX;
        changedArray[0].y = _newClientY;

        draggedObject = false;
        //sind noch im flaschen Array, man kann sie nachdem man sie bewegt hat nicht mehr aufheben.
        circleArray.push(changedArray[0]);
        //dragArray.splice(0, 1);
        changedArray.splice(0, 1);

        window.setTimeout(select, 10000);

        document.getElementById("animations").innerHTML = "";
        buttonsAreCreated = false;

    }

    function deleteObjects(): void {
        deleteArray.push(changedArray[0]);
        changedArray.splice(0, 1);
        circleArray.splice(pushedObject, 1);

        // muss hier durch ne for schleife laufen
        for (let i: number = 0; i < deleteArray.length; i++) {
            deleteArray.splice(i, 1);

        }
        //console.log(deleteArray.length);
        buttonsAreCreated = false;
        document.getElementById("animations").innerHTML = "";
    }

    function moverObjects(): void {
        moverArray.push(changedArray[0]);
        changedArray.splice(0, 1);
        circleArray.splice(pushedObject, 1);
        for (let i: number = 0; i < moverArray.length; i++) {
            moverArray[i].dx = 1;

            document.getElementById("animations").innerHTML = "";

            circleArray.push(moverArray[i]);
            moverArray.splice(0, 1);
        }
        buttonsAreCreated = false;
        //changedArray.splice(0, 1);

    }

    function dragObjects(): void {

        circleArray.splice(pushedObject, 1);
        //dragArray.push(changedArray[0]);
        //changedArray.splice(0, 1);

        draggedObject = true;

        document.getElementById("animations").innerHTML = "";

    }

    function colorObjects(): void {
        colorArray.push(changedArray[0]);
        changedArray.splice(0, 1);
        circleArray.splice(pushedObject, 1);
        for (let i: number = 0; i < colorArray.length; i++) {

            colorArray[i].rainbow = true;

            document.getElementById("animations").innerHTML = "";
            circleArray.push(colorArray[i]);
            colorArray.splice(0, 1);

        }
        buttonsAreCreated = false;
    }

    function save(): void {
        let saveName: string = prompt("name your creation");
        insert(saveName);
    }

    function picture_1(): void {
        console.log("hello");
        rebuild(0);
    }

    function picture_2(): void {
        rebuild(1);
    }

    function picture_3(): void {
        rebuild(2);
    }

    function rebuild(_u: number): void {

        console.log("heeey");

        let xPos: string = canvasPic[_u].x;
        let yPos: string = canvasPic[_u].y;
        let background: string = canvasPic[_u].backgroundcolor;
        let type: string = canvasPic[_u].type;
        let rainbow: string = canvasPic[_u].rainbow;
        let move: string = canvasPic[_u].move;
        let width: string = canvasPic[_u].width;

        backgroundColor = background;

        if (width == "400") {
            resizeCanvas_02();
        }
        if (width == "600") {
            resizeCanvas_03();
        }
        if (width == "800") {
            resizeCanvas_03();
        }

        for (let i: number = 0; i < yPos.length; i++) {
            let restoredObject: Object = {
                x: xPos[i],
                y: yPos[i],
                type: type[i],
                rainbow: rainbow[i],
                move: move[i]
            };

            if (restoredObject.type == "circle") {
                let circle: Circle = new Circle();
                circle.x = parseInt(restoredObject.x);
                circle.y = parseInt(restoredObject.y);

                circleArray.push(circle);

                if (restoredObject.rainbow == "true") {
                    circleArray[i].rainbow = true;
                }

                if (restoredObject.move == "true") {
                    circleArray[i].dx = 1;
                }

            }

            if (restoredObject.type == "rec") {
                let circle: Rect = new Rect();
                circle.x = parseInt(restoredObject.x);
                circle.y = parseInt(restoredObject.y);

                

                if (restoredObject.rainbow == "true") {
                    circleArray[i].rainbow = true;
                    circleArray.push(circle);
                }

                if (restoredObject.move == "true") { //&& this.moving == true
                    circleArray[i].dx = 1;
                }

            }

        }
        //update();
    }
}
