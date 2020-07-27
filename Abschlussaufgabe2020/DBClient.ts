namespace Zeichenfläche {

    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://koellefe.herokuapp.com/";


    export function insert(_name: string): void {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + _name;
        
        
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }



    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log(xhr.response);
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
            // let playerList: Circle[] = JSON.parse(xhr.response);
            // for (let i: number = 0; i <= playerList.length; i++) {
            //     let nickname: string = playerList[i].name;
            //     let playerscore: string = playerList[i].score;
            //     document.getElementById("highscoreList").innerHTML = "Name:" + nickname + "Score:" + playerscore;

            //}
        }
    }
}