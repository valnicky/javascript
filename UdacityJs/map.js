const employees = new Map();
console.log(employees);

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

employees.delete('richard@udacity.com');
console.log(employees);

//employees.clear();// remove all key-value pairs from the Map.

console.log(employees.has('james.parkes@udacity.com'));
console.log(employees.has('Marcus'));

console.log(employees.get('julia@udacity.com'));


