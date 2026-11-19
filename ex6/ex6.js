
let notes = [];
let note;
let somme = 0;
note = Number(prompt("donner une note"));
while (note >= 0) {
    notes.push(note);
    note = Number(prompt("het note okhra )"));
}
let nombre = notes.length;
if (nombre > 0) {
    let min = notes[0];
    let max = notes[0];
    for (let i = 0; i < nombre; i++) {
        somme = somme + notes[i];
        if (notes[i] < min) {
            min = notes[i];
        }
        if (notes[i] > max) {
            max = notes[i];
        }
    }

    let moyenne = somme / nombre;
    document.getElementById("resultat").innerHTML ="nombre de note : " + nombre + "<br>" +"moyenne : " + moyenne + "<br>" +
        "min:" + min + "<br>" +
        "max : " + max;
} else {
    document.getElementById("resultat").innerHTML = "aucune note saisie";
}
