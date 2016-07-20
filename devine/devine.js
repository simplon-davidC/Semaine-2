  var hasard = Math.floor(Math.random() * 10);

  console.log("devinez un chiffre entre 0 et 9");
  console.read(function(reponse)
  {

    if(
        (typeof reponse != "number") && ( isNaN(Number(reponse)) == true)
      ){
        console.log('c pas un nombre SVP !');
        return;
    } else {

      reponse = Number(reponse);
    }
    if( reponse === hasard){
      console.log("bravo");
    } else {
      var message = "";
      if( reponse > hasard ){
        message = "trop grand, essaie encore";
      } else if( reponse < hasard ){
        message = "trop petit, essaie encore";
      }
      console.log(message);
      console.read(function(reponse2){
        console.log("reponse" , typeof reponse2);
        if(
            (typeof reponse2 != "number") &&
            ( isNaN(Number(reponse2)) == true)
          ){
            console.log('c pas un nombre SVP !');
            return;
        } else {
          reponse2 = Number(reponse2);
          console.log('reponse', reponse2, typeof reponse2);
        }
        if( reponse2 === hasard){
          console.log("bravo");
        } else {
          console.log("perdu ! la réponse était " + hasard);
        }
      });
    }
  });
