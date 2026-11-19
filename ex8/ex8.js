let resultat = "<table border='1'>";
resultat = resultat + "<caption>Table de pythagore</caption>";
for (let i = 0; i <= 10; i++) {
    resultat = resultat + "<tr>";

    for (let j = 0; j <= 10; j++) {
        resultat = resultat + "<td>" + (i * j) + "</td>";
    }

    resultat = resultat + "</tr>";
}
resultat = resultat + "</table>";
document.getElementById("resultat").innerHTML = resultat;
