import {recipes} from "./recettes.js";
let recettes = recipes;


// DOM elements
const inputIngredient          =   document.getElementById('input-Ingrediants');
const inputAppareil            =   document.getElementById('input-Appareil');
const inputUstensile           =   document.getElementById('input-Ustensiles');
const ingredientsBtn           =   document.getElementById("Ingrediants");
const appareilBtn              =   document.getElementById("Appareil");
const ustensilesBtn            =   document.getElementById("Ustensiles");
const ingrediantsPlaceholder   =   document.getElementById("Ingrediants-placeholder");
const appareilsPlaceholder     =   document.getElementById("Appareil-placeholder");
const ustensilesPlaceholder    =   document.getElementById("Ustensiles-placeholder");
const chevronDownIngrediants   =   document.getElementById('chevron-down-Ingrediants');
const chevronUpIngrediants     =   document.getElementById('chevron-up-Ingrediants');
const chevronDownAppareil      =   document.getElementById('chevron-down-Appareil');
const chevronUpAppareil        =   document.getElementById('chevron-up-Appareil');
const chevronDownUstensiles    =   document.getElementById('chevron-down-Ustensiles');
const chevronUpUstensiles      =   document.getElementById('chevron-up-Ustensiles');

// OPEN BUTTON  //


// ingrediants 
ingredientsBtn.addEventListener('click', () => {
    ingredientsBtn.classList.add('expand-the-btn');
    ingrediantsPlaceholder.classList.add('expanded-button');
    chevronDownIngrediants.style.display = "none";
    chevronUpIngrediants.style.display = "block";
    inputIngredient.placeholder = "Recherche un ingrédient";

    appareilBtn.classList.remove('expand-the-btn');
    appareilsPlaceholder.classList.remove('expanded-Appareil');
    chevronDownAppareil.style.display = "block";
    chevronUpAppareil.style.display = "none";
    inputAppareil.placeholder = "Appareil";

    ustensilesBtn.classList.remove('expand-the-btn');
    ustensilesPlaceholder.classList.remove('expanded-Ustensiles');
    chevronDownUstensiles.style.display = "block";
    chevronUpUstensiles.style.display = "none";
    inputUstensile.placeholder = "Ustensiles";
});

// appareils
appareilBtn.addEventListener('click', () => {
    appareilBtn.classList.add('expand-the-btn');
    appareilsPlaceholder.classList.add('expanded-Appareil');
    chevronDownAppareil.style.display = "none";
    chevronUpAppareil.style.display = "block";
    inputAppareil.placeholder = "Recherche un appareil";

    ingredientsBtn.classList.remove('expand-the-btn');
    ingrediantsPlaceholder.classList.remove('expanded-button');
    chevronUpIngrediants.style.display = "none";
    chevronDownIngrediants.style.display = "block";
    inputIngredient.placeholder = " Ingrédients";

    ustensilesBtn.classList.remove('expand-the-btn');
    ustensilesPlaceholder.classList.remove('expanded-Ustensiles');
    chevronDownUstensiles.style.display = "block";
    chevronUpUstensiles.style.display = "none";
    inputUstensile.placeholder = "Ustensiles";
});

// ustensiles
ustensilesBtn.addEventListener('click', () => {
    ustensilesBtn.classList.add('expand-the-btn');
    ustensilesPlaceholder.classList.add('expanded-Ustensiles');
    chevronDownUstensiles.style.display = "none";
    chevronUpUstensiles.style.display = "block";
    inputUstensile.placeholder = "Recherche un ustensile";
});

// CLOSE BUTTON OUTSIDE //

document.addEventListener("click", (event) => {

    // Ingrediants
    if(event.target.closest('#Ingrediants')) return
    ingredientsBtn.classList.remove('expand-the-btn');
    ingrediantsPlaceholder.classList.remove('expanded-button');
    chevronUpIngrediants.style.display = "none";
    chevronDownIngrediants.style.display = "block";
    inputIngredient.placeholder = " Ingrédients";

    // appareils
    if(event.target.closest('#Appareil')) return
    appareilBtn.classList.remove('expand-the-btn');
    appareilsPlaceholder.classList.remove('expanded-Appareil');
    chevronDownAppareil.style.display = "block";
    chevronUpAppareil.style.display = "none";
    inputAppareil.placeholder = "Appareil";

    // Ustensiles
    if(event.target.closest('#Ustensiles')) return
    ustensilesBtn.classList.remove('expand-the-btn');
    ustensilesPlaceholder.classList.remove('expanded-Ustensiles');
    chevronDownUstensiles.style.display = "block";
    chevronUpUstensiles.style.display = "none";
    inputUstensile.placeholder = "Ustensiles";

});

// CLOSE BUTTON CLICK  //

document.addEventListener('click', (event) => {

    //chevron up Ingrediants
    if (event.target.id == "chevron-up-Ingrediants") {
        ingredientsBtn.classList.remove('expand-the-btn');
        ingrediantsPlaceholder.classList.remove('expanded-button');
        chevronUpIngrediants.style.display = "none";
        chevronDownIngrediants.style.display = "block";
        inputIngredient.placeholder = " Ingrédients";
    }

    //chevron up Appareil
    if(event.target.id == 'chevron-up-Appareil') {
        appareilBtn.classList.remove('expand-the-btn');
        appareilsPlaceholder.classList.remove('expanded-Appareil');
        chevronDownAppareil.style.display = "block";
        chevronUpAppareil.style.display = "none";
        inputAppareil.placeholder = "Appareil";
    }

    //chevron up Ustensiles
    if(event.target.id == 'chevron-up-Ustensiles') {
        ustensilesBtn.classList.remove('expand-the-btn');
        ustensilesPlaceholder.classList.remove('expanded-Ustensiles');
        chevronDownUstensiles.style.display = "block";
        chevronUpUstensiles.style.display = "none";
        inputUstensile.placeholder = "Ustensiles";
    } 
})