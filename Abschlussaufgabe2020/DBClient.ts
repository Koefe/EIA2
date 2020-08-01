namespace Zeichenfläche {

    export interface Object {
        x: string;
        y: string;
        type: string;
        rainbow: string;
        move: string;
    }
    export let canvasPic: CanvasElement[];

    //let serverAddress: string = "http://localhost:8100/";
    let serverAddress: string = "https://koellefe.herokuapp.com/";


    export function insert(_name: string): void {
        //let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + _name;
        query += "&backgroundcolor=" + backgroundColor;
        query += "&canvasWidth=" + canvas.width;

        for (let i: number = 0; i < circleArray.length; i++) {
            if (circleArray[i].dx >= 0) {
                circleArray[i].moving = true;
            }
            let circle: Object = {
                x: circleArray[i].x.toString(),
                y: circleArray[i].y.toString(),
                type: circleArray[i].type,
                rainbow: circleArray[i].rainbow.toString(),
                move: circleArray[i].moving.toString()
            };

            query += "&X=" + circle.x + "&Y=" + circle.y + "&type=" + circle.type + "&rainbow=" + circle.rainbow + "&move=" + circle.move;
        }

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

            
            canvasPic = JSON.parse(xhr.response);
            console.log(canvasPic);

            document.getElementById("restore1").innerText = canvasPic[0].name;
            document.getElementById("restore2").innerText = canvasPic[1].name;
            document.getElementById("restore3").innerText = canvasPic[2].name;
            // let playerList: Circle[] = JSON.parse(xhr.response);
            // for (let i: number = 0; i <= playerList.length; i++) {
            //     let nickname: string = playerList[i].name;
            //     let playerscore: string = playerList[i].score;
            //     document.getElementById("highscoreList").innerHTML = "Name:" + nickname + "Score:" + playerscore;

            //}
        }
    }
}