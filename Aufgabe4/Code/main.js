var MauMau;
(function (MauMau) {
    let karte01 = {
        zahl: "7",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte02 = {
        zahl: "8",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte03 = {
        zahl: "9",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte04 = {
        zahl: "10",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte05 = {
        zahl: "Bube",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte06 = {
        zahl: "Dame",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte07 = {
        zahl: "Koenig",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte08 = {
        zahl: "Ass",
        //rot: true,
        farbe: "rot",
        symbol: "♦",
        karten_wert_symbol: "1",
    };
    let karte09 = {
        zahl: "7",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte10 = {
        zahl: "8",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte11 = {
        zahl: "9",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte12 = {
        zahl: "10",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte13 = {
        zahl: "Bube",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte14 = {
        zahl: "Dame",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte15 = {
        zahl: "Koenig",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte16 = {
        zahl: "Ass",
        //rot: true,
        farbe: "rot",
        symbol: "♥",
        karten_wert_symbol: "2",
    };
    let karte17 = {
        zahl: "7",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte18 = {
        zahl: "8",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte19 = {
        zahl: "9",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte20 = {
        zahl: "10",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte21 = {
        zahl: "Bube",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte22 = {
        zahl: "Dame",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte23 = {
        zahl: "Koenig",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte24 = {
        zahl: "Ass",
        //rot: false,
        farbe: "schwarz",
        symbol: "♠",
        karten_wert_symbol: "3",
    };
    let karte25 = {
        zahl: "7",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte26 = {
        zahl: "8",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte27 = {
        zahl: "9",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte28 = {
        zahl: "10",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte29 = {
        zahl: "Bube",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte30 = {
        zahl: "Dame",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte31 = {
        zahl: "Koenig",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    let karte32 = {
        zahl: "Ass",
        //rot: false,
        farbe: "schwarz",
        symbol: "♣",
        karten_wert_symbol: "4",
    };
    //Arrays
    let ziehstapel = [karte01, karte02, karte03, karte04, karte05, karte06, karte07, karte08, karte09, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32];
    let handstapel = [];
    let spielstapel = [];
    document.addEventListener("DOMContentLoaded", anzahlHandkarten);
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", definieren);
    //document.addEventListener("DOMContentLoaded", keydown)
    function anzahlHandkarten() {
        let base = 10;
        let promptValue = prompt("Anzahl der Karten eingeben");
        let anzahl = parseInt(promptValue, base);
        kartenInHandstapel(anzahl);
    }
    function kartenInHandstapel(_anzahl) {
        let k = 0;
        for (let i = 0; i < _anzahl; i++) {
            k = Math.floor(Math.random() * ziehstapel.length);
            handstapel.push(ziehstapel[k]);
            let removed = ziehstapel.splice(k, 1);
            placeHandstapel(handstapel[i], i); //stimmt hier nur, da es durch den loop läuft und die Karten generiert. Aber eben nur stellen aus ziehstapel und nicht aus Handstapel
            //console.log(Ziehstapel)
            //console.log(Handstapel)
        }
        //console.log(Handstapel)
        //let x : number = k  // verändert
        //placeHandstapel(Handstapel[x]) //versuch
        kartenInSpielstapel();
        //placeZiehstapel(Ziehstapel[k]) //wird ausgeführt (also eine Karte ist sichtbar, da dort _k (also die wo im SPielstapel ist) gerendert wird)
        //placeZiehstapel(Ziehstapel[k])
        for (let i = 0; i < ziehstapel.length; i++) {
            placeZiehstapel(ziehstapel[i], i);
        }
    }
    function kartenInSpielstapel() {
        let i = 0;
        let k = Math.floor(Math.random() * ziehstapel.length);
        spielstapel.push(ziehstapel[k]);
        let removed = ziehstapel.splice(k, 1);
        placeSpielStapel(spielstapel[i]);
    }
    function placeHandstapel(_k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Handstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;
        document.getElementById("Handkasten").appendChild(prodElement);
    }
    function placeZiehstapel(_k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Ziehstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;
        document.getElementById("Ziehkasten").appendChild(prodElement);
    }
    //k is undefined?
    function placeSpielStapel(_k) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Spielstapel">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;
        document.getElementById("Spielkasten").appendChild(prodElement);
    }
    //Neue Aufgabe4
    function init() {
        document.getElementById('button').addEventListener("click", sortCard);
        for (let i = 0; i < handstapel.length; i++) {
            let handkartenEvent = document.getElementsByClassName("Handstapel")[i];
            handkartenEvent.addEventListener("click", handstapelInSpielstapel);
        }
    }
    //Von Handstapel auf den Spielstapel
    function handstapelInSpielstapel(_event) {
        console.log(_event);
        let geklickteKarte = _event.target;
        let kartenId = geklickteKarte.id; //kartenId ist Id von geklickterKarte
        let kartenIdNummer = Number(kartenId); //kartenId ist ein string und wird in Nummer umgewandelt
        let kartenInSpielstapel = handstapel[kartenIdNummer]; //aus dem Handstapel wird die Karte mit der gewählten Id gepushed
        spielstapel.push(handstapel[kartenIdNummer]);
        handstapel.splice(kartenIdNummer, 1);
        placeSpielStapel(kartenInSpielstapel);
        placeHandstapelLeeren(kartenIdNummer);
        init();
    }
    function placeHandstapelLeeren(_kartenIdNummer) {
        document.getElementById("Handkasten").innerHTML = "";
        for (let i = 0; i < handstapel.length; i++) {
            placeHandstapelAktualisiert(handstapel[i], i);
        }
    }
    function placeHandstapelAktualisiert(_k, _i) {
        let prodElement = document.createElement('div');
        prodElement.innerHTML = `<fieldset class="Handstapel" id="${_i}">
    <p>${_k.symbol}</p>
    <p>${_k.farbe}</p>
    <p>${_k.zahl}</p>
    </fieldset>`;
        document.getElementById("Handkasten").appendChild(prodElement);
    }
    // von dem Ziehstapel in den Handstapel
    function definieren() {
        for (let i = 0; i <= ziehstapel.length; i++) {
            let ziehKarte = document.getElementsByClassName("Ziehstapel")[i];
            ziehKarte.addEventListener("click", vonZiehstapelInHandstapel);
        }
    }
    function vonZiehstapelInHandstapel() {
        let k = Math.floor(Math.random() * ziehstapel.length);
        handstapel.push(ziehstapel[k]);
        ziehstapel.splice(k, 1);
        document.getElementById("Handkasten").innerHTML = "";
        for (let i = 0; i < handstapel.length; i++) {
            placeHandstapelneu(handstapel[i], i);
        }
        init();
    }
    function placeHandstapelneu(_k, _i) {
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
    });
    //Button zum Sortieren - Hab keine Ahnung wie das funktioniert :(
    //    document.addEventListener("DOMContentLoaded", buttondrucken)
    //    function buttondrucken() : void {
    //        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementsByClassName("button")[1];
    //           button.addEventListener("click", buttonWurdeGedruckt);
    //}
    //    function buttonWurdeGedruckt(event: MouseEvent) : void {
    //        console.log("Hallo");
    //    }
    //handstapel.sort(whatever())
    //document.addEventListener("DOMContentLoaded", buttonErstellen);
    //function buttonErstellen(): void {
    //    let prodElement = document.createElement('div');
    //    prodElement.innerHTML = `<button id="button">Sortieren</button> </div>`;
    //    document.getElementById("button").appendChild(prodElement);
    //}
    //function whatever() : void {
    //handstapel = [];
    //handstapel.sort();
    //console.log(handstapel);
    //}
    //function buttonGedruckt(_event: MouseEvent) {
    //	console.log(_event)
    //}
    //document.getElementById('button').addEventListener("click", sortCard);
    function sortCard(_event) {
        handstapel.sort(sortiereKarten);
        console.log(handstapel);
        document.getElementById("Handkasten").innerHTML = '';
        for (let i = 0; i < handstapel.length; i++) {
            placeHandstapelneu(handstapel[i], i);
        }
        init();
    }
    function sortiereKarten(_a, _b) {
        if (_a.karten_wert_symbol < _b.karten_wert_symbol) {
            return -1;
        }
        if (_a.karten_wert_symbol > _b.karten_wert_symbol) {
            return 1;
        }
        return 0;
    }
})(MauMau || (MauMau = {}));
//# sourceMappingURL=main.js.map