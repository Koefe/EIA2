var Zeichenfläche;
(function (Zeichenfläche) {
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://koellefe.herokuapp.com/";
    function insert(_name) {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + _name;
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