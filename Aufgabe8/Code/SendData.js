var SendData;
(function (SendData) {
    window.addEventListener("load", init);
    let address = "https://koellefe.herokuapp.com/";
    function init(_event) {
        let button = document.getElementById("bestellen");
        button.addEventListener("click", handleClickOnButton);
    }
    function handleClickOnButton(_event) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", address);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }
    function handleStateChange(_event) {
        var xhr = _event.target;
    }
})(SendData || (SendData = {}));
//# sourceMappingURL=SendData.js.map