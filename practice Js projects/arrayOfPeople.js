const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
]
//console.log the first name of each person in the array.
people.forEach(p => {console.log(p.firstName)});

//Make a second array that contains only the first name of each person.
let newA = [];
//with concat
people.forEach(p => {newA = newA.concat(p.firstName); });
console.log(newA);
//or
newA = [];
people.forEach(p => {newA[people.indexOf(p)] = p.firstName})
console.log(newA);

//Make a third array that contains people that have died after 1950.
let arr3 = [];
people.forEach(p => {if(p.yearOfDeath > 1950){
  arr3 = arr3.concat(p);
}});
console.log(arr3);

//Find index of Charles Darwin in the array.
people.forEach(p => {if(p.firstName == 'Charles' && p.lastName == 'Darwin'){
  console.log(people.indexOf(p));
}});

//with 3 args(current value, index, array)
people.forEach((p, index) => {
  if(people[index].lastName === 'Darwin'){
    console.log(index);
  }
});

//with findindex and match on last name
people.findIndex(p => p.lastName === 'Darwin');





let accordion_span = document.querySelectorAll('.accordion__span');
let accordion_hide = document.querySelectorAll('.accordion__hide');

accordion_span.forEach( item => item.addEventListener('click', function(){
  accordion_hide.forEach( p => {
    if(p.classList.contains('display_none')){
      p.classList.add('display_flex');
      p.classList.remove('display_none');
     } else {
       p.classList.remove('display_flex');
       p.classList.add('display_none');
            }
  });
}))
