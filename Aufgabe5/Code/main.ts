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
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis: number = Number(input[i].getAttribute("value"));
                anfangsSumme += preis;

                
                let bestellungsListe: HTMLLIElement = document.createElement("li");
                console.log(bestellungsListe)
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






}
