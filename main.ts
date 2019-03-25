document.addEventListener("DOMContentLoaded", greeter);

function greeter():void {
    let promptValue = prompt("Name eingeben");
    console.log('Herzlich Willkommen ' + promptValue + ' Sie sehen heute super aus');

    document.getElementById('name').innerHTML = 'Herzlich Willkommen ' + promptValue + ' Sie sehen heute super aus';
}
