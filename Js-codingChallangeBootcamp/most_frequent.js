function most_frequent(arr){
    let chars={};
    let max = 0;
    let maxChar;
    
    for(let el of arr){
        if(!chars[el]){
            chars[el] = 1;
        } else {
            chars[el] += 1;
        }
    }
    
    for(let pr in chars){
        if(chars[pr] > max){
            max = chars[pr];
            maxChar = pr;
        }
    }
    return maxChar;
}

most_frequent(['a','b','c','b','a']); //a 
most_frequent(['a','b','c','b','a','b']); //b