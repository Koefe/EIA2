namespace Eisdealer {
    // Heterogenes assoziatives Array mit vordefinierten Schlüsseln
export interface HeteroEisInterface {
    //for: string;
    alt: number;
    type: string;
    value: number;
    name: string;
    class: string;
    min: string;
    max: string;
    step: string;
  
}

export interface HomogenousArray {
    [eisArray: string]: HeteroEisInterface[];
}

// Beispieldaten auf Basis der oben angegebenen Strukturen
export let data: HomogenousArray
= {
"Eissorte": [
    { min: "0", max: "3", step: "1", alt: 0.70, name: "Vanille", value: 0, type: "number", class: "Kugel Vanille"},
    { min: "0", max: "3", step: "1", alt: 0.70, name: "Schokolade", value: 0, type: "number", class: "Kugel Schokolade"},
    { min: "0", max: "3", step: "1", alt: 0.70, name: "Erdbeere", value: 0, type: "number", class: "Kugel Erdbeere"},
    { min: "0", max: "3", step: "1", alt: 0.70, name: "Zitrone", value: 0, type: "number", class: "Kugel Zitrone"},
    { min: "0", max: "3", step: "1", alt: 0.70, name: "Mango", value: 0, type: "number", class: "Kugel Mango"},
    { min: "0", max: "3", step: "1", alt: 0.70, name: "Himbeere", value: 0, type: "number", class: "Kugel Himbeere"}
],

"Sahne": [
    { min: "0", max: "3", step: "1", alt: 0.50, name: "Sahne", value: 0, type: "radio", class: "Laktosefreie Sahne"},
    { min: "0", max: "3", step: "1", alt: 0, name: "Sahne", value: 0, type: "radio", class: "ohne Sahne"},
    { min: "0", max: "3", step: "1", alt: 0.30, name: "Sahne", value: 0, type: "radio", class: "Sahne"}
],

"Behälter": [
    { min: "0", max: "3", step: "1", alt: 0.60, name: "Behalter", value: 0, type: "radio", class: "Waffel"},
    { min: "0", max: "3", step: "1", alt: 0.40, name: "Behalter", value: 0, type: "radio", class: "Becher"}
    
],

"Extras": [
    { min: "0", max: "3", step: "1", alt: 0.50, name: "Streusel", value: 0, type: "checkbox", class: "Streusel"},
    { min: "0", max: "3", step: "1", alt: 0.80, name: "Chocolatechips", value: 0, type: "checkbox", class: "Chocolatechips"},
    { min: "0", max: "3", step: "1", alt: 1.20, name: "Cookie-Dough", value: 0, type: "checkbox", class: "Cookie-Dough"},
    { min: "0", max: "3", step: "1", alt: 1.50, name: "Blueberries", value: 0, type: "checkbox", class: "Blueberries"}
]



};
}