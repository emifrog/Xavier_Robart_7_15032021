
import {recipes} from "./recettes.js";
import {allRecepiess} from "./recettes-box.js"
let recettes = recipes;

// sélectionnez l'élément du Dom
const serachInputBox = document.getElementById('search-box');
const recetteContainerDOM = document.getElementById('recettes');
const suggestMessage = document.getElementById('suggest-message');


//filtrer les recettes à l'aide du champ de recherche
serachInputBox.addEventListener('keyup', (key) => {

   const enteredValue = key.target.value.toLowerCase();
   
   if (enteredValue.length >= 3) {

        const filteredRecettes = recettes.filter((recette) => {
            return (
                recette.name.toLowerCase().includes(enteredValue) ||                                    // rechercher la recette par nom
                recette.ingredients.some(i => i.ingredient.toLowerCase().includes(enteredValue)) ||     // ingredients
                recette.ustensils.some(u => u.toLowerCase().includes(enteredValue)) ||                  // ustensils
                recette.appliance.toLowerCase().includes(enteredValue) ||                               // appliance
                recette.description.toLowerCase().includes(enteredValue)                                // description        
            )
        })

            recetteContainerDOM.innerHTML = "";
            allRecepiess(filteredRecettes);

            showSuggestionMessage (filteredRecettes) //appel la fonction et affiche un message d erreur

   }else {
        recetteContainerDOM.innerHTML = ""; 
        allRecepiess(recettes);   
   }
});

//afficher le message de suggestion si aucune correspondance n'est trouvée entre la valeur d'entrée et l'élément du tableau
function showSuggestionMessage (filteredRecettes) {

    if (filteredRecettes.length <= 0) {
                
        let pElement = document.createElement('p');

        //effacez le html de la div parent chaque fois que la condition est vraie
        suggestMessage.innerHTML = "";

        //remplir le html a chaque fois que la condition est vraie
        pElement.innerHTML = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."

        suggestMessage.append(pElement);

    }else {

        //effacez la suggestion div si vous n'en avez pas besoin
        suggestMessage.innerHTML = "";

        //effacez les anciennes recettes du conteneur de recettes avant de remplir les nouvelles valeurs
        recetteContainerDOM.innerHTML = "";
        allRecepiess(filteredRecettes);
    }
};