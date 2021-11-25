/**write a function that takesa string and return the number of words exist in the strings */


countWords(" The people are happy today");

function countWords(str){
    let arr = str.split(" ");
    let result2 = [];
    for(let el of arr) {
        if(/[a-zA-Z0-9]+/.test(el)){
            result2.push(el);
        }
    }
    
    return result.length;
}