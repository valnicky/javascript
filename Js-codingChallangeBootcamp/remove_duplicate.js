/*write a function that takes a string and return a string that don't have any duplicate (only for letter and digits)*/

function removeDup(str) {
    let arrStr = str.toString().trim().split("");
    // console.log(arrStr);
    let char = {};
    let newArr = [];

    for (let el of arrStr) {
        if (!char[el]) {
            char[el] = 1;
            //   console.log(char[el]);
        } else {
            char[el] += 1;
        }
        if (char[el] == 1) {
            newArr.push(el);
        }
    }

    return newArr.join('');
}

removeDup('hello'); //helo
removeDup('greeting'); //gretin

//using regex
function removeDup2(str) {
    return str.replace(/([a-zA-Z0-9])(?=.*\1)/g, '');
}

function removeDup3(str) {
    return str.split('').filter((current, index, self) => {
        return self.indexOf(current) == index;
    }).join("");
}

function removeDup4(str) {
    let result = [];
    let arr = str.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === i) {
            result.push(arr[i]);
        }
    }
    return result.join('');
}