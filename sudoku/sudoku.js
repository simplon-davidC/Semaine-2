function generateSudoku()
 2 {
 3     // @TODO
 4 };
 5
 6 function AjoutOptionAuSelect(this_select)
 7 {
   var nb_case_vide = document.getElementById("niveau").value;
   var nb_max_loop = 1000;
 8     if (this_select.value == "autre")
 9     {
10         var saisie;
11         var pass = false;
12         do
13         {
14             if (pass) alert("La valeur est incorrecte. Elle ne doit comporter que des chiffres.");
15             saisie = prompt("Nombre de cases vides :");
16             if (saisie == null) return false;
17             pass = true;
18         }
19         while (saisie.match(/[^0-9]/i) && saisie != "")
20
21         this_select.options[this_select.length] = new Option(saisie + ' case' + (saisie > 1 ? 's' : '') + ' vide' + (saisie > 1 ? 's' : ''), saisie, true, true);
22
23         for (var i=0; i < this_select.options.length; i++)
24         {
25             if (this_select.options*.value == saisie)
26             {
27                 this_select.options*.selected = true;
28             }
29         }
30     }
31 };
