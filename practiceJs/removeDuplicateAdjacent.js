function removeDuplicateAdjacent(s) {
	//s = s.split('');

	let arr = [];
	let firstChar = s.charAt(0);
	
	arr.push(firstChar);

	let isIn;
	
	for(let i = 0; i < s.length; i++){
		isIn = 0;
		for(let j = 0; j<arr.length;j++){
			if(s[i] == arr[j]){
				isIn = 1;
			}
		}
		
		if(isIn == 0){
			arr.push(temp[i])
			}
		}
	
	}
}
//console.log("Longest run: "+ max +" for the character "+ maxChar);
console.log(arr);
console.log(temp);
}

console.log(removeDuplicateAdjacent("cooodefightssforrrcodee"));
console.log(removeDuplicateAdjacent("acaaabbbacdddd"));
