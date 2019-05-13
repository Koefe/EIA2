namespace SendData {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100/?";
    let address: string = "https://koellefe.herokuapp.com/";


    function init(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("asynchron_bestellen");
        button.addEventListener("click", handleClickOnButton);
    }

    function handleClickOnButton(_event: Event): void {
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let getString: string = "?";

        for (let i: number = 0; i < input.length; i++) {
            //address += input[i].className + "=" + input[i].value + "&";
            //if (input[i].checked == true) {
            //    getString += input[i].className;
            //}
            //else if (input[i].value > "0") {
            //   getString += input[i].className += input[i].value + "&"; 

            if (input[i].value != "" && input[i].value != "0" && input[i].type != "radio") {
                getString += input[i].name + "=" + input[i].value + "&";
            }

            if (input[i].type == "radio" && input[i].checked) {
                getString += input[i].className + "&";
            }

            if (input[i].type == "checkbox" && input[i].checked) {
                getString += input[i].className + "&";
            }

        }

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + getString, true);
        xhr.addEventListener("readystatechange", handleStateChange); //wartet darauf das server antwortet
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            //document.getElementById("serverBestellung").innerHTML = xhr.response;

            let zutaten: HTMLElement = document.createElement("p");
            let uberschrift: HTMLElement = document.createElement("h2");
            uberschrift.innerHTML = "Bestellzusammenfassung:";
            document.getElementById("serverBestellung").appendChild(uberschrift);
            zutaten.innerHTML = `${xhr.response}`;
            document.getElementById("serverBestellung").appendChild(zutaten);


        }

    }


}