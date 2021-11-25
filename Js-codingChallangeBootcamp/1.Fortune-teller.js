

function fortuneTeller(numberChildren, partnerName, geogrLoc, 
	jobTitl){

	let result= "You will be a "+jobTitl+ " in "+ geogrLoc+ ", and married to "+partnerName+ " with " + numberChildren;
  return result;
}

document.getElementById("demo").innerHTML = fortuneTeller(3, "Kevin","Oviedo","futballplayer" );
