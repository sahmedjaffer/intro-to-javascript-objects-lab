const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

//   console.dir(pokemon, { maxArrayLength: null })

console.log(game)


/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
*/

// Solve Exercise 3 here:

game.difficulty=["Easy", "Med", "Hard"];
console.log('Exercise 3 solution');
console.log(game);



 /*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/

  for(i = 0 ; i < pokemon.length;i++){
    (pokemon[i].starter == true) && (game.party.push(pokemon[i]));
    break;
  }
  console.log('Exercise 4 solution');

  console.log (game.party);


 /*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


function findType(type, hp){
pokemon.forEach(found => {if (found.type === type && found.hp===hp) {game.party.push(found)}});
}
const pokType=['electric','fire','water'];
const pokHp=[35,39,44];
for (let i =0;i < pokType.length;i++){
  for (let k =i;k < pokHp.length;k++){
  findType(pokType[i],pokHp[k]);
}}
console.log('Exercise 5 solution');

 console.log (game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

 game.gyms.forEach(gameGyms => gameGyms.difficulty < 3 && (gameGyms.completed=true))
 console.log('Exercise 6 solution');
 console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

Solve Exercise 7 here:
*/

let idx;
 for (let i = 0; i < game.party.length ; i++){
  gamePartyNum=game.party[i].number;
  gamePartyIndex=game.party[i];
  idx= game.party.indexOf(gamePartyIndex);
   for (let k = 0; k < pokemon.length ; k++){
     if (gamePartyNum === pokemon[k].number && game.party[i].starter === true) {
      editGameParty(pokemon[k+1],idx)
       }}
 }
 function editGameParty(foundPokemonObj,indexNum){
   game.party.splice(indexNum, 1,foundPokemonObj);
  };
  console.log('Exercise 7 solution');
  console.log(game.party);


  /*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/
console.log('Exercise 8 solution');
game.party.forEach(gameParty => {
  console.log(' ********* ')
  console.log(gameParty)
  console.log(' --------- ')
})



/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
console.log('Exercise 9 solution');
pokemon.forEach(starterPokemon => (starterPokemon.starter === true) && console.log(starterPokemon));


/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
let catchedPokemon='Mewtwo';
game.catchPokemon= function(pokemonObj){
  game.party.push(pokemonObj);
}
pokemon.forEach(addPokemon => addPokemon.name === catchedPokemon && game.catchPokemon(addPokemon))
console.log('Exercise 10 solution');
console.log(game.party)

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/

 catchedPokemon ='Rhydon'
 game.catchPokemon= function(pokemonObj){
  game.items.forEach(calculateQuantity => calculateQuantity.name === ('pokeball') && (calculateQuantity.quantity= calculateQuantity.quantity - 1));
  game.party.push(pokemonObj);

}
pokemon.forEach(addPokemon => addPokemon.name === catchedPokemon && game.catchPokemon(addPokemon))

 console.log('Exercise 11 solution');
 console.log(game.items);
 //console.log(game.party);


 /*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

 game.gyms.forEach(gameGyms => gameGyms.difficulty < 6 && (gameGyms.completed=true))
 console.log('Exercise 12 solution');
 console.log(game.gyms);


 /*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
let compeletedGyms=0,incomletedGyms=0;
const gymTally={};
gymTally.Compeleted = compeletedGyms;
gymTally.Incomplete = incomletedGyms;
game.gymStatus=function(){
  game.gyms.forEach(searchCompleted => searchCompleted.completed === true ? (compeletedGyms+=1):(incomletedGyms+=1));
  gymTally.Compeleted = compeletedGyms;
  gymTally.Incomplete = incomletedGyms;
  }


  console.log('Exercise 13 solution');
  console.log(gymTally);
  game.gymStatus();
  console.log(gymTally);



  /*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
let toTalParty=0;
game.partyCount=function(){
game.party.forEach(gamePartyTotal => toTalParty+=1)
}
console.log('Exercise 14 solution');
console.log(`Total Pokemonis: ${toTalParty}`);
game.partyCount();
console.log(`Total Pokemonis: ${toTalParty}`);

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

game.gyms.forEach(gameGyms => gameGyms.difficulty < 8 && (gameGyms.completed=true))
console.log('Exercise 15 solution');
console.log(game.gyms);



/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log('Exercise 16 solution');
console.log(game);



/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

console.log('Exercise 17 solution');
 function sortByHp(game){
   game.party.sort((a, b)=>a.hp - b.hp);
 }
sortByHp(game);
console.log(game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

catchedPokemon =['Kangaskhan', 'Scyther','Lapras','Jolteon']

 game.catchPokemon= function(pokemonObj){
  
  if (game.party.length <= 6){
    game.party.push(pokemonObj);
    console.log(game.party.length)
  }else {
    game.collection.push(pokemonObj);
    console.log(game.collection.length)
  }
}
for (let i=0; i < catchedPokemon.length;i++){
  for (let k = 0; k< pokemon.length;k++) {
 (catchedPokemon[i].name === pokemon[k].name) && game.catchPokemon(pokemon[k]);
}}

//pokemon.forEach(addPokemon => addPokemon.name === catchedPokemon && (game.catchPokemon(addPokemon), game.catchPokemon(addPokemon)));
  //game.catchPokemon(catchedPokemon);
  



console.log('Exercise 18 solution');
console.log(game.collection);
//console.log(game.party);