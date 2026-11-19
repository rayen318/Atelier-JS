function annneebissexti(annee){
    if (annee % 400 === 0) {
        return true;
    }
    else if (annee % 4 === 0 && annee % 100 !== 0) {
        return true;
    }
    else {
        return false;
    }
}

let annee = Number(prompt("donner une année"));
if (annneebissexti(annee)) {
    document.getElementById("resultat").innerHTML = annee + " est une anné bissextile";
}
else {
    document.getElementById("resultat").innerHTML =annee + " n'est pas une année bissextile";
}
