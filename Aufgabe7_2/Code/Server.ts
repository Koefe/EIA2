import * as Http from "http";


namespace Server {

    //let address: string = "https://koellefe.herokuapp.com/";

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //diese function hat einen Listener (request) und zwei Übergabeparameter. _request fordert die kommende Message/Information an und kann durch _response kann der Server auf diese reagieren und auf verschiedene Informationen zugreifen.
		console.log("wtf"); // auf der Konsole wird ein String ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8"); //der header wird ausgelesen aber die eingegebenen Informationen befinden sich in Warteschlange und werden erst aufgerufen wenn submitted wird.
		_response.setHeader("Access-Control-Allow-Origin", "*"); //Access-Control-Allow-Origin erlaubt zugriff und kontrolle auf den Ursprung. Also darf der Server alles auslesen. 
		_response.write(_request.url); //Infos werden an den client übergeben und in die URL-geschrieben.

		_response.end();
}
}