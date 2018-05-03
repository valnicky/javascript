function centuryFromYear(year) {
  let century = 0;
  let len = year.toString().length;
  let cen = year.toString().slice(0,2);
  let cen1 = year.toString().slice(0,1);
  let cen2 = year.toString().substring(0,1);
  
  if(!year.isNaN){
  if(len >= 4){
       if(year.toString().slice(2,4) == 0){
         century = parseInt(cen);
       }else if(year.toString().slice(2,4) != 0){
              century = parseInt(cen) + 1;
              }
  }else if(len >= 3){
      if(year.toString().slice(1,3) == 0){
         century = parseInt(cen2);
     }else if(year.toString().slice(1,3) != 0){
              century = parseInt(cen2) + 1;
              }
  }else if(len <= 2){
      century= 1;
  }
  }else{
    
  }
  
  return century;
}
