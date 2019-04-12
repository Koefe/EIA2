
namespace MauMau {

    interface Spielkarte {
        zahl: string;
        //rot: boolean;
        farbe: string;
        symbol: string;
        //zwei_ziehen: boolean; 
        //aussetzten: boolean;
        //wünschen: boolean;
        //allesleger: boolean;
    }

    let karte01: Spielkarte = {
        zahl: "7",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte02: Spielkarte = {
        zahl: "8",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte03: Spielkarte = {
        zahl: "9",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte04: Spielkarte = {
        zahl: "10",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte05: Spielkarte = {
        zahl: "Bube",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte06: Spielkarte = {
        zahl: "Dame",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte07: Spielkarte = {
        zahl: "Koenig",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte08: Spielkarte = {
        zahl: "Ass",
        //rot: true,
        farbe: "rot",
        symbol: "Karo",
    }

    let karte09: Spielkarte = {
        zahl: "7",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte10: Spielkarte = {
        zahl: "8",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte11: Spielkarte = {
        zahl: "9",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte12: Spielkarte = {
        zahl: "10",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte13: Spielkarte = {
        zahl: "Bube",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte14: Spielkarte = {
        zahl: "Dame",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte15: Spielkarte = {
        zahl: "Koenig",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte16: Spielkarte = {
        zahl: "Ass",
        //rot: true,
        farbe: "rot",
        symbol: "Herz",
    }

    let karte17: Spielkarte = {
        zahl: "7",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte18: Spielkarte = {
        zahl: "8",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte19: Spielkarte = {
        zahl: "9",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte20: Spielkarte = {
        zahl: "10",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte21: Spielkarte = {
        zahl: "Bube",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte22: Spielkarte = {
        zahl: "Dame",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte23: Spielkarte = {
        zahl: "Koenig",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte24: Spielkarte = {
        zahl: "Ass",
        //rot: false,
        farbe: "schwarz",
        symbol: "Piek",
    }

    let karte25: Spielkarte = {
        zahl: "7",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte26: Spielkarte = {
        zahl: "8",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte27: Spielkarte = {
        zahl: "9",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte28: Spielkarte = {
        zahl: "10",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte29: Spielkarte = {
        zahl: "Bube",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte30: Spielkarte = {
        zahl: "Dame",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte31: Spielkarte = {
        zahl: "Koenig",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    let karte32: Spielkarte = {
        zahl: "Ass",
        //rot: false,
        farbe: "schwarz",
        symbol: "Kreuz",
    }

    //Arrays

    let ziehstapel: Spielkarte[] = [karte01, karte02, karte03, karte04, karte05, karte06, karte07, karte08, karte09, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32];

    let handstapel: Spielkarte[] = [];

    let spielstapel: Spielkarte[] = [];

    document.addEventListener("DOMContentLoaded", anzahlHandkarten);
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", definieren);
    //document.addEventListener("DOMContentLoaded", keydown)

    function anzahlHandkarten(): void {
        let base = 10;
        let promptValue: string = prompt("Anzahl der Karten eingeben");
        let anzahl = parseInt(promptValue, base);
        kartenInHandstapel(anzahl);
    }

    function kartenInHandstapel(_anzahl: number): void {
        let k: number = 0;
        for (let i: number = 0; i < _anzahl; i++) {
            k = Math.floor(Math.random() * ziehstapel.length);
            handstapel.push(ziehstapel[k]);
            let removed = ziehstapel.splice(k, 1);

            placeHandstapel(handstapel[i], i);  //stimmt hier nur, da es durch den loop läuft und die Karten generiert. Aber eben nur stellen aus ziehstapel und nicht aus Handstapel
            //console.log(Ziehstapel)
            //console.log(Handstapel)
        }

        //console.log(Handstapel)
        //let x : number = k  // verändert
        //placeHandstapel(Handstapel[x]) //versuch
        kartenInSpielstapel();

        //placeZiehstapel(Ziehstapel[k]) //wird ausgeführt (also eine Karte ist sichtbar, da dort _k (also die wo im SPielstapel ist) gerendert wird)

        //placeZiehstapel(Ziehstapel[k])

        for (let i: number = 0; i < ziehstapel.length; i++) {
            placeZiehstapel(ziehstapel[i], i);
        }

    }

    function kartenInSpielstapel(): void {
        let i: number = 0;
        let k: number = Math.floor(Math.random() * ziehstapel.length);
        spielstapel.push(ziehstapel[k]);
        let removed = ziehstapel.splice(k, 1);

        placeSpielStapel(spielstapel[i]);

    }

    function placeHandstapel(_k: Spielkarte, _i: number): void { //verändert

        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Handstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;


        document.getElementById("Handkasten").appendChild(prodElement);
    }

    function placeZiehstapel(_k: Spielkarte, _i: number): void {         //k : number
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Ziehstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;


        document.getElementById("Ziehkasten").appendChild(prodElement);
    }

    //k is undefined?

    function placeSpielStapel(_k: Spielkarte): void {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Spielstapel">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;


        document.getElementById("Spielkasten").appendChild(prodElement);
    }

    //Neue Aufgabe4

    function init(): void {
        for (let i: number = 0; i < handstapel.length; i++) {
            let handkartenEvent: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("Handstapel")[i];
            handkartenEvent.addEventListener("click", handstapelInSpielstapel);
        }
    }

    //Von Handstapel auf den Spielstapel

    function handstapelInSpielstapel(_event: Event): void {
        console.log(_event);
        let geklickteKarte: HTMLFieldSetElement = <HTMLFieldSetElement>_event.target;
        let kartenId: string = geklickteKarte.id;    //kartenId ist Id von geklickterKarte
        let kartenIdNummer: number = Number(kartenId);  //kartenId ist ein string und wird in Nummer umgewandelt
        let kartenInSpielstapel: Spielkarte = handstapel[kartenIdNummer]; //aus dem Handstapel wird die Karte mit der gewählten Id gepushed
        spielstapel.push(handstapel[kartenIdNummer]);
        handstapel.splice(kartenIdNummer, 1);
        placeSpielStapel(kartenInSpielstapel);
        placeHandstapelLeeren(kartenIdNummer);
        init();
    }

    function placeHandstapelLeeren(_kartenIdNummer: number): void {
        document.getElementById("Handkasten").innerHTML = "";
        for (let i: number = 0; i < handstapel.length; i++) {
            placeHandstapelAktualisiert(handstapel[i], i)
        }
    }

    function placeHandstapelAktualisiert(_k: Spielkarte, _i: number): void {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Handstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;
        document.getElementById("Handkasten").appendChild(prodElement);
    }

    // von dem Ziehstapel in den Handstapel

    function definieren(): void {
        for (let i: number = 0; i <= ziehstapel.length; i++) {
            let handkartenEvent: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementsByClassName("Ziehstapel")[i];
            handkartenEvent.addEventListener("click", vonZiehstapelInHandstapel);
        }
    }

    function vonZiehstapelInHandstapel(): void {
        let k: number = Math.floor(Math.random() * ziehstapel.length);
        handstapel.push(ziehstapel[k]);
        ziehstapel.splice(k, 1);
        document.getElementById("Handkasten").innerHTML = "";
        for (let i: number = 0; i < handstapel.length; i++) {
            placeHandstapelneu(handstapel[i], i)
        }
        init()
    }

    function placeHandstapelneu(_k: Spielkarte, _i: number): void {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Handstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;
        document.getElementById("Handkasten").appendChild(prodElement);
    }


    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 32) {
            vonZiehstapelInHandstapel();
        }
    })

   
    
}
