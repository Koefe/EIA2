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
            if (input[i].checked == true) {
                let preis = Number(input[i].value);
                anfangsSumme += preis;
                let bestellungsListe = document.createElement("li");
                console.log(bestellungsListe);
                bestellungsListe.innerHTML = `<p>${input[i].className}</p>`;
                console.log(bestellungsListe);
                document.getElementById("Liste").appendChild(bestellungsListe);
                //Schreibt Preis hin
                //let preisAnzeige: HTMLElement = document.createElement("p");
                //preisAnzeige.innerHTML = `<p class="Preis">${anfangsSumme}</p>`;
                //document.getElementById("Preis").appendChild(preisAnzeige);     
            }
            if (input[i].name == "Slider") {
                let preis1 = Number(input[i].value);
                anfangsSumme += preis1;
                console.log(anfangsSumme);
                //console.log(input[i].value);
                if (preis1 > 0) {
                    let bestellungsListe = document.createElement("li");
                    bestellungsListe.innerHTML = `<p>${input[i].value} ml ${input[i].className}</p>`;
                    document.getElementById("Liste").appendChild(bestellungsListe);
                }
            }
            if (input[i].name == "Counter") {
                let preis = Number(input[i].value);
                anfangsSumme += preis;
                let bestellungsListe = document.createElement("li");
                console.log(bestellungsListe);
                bestellungsListe.innerHTML = `<p>${input[i].value}  ${input[i].className}</p>`;
                console.log(bestellungsListe);
                document.getElementById("Liste").appendChild(bestellungsListe);
            }
        }
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map