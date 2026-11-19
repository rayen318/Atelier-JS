

function calculMoyenne(dc1, dc2, ds) {
     moyenne = dc1 * 0.3 + dc2 * 0.3 + ds * 0.4;
    return moyenne;
}

 dc1 = Number(prompt("donner dc1:"));
 dc2 = Number(prompt("donner dc2 :"));
 ds = Number(prompt("donner dc :"));

if (Number.isNaN(dc1) || Number.isNaN(dc2) || Number.isNaN(ds)) {
    document.getElementById("resultat").innerHTML ="inoteee mich mrigla";

} else {

    let moyenne = calculMoyenne(dc1, dc2, ds);

    let mention;

    if (moyenne >= 10) {
        mention = "Admis";
    } else {
        mention = "Ajourné";
    }
    document.getElementById("resultat").innerHTML =mention;
        
}
