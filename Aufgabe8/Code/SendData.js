var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    let address = "http://localhost:8100/";
    //let address: string = "https://koellefe.herokuapp.com/";
    function init(_event) {
        let button = document.getElementById("bestellen");
        button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address, true);
        xhr.addEventListener("readystatechange", handleStateChange); //wartet darauf das server antwortet
        xhr.send();
    }
    function handleStateChange(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=SendData.js.map