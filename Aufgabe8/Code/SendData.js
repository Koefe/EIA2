var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    //let address: string = "http://localhost:8100/?";
    let address = "https://koellefe.herokuapp.com?";
    let input = document.getElementsByTagName("input");
    function init(_event) {
        let button = document.getElementById("bestellen");
        button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        for (let i = 0; i < input.length; i++) {
            //address += input[i].className + "=" + input[i].value + "&";
            if (input[i].checked == true) {
                address += input[i].className;
            }
            else if (input[i].value > "0") {
                address += input[i].className += input[i].value;
            }
        }
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address, true);
        xhr.addEventListener("readystatechange", handleStateChange); //wartet darauf das server antwortet
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            document.getElementById("zusammenfassung").innerHTML = xhr.response;
            //let order: HTMLElement = document.createElement("p");
            //let heading: HTMLElement = document.createElement("h2");
            //heading.innerHTML = "Ihre Bestellzusammenfassung:";
            //document.getElementById("zusammenfassung").appendChild(heading);
            //order.innerHTML = `${xhr.response}`;
            //document.getElementById("zusammenfassung").appendChild(order);
        }
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=SendData.js.map