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
        let eissorte: HTMLInputElement = <HTMLInputElement>_event.target;
        let berechnen: number = parseFloat(eissorte.value);
        berechnePreis(berechnen);
        

    }

    let preis: number = 0;

    function berechnePreis(_berechnen: number): void {
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number; i < input.length; i++) {
            if (input[i].checked == true) {
                //preis + input[i]
            }
        }
    }
}
