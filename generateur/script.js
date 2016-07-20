$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Plus !";
    }
  else if($proposition.value < reponse+10) {
        $resultat.innerHTML = "Beaucoup Plus !";
      }

     if ($proposition.value > reponse) {
        $resultat.innerHTML = "Moins !";
    }

    else if($proposition.value > reponse-10) {
      $resultat.innerHTML = "Beaucoup Moins !";
    }

  if($proposition.value == reponse) {
            $resultat.innerHTML = "Bonne réponse !";
        }
}

$bouton.onclick = verifier;
