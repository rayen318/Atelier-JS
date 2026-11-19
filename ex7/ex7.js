let n=Number(prompt("donner n"));
let resultat = "";
let ligne = "";
for (let i = 1; i <= n; i++) {
    ligne = ligne + "1";
    resultat = resultat + ligne + "<br>";
}
document.getElementById("resultat").innerHTML = resultat;
