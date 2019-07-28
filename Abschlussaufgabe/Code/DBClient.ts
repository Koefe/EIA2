namespace aquarium {
    window.addEventListener("load", init);
    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://koellefe.herokuapp.com/";

    function init(_event: Event): void {
        console.log("Init");
        //let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        //let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        //insertButton.addEventListener("click", insert);
        //refreshButton.addEventListener("click", refresh);
    }

    export function insert(_name: string): void {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&score=" + score;

        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    //function refresh(_event: Event): void {
    //let query: string = "command=refresh";
    //sendRequest(query, handleFindResponse); //ist das übergabeparameter oder funktionsaufruf
    //}


    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    export function find(): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerList: Player[] = JSON.parse(xhr.response);
            for (let i: number = 0; i <= playerList.length; i++) {
                let nickname: string = playerList[i].name;
                let playerscore: number = playerList[i].score;
                document.getElementById("highscoreList").innerHTML = "Name:" + nickname + "Score:" + playerscore;

            }
        }
    }
}