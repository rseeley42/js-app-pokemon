let pokemonRepository = (function () {
let pokemonList = [
  { name: 'Growlithe',
    height: .7,
    weight: 19,
    types: 'fire'
  },

  {
    name: 'Caterpie',
    height: .3,
    weight: 2.9,
    types: 'bug'
  },

  {
    name: 'Weedle',
    height: .3,
    weight: 3.2,
    types: 'bug'
  }
];

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
