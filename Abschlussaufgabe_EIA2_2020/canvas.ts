namespace Zeichenfläche {

    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", select);
    //document.addEventListener("mousedown", getNewPosition);

    export let crc: CanvasRenderingContext2D;

    //////// - Formen einfügen Versuch 01
    export let circleArray: Circle[] = [];
    export let changedArray: Circle[] = [];
    export let dragArray: Circle[] = [];
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
    let backgroundColor: string = "white";

    let draggedObject: boolean = false;
    let testboolean: boolean = false;

    export let canvas: HTMLCanvasElement;

    //export let pushedButton: boolean = false;


    function init(): void {

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
        ///////
        let createRect: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rect");
        createRect.addEventListener("click", drawRect);

        let edit: HTMLInputElement = <HTMLInputElement>document.getElementById("edit");
        edit.addEventListener("change", select);

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

        canvas.height = 300;
        canvas.width = 300;
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

        canvas.height = 1000;
        canvas.width = 1000;
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
        console.log(rect);
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

        for (let i: number = 0; i < dragArray.length; i++) {
            dragArray[i].update();

            /////////
        }

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

        console.log(_e.clientX, _e.clientY);

        getNewPosition(_e.clientX, _e.clientY);
        let edit: HTMLInputElement = <HTMLInputElement>document.getElementById("edit");

        if (edit.checked == true) {

            let clientX: number = _e.clientX;
            let clientY: number = _e.clientY;

            if (clientX > canvas.width || clientY > canvas.height) {
                console.log("außen");
                return;
            }

            for (let i: number = 0; i < circleArray.length; i++) {

                let currentX: number = circleArray[i].x;
                let currentY: number = circleArray[i].y;


                if (clientX < currentX + 30 && clientX > currentX - 10 && clientY < currentY + 20 && clientY > currentY - 20) {
                    
                        /// -> hier noch die anderen Array reinhauen
                        changedArray.push(circleArray[i]);
                        pushedObject = i;
                        
                        if (testboolean == false) {
                        createAnimationButtons();
                        console.log("buutons wurden erstellt");
                        }

                        testboolean = false;
                    
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
        buttonColor.innerHTML = "colorchange";
        document.getElementById("animations").appendChild(buttonColor);
        buttonColor.addEventListener("click", colorObjects);

    }

    function getNewPosition(_x: number, _y: number): void {
        console.log("ahhhhhhhhhhhhhhh");
        console.log(_x, _y);
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
        dragArray[0].x = _newClientX;
        dragArray[0].y = _newClientY;

        draggedObject = false;
        //sind noch im flaschen Array, man kann sie nachdem man sie bewegt hat nicht mehr aufheben.
        circleArray.push(dragArray[0]);
        dragArray.splice(0, 1);
        
        // window.setTimeout(drawCircleAtNewLocation, 10000);
        // document.getElementById("animations").innerHTML = "";

        //testboolean = true;

        window.setTimeout(select, 10000);

        document.getElementById("animations").innerHTML = "";


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

        document.getElementById("animations").innerHTML = "";
    }

    function moverObjects(): void {
        moverArray.push(changedArray[0]);
        changedArray.splice(0, 1);
        circleArray.splice(pushedObject, 1);
        for (let i: number = 0; i < moverArray.length; i++) {
            moverArray[i].dx = 1;

            document.getElementById("animations").innerHTML = "";

        }
        //changedArray.splice(0, 1);

    }

    function dragObjects(): void {

        dragArray.push(changedArray[0]);
        changedArray.splice(0, 1);
        circleArray.splice(pushedObject, 1);

        draggedObject = true;
        console.log(draggedObject);

        document.getElementById("animations").innerHTML = "";

    }

    function colorObjects(): void {
        colorArray.push(changedArray[0]);
        changedArray.splice(0, 1);
        circleArray.splice(pushedObject, 1);
        for (let i: number = 0; i < colorArray.length; i++) {

            colorArray[i].rainbow = true;

            document.getElementById("animations").innerHTML = "";

        }

    }

}

