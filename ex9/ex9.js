let notes = [];
let note;
let somme = 0;
let admis = 0;
note = Number(prompt("donner une note"));
while (note >= 0) {
    notes.push(note);
    note = Number(prompt("donner une autre "));
}
let nombre = notes.length;
if (nombre > 0) {
    let min = notes[0];
    let max = notes[0];
    for (let i = 0; i < nombre; i++) {

        somme = somme + notes[i];

        if (notes[i] >= 10) {
            admis++;
        }

        if (notes[i] > max) {
            max = notes[i];
        }

        if (notes[i] < min) {
            min = notes[i];
        }
    }

    let moyenne = somme / nombre;
    let pourcentage = (admis / nombre) * 100;
    document.getElementById("resultat").innerHTML ="moyenne : " + moyenne + "<br>" +"pourcenadmis : " + pourcentage + "%<br>" +"meileure note : " + max + "<br>" +
        "pire note : " + min + "<br>" +
        "nombre d'étudiants : " + nombre;
} else {
    document.getElementById("resultat").innerHTML =
        "Aucune note saisie";
}
