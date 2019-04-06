
interface Spielkarte {
    zahl: string;
    //rot: boolean;
    symbol: string;
    //zwei_ziehen: boolean; 
    //aussetzten: boolean;
    //wünschen: boolean;
    //allesleger: boolean;
}

let karte01: Spielkarte = {
    zahl: "7",
    //rot: true,
    symbol: "Karo",
}

let karte02: Spielkarte = {
    zahl: "8",
    //rot: true,
    symbol: "Karo",
}

let karte03: Spielkarte = {
    zahl: "9",
    //rot: true,
    symbol: "Karo",
}

let karte04: Spielkarte = {
    zahl: "10",
    //rot: true,
    symbol: "Karo",
}

let karte05: Spielkarte = {
    zahl: "Bube",
    //rot: true,
    symbol: "Karo",
}

let karte06: Spielkarte = {
    zahl: "Dame",
    //rot: true,
    symbol: "Karo",
}

let karte07: Spielkarte = {
    zahl: "Koenig",
    //rot: true,
    symbol: "Karo",
}

let karte08: Spielkarte = {
    zahl: "Ass",
    //rot: true,
    symbol: "Karo",
}

let karte09: Spielkarte = {
    zahl: "7",
    //rot: true,
    symbol: "Herz",
}

let karte10: Spielkarte = {
    zahl: "8",
    //rot: true,
    symbol: "Herz",
}

let karte11: Spielkarte = {
    zahl: "9",
    //rot: true,
    symbol: "Herz",
}

let karte12: Spielkarte = {
    zahl: "10",
    //rot: true,
    symbol: "Herz",
}

let karte13: Spielkarte = {
    zahl: "Bube",
    //rot: true,
    symbol: "Herz",
}

let karte14: Spielkarte = {
    zahl: "Dame",
    //rot: true,
    symbol: "Herz",
}

let karte15: Spielkarte = {
    zahl: "Koenig",
    //rot: true,
    symbol: "Herz",
}

let karte16: Spielkarte = {
    zahl: "Ass",
    //rot: true,
    symbol: "Herz",
}

let karte17: Spielkarte = {
    zahl: "7",
    //rot: false,
    symbol: "Piek",
}

let karte18: Spielkarte = {
    zahl: "8",
    //rot: false,
    symbol: "Piek",
}

let karte19: Spielkarte = {
    zahl: "9",
    //rot: false,
    symbol: "Piek",
}

let karte20: Spielkarte = {
    zahl: "10",
    //rot: false,
    symbol: "Piek",
}

let karte21: Spielkarte = {
    zahl: "Bube",
    //rot: false,
    symbol: "Piek",
}

let karte22: Spielkarte = {
    zahl: "Dame",
    //rot: false,
    symbol: "Piek",
}

let karte23: Spielkarte = {
    zahl: "Koenig",
    //rot: false,
    symbol: "Piek",
}

let karte24: Spielkarte = {
    zahl: "Ass",
    //rot: false,
    symbol: "Piek",
}

let karte25: Spielkarte = {
    zahl: "7",
    //rot: false,
    symbol: "Kreuz",
}

let karte26: Spielkarte = {
    zahl: "8",
    //rot: false,
    symbol: "Kreuz",
}

let karte27: Spielkarte = {
    zahl: "9",
    //rot: false,
    symbol: "Kreuz",
}

let karte28: Spielkarte = {
    zahl: "10",
    //rot: false,
    symbol: "Kreuz",
}

let karte29: Spielkarte = {
    zahl: "Bube",
    //rot: false,
    symbol: "Kreuz",
}

let karte30: Spielkarte = {
    zahl: "Dame",
    //rot: false,
    symbol: "Kreuz",
}

let karte31: Spielkarte = {
    zahl: "Koenig",
    //rot: false,
    symbol: "Kreuz",
}

let karte32: Spielkarte = {
    zahl: "Ass",
    //rot: false,
    symbol: "Kreuz",
}

//Arrays

let Ziehstapel: Spielkarte[] = [karte01, karte02, karte03, karte04, karte05, karte06, karte07, karte08, karte09, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32]

let Handstapel: Spielkarte[] = []

let Spielstapel: Spielkarte[] = []

document.addEventListener("DOMContentLoaded", AnzahlHandkarten)

function AnzahlHandkarten(): void {
    let base = 10;
    let promptValue: string = prompt("Anzahl der Karten eingeben")
    let Anzahl = parseInt(promptValue, base)
    KartenInHandstapel(Anzahl);
}

function KartenInHandstapel(_Anzahl: number): void {
    let k: number = 0;
    for (let i: number = 0; i < _Anzahl; i++) {
        k = Math.floor(Math.random() * Ziehstapel.length)
        Handstapel.push(Ziehstapel[k]);
        let removed = Ziehstapel.splice(k, 1)

        placeHandstapel(Handstapel[i])  //stimmt hier nur, da es durch den loop läuft und die Karten generiert. Aber eben nur stellen aus ziehstapel und nicht aus Handstapel
        //console.log(Ziehstapel)
        //console.log(Handstapel)
    }

    //console.log(Handstapel)
    //let x : number = k  // verändert
    //placeHandstapel(Handstapel[x]) //versuch
    KartenInSpielstapel()

    //placeZiehstapel(Ziehstapel[k]) //wird ausgeführt (also eine Karte ist sichtbar, da dort _k (also die wo im SPielstapel ist) gerendert wird)

    //placeZiehstapel(Ziehstapel[k])

    for (let i: number = 0; i < 32; i++) {
        placeZiehstapel(Ziehstapel[i])
    }

}

function KartenInSpielstapel(): void {
    for (let i: number = 0; i < 1; i++) {
        let k: number = Math.floor(Math.random() * Ziehstapel.length)
        Spielstapel.push(Ziehstapel[k]);
        let removed = Ziehstapel.splice(k, 1);

        placeSpielStapel(Spielstapel[i]);
    }
}

function placeHandstapel(_k: Spielkarte): void { //verändert

    let prodElement = document.createElement('div');
    prodElement.innerHTML = `<div class="Handstapel">
<p>${_k.symbol}</p>

<p>${_k.zahl}</p>
</div>`;


    document.getElementById("body").appendChild(prodElement);
}

function placeZiehstapel(_k: Spielkarte): void {         //k : number
    let prodElement = document.createElement('div');
    prodElement.innerHTML = `<div class="Ziehstapel">
    <p>${_k.symbol}</p>
  
    <p>${_k.zahl}</p>
    </div>`;


    document.getElementById("body").appendChild(prodElement);
}

//k is undefined?

function placeSpielStapel(_k: Spielkarte): void {
    let prodElement = document.createElement('div');
    prodElement.innerHTML = `<div class="Spielstapel">
   
    <p>${_k.zahl}</p>
    </div>`;


    document.getElementById("body").appendChild(prodElement);
}


