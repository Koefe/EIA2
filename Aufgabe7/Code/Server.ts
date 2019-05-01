import * as Http from "http"; //Hier erstellt man ein HTTP-Object in seinem Code. Der Interpreter läuft dann durch jeden möglichen import im http-Modul und und hängt es nacheinander an das HTTP-object im Code an.

namespace L05_Server {
	console.log("Starting server");
	let port: number = Number(process.env.PORT); //die variable "port" wird deklariert. Das process.env.PORT sagt dem Web-Server auf was für einem PORT er zuhören soll.
	if (!port) //wenn der PORT nicht gefunden wird, dann nehme den PORT 8100
		port = 8100;

	let server: Http.Server = Http.createServer(); //server-variable wird deklariert und der Server wird durch Http.createServer() erstellt
	server.addListener("request", handleRequest); //der Server soll auf verschiedene Event-Listener reagieren. Hier einen request-Listener.
	server.addListener("listening", handleListen); //der Server soll auf verschiedene Event-Listener reagieren. Hier einen listening-Listener.
	server.listen(port); //der Server überwacht den PORT

	function handleListen(): void {  // diese function hat einen Listener (listening), gibt aber nur einen console.log aus auf dem ein String ausgegeben wird.
		console.log("Listening");
	}

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //diese function hat einen Listener (request) und zwei Übergabeparameter. _request fordert die kommende Message/Information an und kann durch _response kann der Server auf diese reagieren und auf verschiedene Informationen zugreifen.
		console.log("I hear voices!"); // auf der Konsole wird ein String ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8"); //der header wird ausgelesen aber die eingegebenen Informationen befinden sich in Warteschlange und werden erst aufgerufen wenn submitted wird.
		_response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin erlaubt zugriff und kontrolle auf den Ursprung. Also darf der Server alles auslesen. 
		_response.write(_request.url); //Infos werden an den client übergeben und in die URL-geschrieben.

		_response.end(); //response endet da alles vollständig ist.
	}
}