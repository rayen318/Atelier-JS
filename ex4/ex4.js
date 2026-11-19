
function someentre(a, b) {

    let somme = 0;
    for (let i = a + 1; i < b; i++) {
        somme = somme + i;
    }

    return somme;}

function somepairentre(a, b) {

    let somme = 0;
    for (let i = a + 1; i < b; i++) {
        if (i % 2 === 0) {
            somme = somme + i;
        }

    }
    return somme;
}
let a = Number(prompt("Donner a :"));
let b = Number(prompt("Donner b :"));

if (Number.isNaN(a) || Number.isNaN(b)) {

    document.getElementById("resultat").innerHTML = "entrer invalide ";

} else {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let s1 =someentre(a, b);
    let s2 = somepairentre(a, b);
    document.getElementById("resultat").innerHTML ="Sommedesentier : " + s1 +"Somme des pairs : " + s2;
}
