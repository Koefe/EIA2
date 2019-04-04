let karte01 = {
    zahl: "7",
    farbe: "rot",
    symbol: "Karo",
};
let karte02 = {
    zahl: "8",
    farbe: "rot",
    symbol: "Karo",
};
let karte03 = {
    zahl: "9",
    farbe: "rot",
    symbol: "Karo",
};
let karte04 = {
    zahl: "10",
    farbe: "rot",
    symbol: "Karo",
};
let karte05 = {
    zahl: "Bube",
    farbe: "rot",
    symbol: "Karo",
};
let karte06 = {
    zahl: "Dame",
    farbe: "rot",
    symbol: "Karo",
};
let karte07 = {
    zahl: "Koenig",
    farbe: "rot",
    symbol: "Karo",
};
let karte08 = {
    zahl: "Ass",
    farbe: "rot",
    symbol: "Karo",
};
let karte09 = {
    zahl: "7",
    farbe: "rot",
    symbol: "Herz",
};
let karte10 = {
    zahl: "8",
    farbe: "rot",
    symbol: "Herz",
};
let karte11 = {
    zahl: "9",
    farbe: "rot",
    symbol: "Herz",
};
let karte12 = {
    zahl: "10",
    farbe: "rot",
    symbol: "Herz",
};
let karte13 = {
    zahl: "Bube",
    farbe: "rot",
    symbol: "Herz",
};
let karte14 = {
    zahl: "Dame",
    farbe: "rot",
    symbol: "Herz",
};
let karte15 = {
    zahl: "Koenig",
    farbe: "rot",
    symbol: "Herz",
};
let karte16 = {
    zahl: "Ass",
    farbe: "rot",
    symbol: "Herz",
};
let karte17 = {
    zahl: "7",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte18 = {
    zahl: "8",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte19 = {
    zahl: "9",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte20 = {
    zahl: "10",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte21 = {
    zahl: "Bube",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte22 = {
    zahl: "Dame",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte23 = {
    zahl: "Koenig",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte24 = {
    zahl: "Ass",
    farbe: "schwarz",
    symbol: "Piek",
};
let karte25 = {
    zahl: "7",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte26 = {
    zahl: "8",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte27 = {
    zahl: "9",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte28 = {
    zahl: "10",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte29 = {
    zahl: "Bube",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte30 = {
    zahl: "Dame",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte31 = {
    zahl: "Koenig",
    farbe: "schwarz",
    symbol: "Kreuz",
};
let karte32 = {
    zahl: "Ass",
    farbe: "schwarz",
    symbol: "Kreuz",
};
//Arrays
let Ziehstapel = [karte01, karte02, karte03, karte04, karte05, karte06, karte07, karte08, karte09, karte10, karte11, karte12, karte13, karte14, karte15, karte16, karte17, karte18, karte19, karte20, karte21, karte22, karte23, karte24, karte25, karte26, karte27, karte28, karte29, karte30, karte31, karte32];
let Handstapel = [];
let Spielstapel = [];
document.addEventListener("DOMContentLoaded", AnzahlHandkarten);
function AnzahlHandkarten() {
    let base = 10;
    let promptValue = prompt("Anzahl der Karten eingeben");
    let Anzahl = parseInt(promptValue, base);
}
//# sourceMappingURL=main.js.map