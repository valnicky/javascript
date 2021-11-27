/**write  a function that takes a strings return the longest
word the strings contains */

function longest_word(str) {
    let strS = str.trim().split(' ');
    // console.log('words: '+strS.length);

    let strSort = strS.sort((a, b) => { return (b.length - a.length) });
    return strSort[0];
}

longest_word(' The quick brown fox jump over the lazy dog');
longest_word('He is the quickest man in the world');