var Zeichenfläche;
(function (Zeichenfläche) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", select);
    //////// - Formen einfügen Versuch 01
    Zeichenfläche.circleArray = [];
    Zeichenfläche.changedArray = [];
    Zeichenfläche.selectedColorArray = [];
    Zeichenfläche.colorArray = [];
    Zeichenfläche.moverArray = [];
    Zeichenfläche.deleteArray = [];
    ////////
    // let newClientX: number = 1;
    // let newClientY: number = 1;
    ////////
    let pushedObject;
    let fps = 30;
    let imageData;
    let backgroundColor = "white";
    let draggedObject = false;
    let testboolean = false;
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
        let createRect = document.getElementById("rect");
        createRect.addEventListener("click", drawRect);
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
        canvas.height = 400;
        canvas.width = 400;
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
        canvas.height = 800;
        canvas.width = 800;
    }
    /////////// - Formen einfügen Versuch 01
    function drawCircle() {
        let circle = new Zeichenfläche.Circle();
        Zeichenfläche.circleArray.push(circle);
        //console.log(circle);
    }
    function drawRect() {
        let rect = new Zeichenfläche.Rect();
        Zeichenfläche.circleArray.push(rect);
        //console.log(rect);
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
        for (let i = 0; i < Zeichenfläche.selectedColorArray.length; i++) {
            Zeichenfläche.selectedColorArray[i].update();
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
    //// - funktioniert noch nicht ganz richtig
    function select(_e) {
        if (_e == undefined) {
            console.log("no parameters");
        }
        //console.log(_e.clientX, _e.clientY);
        let clientX = _e.clientX;
        let clientY = _e.clientY;
        getNewPosition(clientX, clientY);
        let edit = document.getElementById("edit");
        if (edit.checked == true) {
            // let clientX: number = _e.clientX;
            // let clientY: number = _e.clientY;
            if (clientX > Zeichenfläche.canvas.width || clientY > Zeichenfläche.canvas.height) {
                console.log("außen");
                return;
            }
            for (let i = 0; i < Zeichenfläche.circleArray.length; i++) {
                let currentX = Zeichenfläche.circleArray[i].x;
                let currentY = Zeichenfläche.circleArray[i].y;
                if (clientX < currentX + 30 && clientX > currentX - 10 && clientY < currentY + 20 && clientY > currentY - 20) {
                    /// -> hier noch die anderen Array reinhauen
                    // changedArray.push(circleArray[i]);
                    // pushedObject = i;
                    if (testboolean == false) {
                        Zeichenfläche.changedArray.push(Zeichenfläche.circleArray[i]);
                        pushedObject = i;
                        createAnimationButtons();
                        console.log("buutons wurden erstellt");
                    }
                    testboolean = false;
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
        buttonMove.setAttribute("id", "mover");
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
        //////////////////////////////////////// COLOR CHANGE SINGLE ////////////////////////////////////////
    }
    function getNewPosition(_x, _y) {
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
    function drawCircleAtNewLocation(_newClientX, _newClientY) {
        testboolean = true;
        Zeichenfläche.changedArray[0].x = _newClientX;
        Zeichenfläche.changedArray[0].y = _newClientY;
        draggedObject = false;
        //sind noch im flaschen Array, man kann sie nachdem man sie bewegt hat nicht mehr aufheben.
        Zeichenfläche.circleArray.push(Zeichenfläche.changedArray[0]);
        //dragArray.splice(0, 1);
        Zeichenfläche.changedArray.splice(0, 1);
        window.setTimeout(select, 10000);
        document.getElementById("animations").innerHTML = "";
    }
    function deleteObjects() {
        Zeichenfläche.deleteArray.push(Zeichenfläche.changedArray[0]);
        Zeichenfläche.changedArray.splice(0, 1);
        Zeichenfläche.circleArray.splice(pushedObject, 1);
        // muss hier durch ne for schleife laufen
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
            Zeichenfläche.circleArray.push(Zeichenfläche.moverArray[i]);
            Zeichenfläche.moverArray.splice(0, 1);
        }
        //changedArray.splice(0, 1);
    }
    function dragObjects() {
        Zeichenfläche.circleArray.splice(pushedObject, 1);
        //dragArray.push(changedArray[0]);
        //changedArray.splice(0, 1);
        draggedObject = true;
        document.getElementById("animations").innerHTML = "";
    }
    function colorObjects() {
        Zeichenfläche.colorArray.push(Zeichenfläche.changedArray[0]);
        Zeichenfläche.changedArray.splice(0, 1);
        Zeichenfläche.circleArray.splice(pushedObject, 1);
        for (let i = 0; i < Zeichenfläche.colorArray.length; i++) {
            Zeichenfläche.colorArray[i].rainbow = true;
            document.getElementById("animations").innerHTML = "";
            Zeichenfläche.circleArray.push(Zeichenfläche.colorArray[i]);
            Zeichenfläche.colorArray.splice(0, 1);
        }
    }
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=canvas.js.map