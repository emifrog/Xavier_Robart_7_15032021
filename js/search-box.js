
import {recipes} from "./recipes.js";
import {allRecepiess} from "./recipes-ingredients.js"
let recettes = recipes;


//select the input dom element
const serachInputBox = document.getElementById('search-box');
const recetteContainerDOM = document.getElementById('recettes');
const suggestMessage = document.getElementById('suggest-message');


//filter recipes using search box
serachInputBox.addEventListener('keyup', (key) => {

   const enteredValue = key.target.value.toLowerCase();
   
   if (enteredValue.length >= 3) {

        const filteredRecettes = recettes.filter((recette) => {
            return (
                recette.name.toLowerCase().includes(enteredValue) ||                                    // recherche la recette par nom
                recette.ingredients.some(i => i.ingredient.toLowerCase().includes(enteredValue)) ||     // ingredients
                recette.ustensils.some(u => u.toLowerCase().includes(enteredValue)) ||                  // ustensiles
                recette.appliance.toLowerCase().includes(enteredValue) ||                               // appareil
                recette.description.toLowerCase().includes(enteredValue)                                // description        
            )
        })

            recetteContainerDOM.innerHTML = "";
            allRecepiess(filteredRecettes);

            showSuggestionMessage (filteredRecettes)

   }else {
        recetteContainerDOM.innerHTML = ""; 
        allRecepiess(recettes);   
   }
});


//afficher le message de suggestion si aucune correspondance n'est trouvée entre la valeur d'entrée dans l'élément du tableau
function showSuggestionMessage (filteredRecettes) {

    if (filteredRecettes.length <= 0) {
                
        let pElement = document.createElement('p');

        //effacez le html de la div parent chaque fois que la condition est vraie
        suggestMessage.innerHTML = "";

        //Aucune recette correspondante à la recherche
        pElement.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."

        suggestMessage.append(pElement);

    }else {

        // efface le suggestion
        suggestMessage.innerHTML = "";

        //effacez les anciennes recettes du conteneur de recettes avant de remplir les nouvelles valeurs 
        recetteContainerDOM.innerHTML = "";
        allRecepiess(filteredRecettes);
    }
};