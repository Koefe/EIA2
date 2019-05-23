var DBClient;
(function (DBClient) {
    window.addEventListener("load", init);
    let serverAddress = "http://localhost:8100/";
    // let serverAddress: string = "https://eia2-testserver.herokuapp.com/";
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let filterbutton = document.getElementById("filterbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        filterbutton.addEventListener("click", filter);
    }
    function filter(_event) {
        let inputs = document.getElementById("filterinput");
        let query = "command=filterbutton";
        query += "&matrikel=" + inputs.value;
        sendRequest(query, handleFindResponse);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse); //ist das übergabeparameter oder funktionsaufruf
    }
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
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            //let responseAsJson: JSON = JSON.parse(xhr.response);
            //console.log(responseAsJson);
        }
    }
})(DBClient || (DBClient = {}));
//# sourceMappingURL=DBClient.js.map