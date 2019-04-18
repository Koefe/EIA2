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
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].getAttribute("value"));
                anfangsSumme += preis;
                let bestellungsListe = document.createElement("li");
                console.log(bestellungsListe);
                bestellungsListe.innerHTML = `<li id="Liste">
                <p>${input[i].className}</p>
                </li>`;
                console.log(bestellungsListe);
                document.getElementById("Liste").appendChild(bestellungsListe);
                //if()
            }
        }
        console.log(anfangsSumme);
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map