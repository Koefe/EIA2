var Eisdealer;
(function (Eisdealer) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
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
                let preis = Number(input[i].id);
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
                let preis = Number(input[i].value);
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
                let preis1 = Number(input[i].id);
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
        let val = 0;
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].name == "Text") {
                if (input[i].value == "") {
                }
            }
        }
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map