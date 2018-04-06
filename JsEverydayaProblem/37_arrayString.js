/*Write a function takes a string as a first argument and returns an array of strings that represents splitting of the original string by a 
number(second argument), if one or more character is whitespace remove it

For example

divideString("hi there",2)// ["hi", "t", "he","re"]
divideString("i love solving problems too much",3)//["il", "ove", "so", "lvi", "ng", "pro", "ble", "ms","too","mu","ch"]

Split the string in arrays of the desired size (first code here3), loop over it and replace each space by an empty string.*/

const divideString = (input, size) => [...input].map((e, i) => !(i % size) ? input.slice(i, i + size) : 0).filter(e => e).map(e => e.match(/\s/) ? e.replace(/\s/g, "") : e);
console.log(divideString("hi there",2))// ["hi", "t", "he","re"]
console.log(divideString("i love solving problems too much",3))//["il", "ove", "so", "lvi", "ng", "pro", "ble", "ms","to","om","uch"]
console.log(divideString("loki is no bueno",4))


/*Loop through the string which the iterator goes num x 2
Slice the string, replace whitespace of that slice and push into an array*/

function divideStrin(str, num){
    let res = [];

    for(let i = 0; i < str.length; i+=num){
        res.push(str.slice(i, i+num).replace(/\s/g,''));
    }

    return res;
}

console.log(divideStrin("hi there",2))// ["hi", "t", "he","re"]
console.log(divideStrin("i love solving problems too much",3))//["il", "ove", "so", "lvi", "ng", "pro", "ble", "ms","to","om","uch"]
console.log(divideStrin("loki is no bueno",4))