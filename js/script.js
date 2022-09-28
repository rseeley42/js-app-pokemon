let pokemonRepository = (function () {
let pokemonList = [
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

/*Add a single pokemon to the list*/
function add(pokemon) {
  pokemonList.push(pokemon);
}

/*return the pokemon array*/
function getAll() {
    return pokemonList;
  }

/*Add single pokemon to ul as a button, assign name to button*/
function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", ()=>{
            showDetails(pokemon);
    });
  }

function showDetails(pokemon){
  console.log(pokemon);

}


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    };

})();

pokemonRepository.add({ name: 'Pikachu', height: 0.3, weight: 13.2, types: 'electric'});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
