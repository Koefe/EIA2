var aquarium;
(function (aquarium) {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress = "https://koellefe.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        //let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        //let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        //insertButton.addEventListener("click", insert);
        //refreshButton.addEventListener("click", refresh);
    }
    function insert(_name) {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + _name;
        query += "&score=" + aquarium.score;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    aquarium.insert = insert;
    //function refresh(_event: Event): void {
    //let query: string = "command=refresh";
    //sendRequest(query, handleFindResponse); //ist das übergabeparameter oder funktionsaufruf
    //}
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function find() {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    aquarium.find = find;
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerList = JSON.parse(xhr.response);
            for (let i = 0; i <= playerList.length; i++) {
                let nickname = playerList[i].name;
                let playerscore = playerList[i].score;
                document.getElementById("highscoreList").innerHTML = "Name:" + nickname + "Score:" + playerscore;
            }
        }
    }
})(aquarium || (aquarium = {}));
//# sourceMappingURL=DBClient.js.map