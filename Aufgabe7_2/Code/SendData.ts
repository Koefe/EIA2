namespace SendData {
    window.addEventListener("load", init);
    let address: string = "https://koellefe.herokuapp.com/";

    function init(_event: Event): void {
        let button: HTMLElement = document.getElementById("bestellen");
        button.addEventListener("click", handleClickOnButton);
    }

    function handleClickOnButton(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
    }

}