console.log("Quelle est la couleur du cheval blanc d'Henry IV?");
console.read(function(couleur)
{
  if(couleur.toLowerCase() === "blanc")
  {
      console.log("Combien sont les 7 nains?");
      console.read(function(nombre)
      {
          if((nombre === "7")||(nombre==="Sept"))
          {
              console.log("Bonne réponse");
          }else
          {
              console.log("Mauvaise réponse.");
          }
      });
  }
  else{
      console.log("Mauvaise réponse.");
  }
});
