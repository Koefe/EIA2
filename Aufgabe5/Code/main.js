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
        let eissorte = _event.target;
        let berechnen = parseFloat(eissorte.value);
        if (eissorte.checked == true) {
            berechnePreis(berechnen);
            console.log(berechnen);
        }
        if (eissorte.checked == false) {
            berechnen = 0;
        }
    }
    function berechnePreis(_berechnen) {
    }
})(Eisdealer || (Eisdealer = {}));
//# sourceMappingURL=main.js.map