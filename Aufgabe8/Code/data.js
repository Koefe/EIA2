var Eisdealer;
(function (Eisdealer) {
    // Beispieldaten auf Basis der oben angegebenen Strukturen
    Eisdealer.data = {
        "Eissorte": [
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Vanille", value: "ausgewählt", type: "number", class: "Kugel Vanille" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Schokolade", value: "ausgewählt", type: "number", class: "Kugel Schokolade" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Erdbeere", value: "ausgewählt", type: "number", class: "Kugel Erdbeere" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Zitrone", value: "ausgewählt", type: "number", class: "Kugel Zitrone" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Mango", value: "ausgewählt", type: "number", class: "Kugel Mango" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Himbeere", value: "ausgewählt", type: "number", class: "Kugel Himbeere" }
        ],
        "Sahne": [
            { min: "0", max: "3", step: "1", alt: 0.50, name: "Sahne", value: "ausgewählt", type: "radio", class: "Laktosefreie Sahne" },
            { min: "0", max: "3", step: "1", alt: 0, name: "Sahne", value: "ausgewählt", type: "radio", class: "ohne Sahne" },
            { min: "0", max: "3", step: "1", alt: 0.30, name: "Sahne", value: "ausgewählt", type: "radio", class: "Sahne" }
        ],
        "Behälter": [
            { min: "0", max: "3", step: "1", alt: 0.60, name: "Behalter", value: "ausgewählt", type: "radio", class: "Becher" },
            { min: "0", max: "3", step: "1", alt: 0.40, name: "Behalter", value: "ausgewählt", type: "radio", class: "Waffel" }
        ],
        "Extras": [
            { min: "0", max: "3", step: "1", alt: 0.50, name: "Streusel", value: "auf mein Eis bitte", type: "checkbox", class: "Streusel" },
            { min: "0", max: "3", step: "1", alt: 0.80, name: "Chocolatechips", value: "auf mein Eis bitte", type: "checkbox", class: "Chocolatechips" },
            { min: "0", max: "3", step: "1", alt: 1.20, name: "Cookie-Dough", value: "auf mein Eis bitte", type: "checkbox", class: "Cookie-Dough" },
            { min: "0", max: "3", step: "1", alt: 1.50, name: "Blueberries", value: "auf mein Eis bitte", type: "checkbox", class: "Blueberries" }
        ]
    };
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=data.js.map