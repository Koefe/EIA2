var Zeichenfläche;
(function (Zeichenfläche) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://koellefe.herokuapp.com/";
    let savedPicturesInDatabase;
    function insert(_name) {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&backgroundcolor=" + Zeichenfläche.backgroundColor;
        query += "&canvasWidth=" + Zeichenfläche.canvas.width;
        for (let i = 0; i < Zeichenfläche.circleArray.length; i++) {
            //if (circleArray[i].dx >= 0) {
            //    circleArray[i].moving = true;
            //}
            let circle = {
                x: Zeichenfläche.circleArray[i].x.toString(),
                y: Zeichenfläche.circleArray[i].y.toString(),
                type: Zeichenfläche.circleArray[i].type,
                rainbow: Zeichenfläche.circleArray[i].rainbow.toString(),
                move: Zeichenfläche.circleArray[i].moving.toString()
            };
            query += "&X=" + circle.x + "&Y=" + circle.y + "&type=" + circle.type + "&rainbow=" + circle.rainbow + "&move=" + circle.move;
        }
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Zeichenfläche.insert = insert;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log(xhr.response);
            alert(xhr.response);
        }
    }
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    Zeichenfläche.find = find;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            Zeichenfläche.canvasPic = JSON.parse(xhr.response);
            savedPicturesInDatabase = Zeichenfläche.canvasPic.length;
            console.log(Zeichenfläche.canvasPic);
            if (savedPicturesInDatabase == 0) {
                return;
            }
            document.getElementById("restore1").innerText = Zeichenfläche.canvasPic[0].name;
            if (savedPicturesInDatabase == 1) {
                return;
            }
            document.getElementById("restore2").innerText = Zeichenfläche.canvasPic[1].name;
            if (savedPicturesInDatabase == 2) {
                return;
            }
            document.getElementById("restore3").innerText = Zeichenfläche.canvasPic[2].name;
            if (savedPicturesInDatabase == 3) {
                return;
            }
            document.getElementById("restore4").innerText = Zeichenfläche.canvasPic[3].name;
            if (savedPicturesInDatabase == 4) {
                return;
            }
            document.getElementById("restore5").innerText = Zeichenfläche.canvasPic[4].name;
            if (savedPicturesInDatabase == 5) {
                return;
            }
            document.getElementById("restore6").innerText = Zeichenfläche.canvasPic[5].name;
            //document.getElementById("restore7").innerText = canvasPic[6].name;
            // let playerList: Circle[] = JSON.parse(xhr.response);
            // for (let i: number = 0; i <= playerList.length; i++) {
            //     let nickname: string = playerList[i].name;
            //     let playerscore: string = playerList[i].score;
            //     document.getElementById("highscoreList").innerHTML = "Name:" + nickname + "Score:" + playerscore;
            //}
        }
    }
})(Zeichenfläche || (Zeichenfläche = {}));
//# sourceMappingURL=DBClient.js.map