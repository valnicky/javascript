const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);


games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);

console.log(games.size);

//games.clear(); // delete all the items from a Set

console.log(games.has('September'));


const iterator = games.values();
console.log(iterator);

console.log(iterator.next());//And so on until done equals true which marks the end of the Set.

for (const game of games) {
  console.log(game);
}