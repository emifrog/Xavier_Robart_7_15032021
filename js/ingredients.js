import {recipes} from "./recettes.js";
import {allRecepiess} from "./recettes-box.js"
let recettes = recipes;


// Global Variables 
const tagsPlaceholder = document.getElementById('tags-placeholder');
const ingrediantsPlaceholder = document.getElementById("Ingrediants-placeholder");
const recetteContainerDOM = document.getElementById('recettes');
const inputIngredient = document.getElementById('input-Ingrediants');

let ingrediantsArray = [];
let clickedTags = [];
let filteredRecettesClick = [];


// remplir les ingrédients du tableau "Array" avec tous les ingrédients
recettes.forEach(recette => {
    recette.ingredients.forEach((element, index) => {
        ingrediantsArray.push(element.ingredient);
    })
})

 // supprimer tous les doublons du tableau d'ingrédients et mettre les uniques dans cette variable
let ingrediantsArrayNoDuplics = [...new Set(ingrediantsArray)];

// AFFICHER LES INGRÉDIENTS PAR DÉFAUT //

//Afficher tous les ingrédients par défaut
function showIngredients(ingredients) {

    ingredients.forEach((ingredient, index) => {
        const listItem =  document.createElement('li');
        listItem.innerHTML = `${ingredient}`
    
        ingrediantsPlaceholder.appendChild(listItem);
        listItem.classList.add('liIngrediants');
    })
    
}
showIngredients(ingrediantsArrayNoDuplics);

// AJOUTER UN INGRÉDIENT DANS LA BARRE D'ÉTIQUETTES //


document.addEventListener('click', (event) => {

    if (event.target.classList.contains('liIngrediants')) {
       
        // verify if the ingrediant is in the array RETURN if not continue execution
        if (clickedTags.includes(event.target.innerHTML)) return
        else {
            //create an element span each time
            const newElement = document.createElement('span');
            newElement.innerHTML = `${event.target.innerHTML}  <i class="fas fa-times-circle fa-times-circle-ingredients"></i>`
            newElement.classList.add('clickedElement');

            //apprend the span element to the dom element
            tagsPlaceholder.appendChild(newElement)
            
            //remove the search value from the search box
            inputIngredient.value = "";

            // call the function to display every ingredient by default
            showIngredients(ingrediantsArrayNoDuplics);

            //fill the Array each time we click an element
            clickedTags.push(event.target.innerHTML);
            filterRecettesEnClick() 
        };

    };

});

// filter RECETTES ARRAY en utilisant les tags 
function filterRecettesEnClick() {

    filteredRecettesClick = [];
    
    clickedTags.forEach(tag => {

        filteredRecettesClick.push(...recettes.filter(recette => {

            return recette.ingredients.some(i => i.ingredient.includes(tag)); 

        }))

    })
    
    recetteContainerDOM.innerHTML = " ";
    allRecepiess(filteredRecettesClick);
};

//  SUPPRIMER L'INGRÉDIENT DE LA BARRE D'ÉTIQUETTES //

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-times-circle-ingredients')) {

        let currentTagName = event.path[1].innerText.trim();

        let positionIndex = clickedTags.indexOf(currentTagName)

        clickedTags.splice(positionIndex, 1)

        event.path[1].outerHTML = "";

        let removeRecetteFromArray =  filteredRecettesClick.filter(recettes => {
            
            return recettes.ingredients.every(i => i.ingredient !== currentTagName )
        })

        recetteContainerDOM.innerHTML = " ";

        allRecepiess(removeRecetteFromArray);

        if ( clickedTags.length <= 0) {

            allRecepiess(recettes);

        }
    }
})

// Filter ingredients on KEYUP //

const inputIngrediants = document.getElementById('input-Ingrediants');

inputIngrediants.addEventListener('keyup', (key) => {

    const enteredValue = key.target.value.toLowerCase();

    const filteredIngredients = ingrediantsArrayNoDuplics.filter((ingredients) => {
        return ( ingredients.toLowerCase().includes(enteredValue) )
    });

    ingrediantsPlaceholder.innerHTML = " ";
    
    showIngredients(filteredIngredients);

})