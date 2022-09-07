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

for (let i = 0; i <= 2; i++) {
  document.write('The Pokemon Name is: ');
  document.write(pokemonList[i].name);
  document.write("<br>");
  document.write('Height: ');
  document.write(pokemonList[i].height);
  document.write("<br>");
  document.write('Weight: ');
  document.write(pokemonList[i].weight);
  document.write("<br>");
  if (pokemonList[i].height > .5) {document.write('Wow, that is big');}
  document.write("<br>");
  document.write("<br>");
}

function divide(dividend, divisor){
  if(divisor === 0){
    return "You’re trying to divide by zero."
  }else{
    let result = dividend / divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));
