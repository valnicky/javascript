const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();
iteratorObjForKeys.next();
iteratorObjForKeys.next();

let iteratorObjForValues = members.values();
iteratorObjForValues.next();