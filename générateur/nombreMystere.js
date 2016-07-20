
var borneMax = 10;

// renvoie true ssi le nombre mystere a été trouvé
function unEssai(nombreMystere) {
    var essai;
    do {
		essai = parseInt(window.prompt("Proposez un nombre entre 0 et "+borneMax, ""));
    } while (essai < 0 || essai > borneMax);
    if (essai == nombreMystere) {
		return true;
    }
    else {
		if (essai < nombreMystere) {
			document.writeln(essai + " est trop petit <br/>");
		}
		else {
			document.writeln(essai + " est trop grand <br/>");
		}
		return false;
    }
}

function jeu() {
    var nombreMystere = Math.floor(Math.random()*borneMax);
    var compteur = 1;
    while(! unEssai(nombreMystere)) {
		compteur = compteur+1;
    }
	document.writeln("<br/>Nombre mystère "+nombreMystere+" trouvé en "+ compteur+" tentatives");
}
