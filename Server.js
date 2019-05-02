"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Hier erstellt man ein HTTP-Object in seinem Code. Der Interpreter läuft dann durch jeden möglichen import im http-Moul und und hängt es nacheinander an das HTTP-object im Code an.
var L05_Server;
(function (L05_Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //die variable "port" wird deklariert. Das process.env.PORT sagt dem Web-Server auf was für einem PORT er zuhören soll.
    if (!port) //wenn der PORT nicht gefunden wird, dann nehme den PORT 8100
        port = 8100;
    let server = Http.createServer(); //server-variable wird deklariert und der Server wird durch Http.createServer() erstellt
    server.addListener("request", handleRequest); //der Server soll auf verschiedene Event-Listener reagieren. Hier einen request-Listener.
    server.addListener("listening", handleListen); //der Server soll auf verschiedene Event-Listener reagieren. Hier einen listening-Listener.
    server.listen(port); //der Server überwacht den PORT
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // auf der Konsole wird ein String ausgegeben
        _response.setHeader("content-type", "text/html; charset=utf-8"); //der header wird ausgelesen und
        _response.setHeader("Access-Control-Allow-Origin", "*"); //sendet status und gibt headers an den Client weiter
        _response.write(_request.url); //Infos werden an den client übergeben und in die URL-geschrieben.
        _response.end(); //response endet da alles vollständig ist.
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=Server.js.map