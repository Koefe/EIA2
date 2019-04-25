var Eisdealer;
(function (Eisdealer) {
    // Beispieldaten auf Basis der oben angegebenen Strukturen
    Eisdealer.data = {
        "Eissorte": [
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Vanille", value: 0, type: "number", class: "Kugel Vanille" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Schokolade", value: 0, type: "number", class: "Kugel Schokolade" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Erdbeere", value: 0, type: "number", class: "Kugel Erdbeere" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Zitrone", value: 0, type: "number", class: "Kugel Zitrone" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Mango", value: 0, type: "number", class: "Kugel Mango" },
            { min: "0", max: "3", step: "1", alt: 0.70, name: "Himbeere", value: 0, type: "number", class: "Kugel Himbeere" }
        ],
        "Sahne": [
            { min: "0", max: "3", step: "1", alt: 0.50, name: "Radiogroup1", value: 0, type: "radio", class: "Laktosefreie Sahne" },
            { min: "0", max: "3", step: "1", alt: 0, name: "Radiogroup1", value: 0, type: "radio", class: "ohne Sahne" },
            { min: "0", max: "3", step: "1", alt: 0.30, name: "Radiogroup1", value: 0, type: "radio", class: "Sahne" }
        ],
        "Behälter": [
            { min: "0", max: "3", step: "1", alt: 0.60, name: "Radiogroup2", value: 0, type: "radio", class: "Waffel" },
            { min: "0", max: "3", step: "1", alt: 0.40, name: "Radiogroup2", value: 0, type: "radio", class: "Becher" }
        ],
        "Extras": [
            { min: "0", max: "3", step: "1", alt: 0.50, name: "Checkbox1", value: 0, type: "checkbox", class: "Streusel" },
            { min: "0", max: "3", step: "1", alt: 0.80, name: "Checkbox2", value: 0, type: "checkbox", class: "Chocolatechips" },
            { min: "0", max: "3", step: "1", alt: 1.20, name: "Checkbox3", value: 0, type: "checkbox", class: "Cookie-Dough" },
            { min: "0", max: "3", step: "1", alt: 1.50, name: "Checkbox4", value: 0, type: "checkbox", class: "Blueberries" }
        ]
    };
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=data.js.map