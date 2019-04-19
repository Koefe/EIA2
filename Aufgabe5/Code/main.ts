namespace Eisdealer {

    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }


    function handleChange(_event: Event): void {
        console.log(_event);
        //let eissorte: HTMLInputElement = <HTMLInputElement>_event.target;
        //let berechnen: number = parseFloat(eissorte.value);
        berechnePreis(_event);
    }

    let anfangsSumme: number = 0;

    function berechnePreis(_event: Event): void {
        anfangsSumme = 0;
        //Damit bei jedem neuen aktualisieren die ungecheckten Checkboxen aus der Liste entnommen werden
        document.getElementById("Liste").innerHTML = "";

        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis: number = Number(input[i].value);
                anfangsSumme += preis;

                let bestellungsListe: HTMLLIElement = document.createElement("li");
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
                let preis1: number = Number(input[i].value);
                anfangsSumme += preis1;
                console.log(anfangsSumme);
                //console.log(input[i].value);

                if (preis1 > 0) {
                    let bestellungsListe: HTMLLIElement = document.createElement("li");
                    bestellungsListe.innerHTML = `<p>${input[i].value} ml ${input[i].className}</p>`;
                    document.getElementById("Liste").appendChild(bestellungsListe);
                }

                
            }

        }



    }






}
