/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function truthy(value){
    return value;
  }
  return arr.filter(truthy);
}

bouncer([7, "ate", "", false, 9]);

function bouncer(arr) {
 //Only return values that evaluate as true inside the array.
  return arr.filter(function(value){
    if (value){
      return (value);
    }
  });
}