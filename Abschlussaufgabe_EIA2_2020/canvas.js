var Zeichenfläche;
(function (Zeichenfläche) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", select);
    //////// - Formen einfügen Versuch 01
    Zeichenfläche.circleArray = [];
    Zeichenfläche.changedArray = [];
    Zeichenfläche.dragArray = [];
    Zeichenfläche.colorArray = [];
    Zeichenfläche.moverArray = [];
    Zeichenfläche.deleteArray = [];
    ////////
    let newClientX = 1;
    let newClientY = 1;
    ////////
    let pushedObject;
    let fps = 30;
    let imageData;
    let backgroundColor = "white";
    let draggedObject = false;
    //export let pushedButton: boolean = false;
    function init() {
        Zeichenfläche.canvas = document.getElementsByTagName("canvas")[0];
        Zeichenfläche.crc = Zeichenfläche.canvas.getContext("2d");
        imageData = Zeichenfläche.crc.getImageData(0, 0, Zeichenfläche.canvas.width, Zeichenfläche.canvas.height);
        let buttonBlue = document.getElementById("blue");
        buttonBlue.addEventListener("click", background);
        let buttonWhite = document.getElementById("white");
        buttonWhite.addEventListener("click", background01);
        let buttonGrey = document.getElementById("grey");
        buttonGrey.addEventListener("click", background02);
        let buttonGreen = document.getElementById("green");
        buttonGreen.addEventListener("click", background03);
        let onchange = document.getElementById("small");
        onchange.addEventListener("change", resizeCanvas_02);
        let onChange01 = document.getElementById("medium");
        onChange01.addEventListener("change", resizeCanvas_03);
        let onChange02 = document.getElementById("large");
        onChange02.addEventListener("change", resizeCanvas_04);
        /////// - Formen Einfügen 01
        let createCircle = document.getElementById("circle");
        createCircle.addEventListener("click", drawCircle);
        ///////
        let edit = document.getElementById("edit");
        edit.addEventListener("change", select);
        update();
        ////////// - Drag Shapes
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Zeichenfläche.crc.clearRect(0, 0, Zeichenfläche.canvas.width, Zeichenfläche.canvas.height);
        let background = new Path2D();
        background.moveTo(0, 0);
        background.rect(0, 0, Zeichenfläche.canvas.width, Zeichenfläche.canvas.height);
        Zeichenfläche.crc.fillStyle = backgroundColor;
        Zeichenfläche.crc.fill(background);
        /////////
        circleDrawUpdate();
        //scale();
    }
    function background() {
        backgroundColor = "lightblue";
    }
    function background01() {
        backgroundColor = "white";
    }
    function background02() {
        backgroundColor = "lightgrey";
    }
    function background03() {
        backgroundColor = "MediumSeaGreen";
    }
    function resizeCanvas_02() {
        let canvas = document.getElementById("myCanvas");
        Zeichenfläche.crc = canvas.getContext("2d");
        canvas.height = 300;
        canvas.width = 300;
    }
    function resizeCanvas_03() {
        let canvas = document.getElementById("myCanvas");
        Zeichenfläche.crc = canvas.getContext("2d");
        canvas.height = 600;
        canvas.width = 600;
    }
    function resizeCanvas_04() {
        let canvas = document.getElementById("myCanvas");
        Zeichenfläche.crc = canvas.getContext("2d");
        canvas.height = 1000;
        canvas.width = 1000;
    }
    /////////// - Formen einfügen Versuch 01
    function drawCircle() {
        let circle = new Zeichenfläche.Circle();
        Zeichenfläche.circleArray.push(circle);
        //console.log(circle);
    }
    //////////
    function circleDrawUpdate() {
        ///////// - Formen einfügen 01
        for (let i = 0; i < Zeichenfläche.circleArray.length; i++) {
            Zeichenfläche.circleArray[i].update();
            //changedArray[i].update();
        }
        for (let i = 0; i < Zeichenfläche.changedArray.length; i++) {
            Zeichenfläche.changedArray[i].update();
            /////////
        }
        for (let i = 0; i < Zeichenfläche.dragArray.length; i++) {
            Zeichenfläche.dragArray[i].update();
            /////////
        }
        for (let i = 0; i < Zeichenfläche.colorArray.length; i++) {
            Zeichenfläche.colorArray[i].update();
            /////////
        }
        for (let i = 0; i < Zeichenfläche.moverArray.length; i++) {
            Zeichenfläche.moverArray[i].update();
            /////////
        }
    }
    // function scale(): void {
    //     for (let i: number = 0; i < circleArray.length; i++) {
    //         //let scaleCircle: HTMLInputElement = <HTMLInputElement>document.getElementById("scale");
    //         this.a + 1;
    //         if (this.a > 5) {
    //             this.a - 1;
    //         }
    //         if (this.a < 1) {
    //             this.a + 1;
    //         }
    //         console.log("hello" + this.a);
    //     }
    // }
    //// - funktioniert noch nicht ganz richtig
    function select(_e) {
        let mouseX = _e.clientX;
        let mouseY = _e.clientY;
        getNewPosition(mouseX, mouseY);
        let edit = document.getElementById("edit");
        if (edit.checked == true) {
            let clientX = _e.clientX;
            let clientY = _e.clientY;
            if (clientX > Zeichenfläche.canvas.width || clientY > Zeichenfläche.canvas.height) {
                console.log("außen");
                return;
            }
            for (let i = 0; i < Zeichenfläche.circleArray.length; i++) {
                let currentX = Zeichenfläche.circleArray[i].x;
                let currentY = Zeichenfläche.circleArray[i].y;
                if (clientX < currentX + 30 && clientX > currentX - 10 && clientY < currentY + 20 && clientY > currentY - 20) {
                    /// -> hier noch die anderen Array reinhauen
                    Zeichenfläche.changedArray.push(Zeichenfläche.circleArray[i]);
                    //circleArray.splice(i);
                    pushedObject = i;
                    //console.log(circleArray);
                    createAnimationButtons();
                    console.log("buutons wurden erstellt");
                    //circleArray.splice(0, 1);
                    //console.log("new circle has been drawn");
                    //neue funktion aufrufen?
                }
            }
        }
    }
    function createAnimationButtons() {
        let buttonDelete = document.createElement("button");
        //buttonDelete.setAttribute("id", "button1");
        buttonDelete.innerHTML = "delete";
        document.getElementById("animations").appendChild(buttonDelete);
        buttonDelete.addEventListener("click", deleteObjects);
        let buttonMove = document.createElement("button");
        buttonDelete.setAttribute("id", "mover");
        buttonMove.innerHTML = "move";
        document.getElementById("animations").appendChild(buttonMove);
        buttonMove.addEventListener("click", moverObjects);
        let buttonDrag = document.createElement("button");
        buttonDrag.innerHTML = "drag";
        document.getElementById("animations").appendChild(buttonDrag);
        buttonDrag.addEventListener("click", dragObjects);
        let buttonColor = document.createElement("button");
        buttonColor.innerHTML = "colorchange";
        document.getElementById("animations").appendChild(buttonColor);
        buttonColor.addEventListener("click", colorObjects);
    }
    function getNewPosition(_x, _y) {
        console.log(_x, _y);
        window.setTimeout(getNewPosition, 1000);
        if (draggedObject == true) {
            console.log("Regina");
            newClientX = _x;
            newClientY = _y;
            drawCircleAtNewLocation();
            //document.getElementById("animations").innerHTML = "";
        }
    }
    function drawCircleAtNewLocation() {
        Zeichenfläche.changedArray[0].x = newClientX;
        Zeichenfläche.changedArray[0].y = newClientY;
        console.log(Zeichenfläche.changedArray[0].x);
        console.log(Zeichenfläche.changedArray[0].y);
        console.log("Jana");
        draggedObject = false;
    }
    function deleteObjects() {
        Zeichenfläche.deleteArray.push(Zeichenfläche.changedArray[0]);
        Zeichenfläche.changedArray.splice(0, 1);
        Zeichenfläche.circleArray.splice(pushedObject, 1);
        // muss das hier durch ne for schleife laufen
        for (let i = 0; i < Zeichenfläche.deleteArray.length; i++) {
            Zeichenfläche.deleteArray.splice(i, 1);
        }
        //console.log(deleteArray.length);
        document.getElementById("animations").innerHTML = "";
    }
    function moverObjects() {
        Zeichenfläche.moverArray.push(Zeichenfläche.changedArray[0]);
        Zeichenfläche.changedArray.splice(0, 1);
        Zeichenfläche.circleArray.splice(pushedObject, 1);
        for (let i = 0; i < Zeichenfläche.moverArray.length; i++) {
            Zeichenfläche.moverArray[i].dx = 1;
            document.getElementById("animations").innerHTML = "";
        }
        //changedArray.splice(0, 1);
    }
    function dragObjects() {
        // hier div auf kreis erstellen und damit Kreis draggen ->
        // dragArray.push(changedArray[0]);
        // changedArray.splice(0, 1);
        // circleArray.splice(pushedObject, 1);
        //for (let i: number = 0; i < changedArray.length; i++) {
        //dragArray.push(changedArray[i]);
        draggedObject = true;
        console.log(draggedObject);
        //}
        //changedArray.splice(0, 1);
    }
    function colorObjects() {
        Zeichenfläche.colorArray.push(Zeichenfläche.changedArray[0]);
        Zeichenfläche.changedArray.splice(0, 1);
        Zeichenfläche.circleArray.splice(pushedObject, 1);
        for (let i = 0; i < Zeichenfläche.colorArray.length; i++) {
            Zeichenfläche.colorArray[i].rainbow = true;
            document.getElementById("animations").innerHTML = "";
        }
        //changedArray.splice(0, 1);
        //console.log(colorArray.length);
    }
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=canvas.js.map