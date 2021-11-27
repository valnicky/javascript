/*given a string write a function that takes the strings return non-repeating character*/

function non_repeating_ch(str){
    let chars = {};
    let pr;
    for(let ch of str){
        if(!chars[ch]){
            chars[ch] =1;
        }else {
            chars[ch] += 1;
        }
    }
    
    for(let el in chars){
        if(chars[el] === 1){
          pr = el;
          break;
        }
    }
    return pr;
}

non_repeating_ch('hello');