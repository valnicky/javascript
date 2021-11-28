/**given s string or an  array write a function that takes a string or an array return integers from the strings/array */

function separate(strnum) {
    let newstr = [].concat(strnum).join('');

    let result = newstr.match(/\d+/g).join('');
    return result;
}

//if(typeof(strnum) === 'string'){}else if(typeof(strnum) === 'object'){}


separate('he5llo1234'); //51234
separate(['h', 2, 'e', 1, 'o', 3, 4]); //2134