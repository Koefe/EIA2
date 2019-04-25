var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    document.addEventListener("DOMContentLoaded", button);
    function init(_event) {
        console.log("Init");
        displayHomoVar(Eisdealer.data);
        console.log(Eisdealer.data);
        displayHeteroPredef(Eisdealer.data["Counter"][1]);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        console.log(_event);
        //let eissorte: HTMLInputElement = <HTMLInputElement>_event.target;
        //let berechnen: number = parseFloat(eissorte.value);
        berechnePreis(_event);
    }
    let anfangsSumme = 0;
    function berechnePreis(_event) {
        anfangsSumme = 0;
        //Damit bei jedem neuen aktualisieren die ungecheckten Checkboxen aus der Liste entnommen werden
        document.getElementById("Liste").innerHTML = "";
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            //counter berechnung
            if (input[i].type == "number" && Number(input[i].value) > 0) { //schreibt die Sachen die auf 0 stehen nicht auf die Liste 
                let anzahlKugel = Number(input[i].value);
                let preis = Number(input[i].alt);
                anfangsSumme += anzahlKugel * preis;
                //erstellt die Liste mit den angecklickten Sachen
                let bestellungsListe = document.createElement("li");
                //console.log(bestellungsListe);
                bestellungsListe.innerHTML = `<p>${input[i].value}  ${input[i].className}</p>`;
                //console.log(bestellungsListe);
                document.getElementById("Liste").appendChild(bestellungsListe);
                continue; //damit es wieder nach oben springt und nicht gleich in die nächste if geht
            }
            //bestellungsliste erstellen
            if (input[i].checked == true) {
                let preis = Number(input[i].alt);
                anfangsSumme += preis;
                let bestellungsListe = document.createElement("li");
                //console.log(bestellungsListe);
                bestellungsListe.innerHTML = `<p>${input[i].className}</p>`;
                //console.log(bestellungsListe);
                document.getElementById("Liste").appendChild(bestellungsListe);
                //Schreibt Preis hin
                //let preisAnzeige: HTMLElement = document.createElement("p");
                //preisAnzeige.innerHTML = `<p class="Preis">${anfangsSumme}</p>`;
                //document.getElementById("Preis").appendChild(preisAnzeige);     
            }
            //slider erstellen
            if (input[i].name == "Slider") {
                let stellungSlider = Number(input[i].value);
                let preis1 = Number(input[i].alt);
                anfangsSumme += preis1 * stellungSlider;
                console.log(anfangsSumme);
                //console.log(input[i].value);
                if (stellungSlider > 0) {
                    let bestellungsListe = document.createElement("li");
                    bestellungsListe.innerHTML = `<p>${input[i].value} ml ${input[i].className}</p>`;
                    document.getElementById("Liste").appendChild(bestellungsListe);
                }
            }
        }
        document.getElementById("Preis").innerHTML = anfangsSumme.toFixed(2).toString();
    }
    //validation von Angaben - button
    function button() {
        let button = document.getElementById("bestellen");
        button.addEventListener("click", angabenRichtig);
    }
    //validation von Angaben - kontrolle
    function angabenRichtig(_event) {
        //let val: number = 0;
        let inputTxt = document.getElementsByTagName("input");
        let leereTextfelder = []; //alle leeren Textfelder in Array pushen
        for (let i = 0; i < inputTxt.length; i++) {
            if (inputTxt[i].name == "Text") {
                if (inputTxt[i].value == "") {
                    let textFeld = inputTxt[i].name;
                    leereTextfelder.push(textFeld);
                }
            }
        }
        if (leereTextfelder.length == 0) {
            alert("Bestellung korrekt ausgefüllt");
        }
        else {
            alert(`bitte alles ausfüllen`);
        }
    }
    //Aufgabe 6
    function displayHomoVar(_homoVar) {
        for (let eisArray in _homoVar) {
            let valueHetero = _homoVar[eisArray];
            console.group(eisArray);
            console.dir(valueHetero);
            console.groupEnd();
            for (let i = 0; i < valueHetero.length; i++) {
                displayHeteroPredef(valueHetero[i]);
            }
        }
    }
    function displayHeteroPredef(_heteroPredef) {
        let counter = document.createElement("input");
        //let legend: HTMLLegendElement = document.createElement("legend");
        let label = document.createElement("label");
        label.setAttribute("for", _heteroPredef.class);
        label.innerText = _heteroPredef.class;
        counter.setAttribute("type", _heteroPredef.type);
        counter.setAttribute("name", _heteroPredef.name);
        counter.setAttribute("value", _heteroPredef.value.toString());
        counter.setAttribute("alt", _heteroPredef.alt.toString());
        counter.setAttribute("class", _heteroPredef.class);
        counter.setAttribute("min", _heteroPredef.min);
        counter.setAttribute("max", _heteroPredef.max);
        counter.setAttribute("step", _heteroPredef.step);
        document.getElementById("Eiskonfigurieren").appendChild(counter);
        document.getElementById("Eiskonfigurieren").appendChild(label);
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map