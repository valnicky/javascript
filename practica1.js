function capitalize(str){
	let firstLetter = str.indexOf(0).toUpperCase();
	let str1 = str.replace(firstLetter, 0);
	return str1;
}
capitalize("nana");