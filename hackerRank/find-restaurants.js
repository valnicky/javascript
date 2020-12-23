/*
 * Complete the 'findRestaurants' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY allLocations
 *  2. INTEGER numRestaurants
 */

function findRestaurants(allLocations, numRestaurants) {
    // Write your code here
    let location = [];
    let calc;
    let first, second, sum;
    let temp;

    for (let i = 0; i < allLocations.length; i++) {
        first = Math.pow(allLocations[i][0], 2);
        second = Math.pow(allLocations[i][1], 2);
        //  console.log(first + ', ' + second);

        sum = first + second;
        calc = Math.sqrt(sum).toFixed(2);
        //  console.log(sum);

        location.push(calc * 100);
    }
    //  console.log(location);
    numRestaurants = location.length;
    /*
        for (let k = 0; k < location.length; k++) {
            for (let j = 0; j < location.length - 1; j++) {

                if (location[j] > location[j + 1]) {
                    temp = location[j + 1];
                    location[j + 1] = location[j];
                    location[j] = temp;
                }
            }
        }*/

    let result = location.map((rest) => {
        return parseInt(Math.min(rest));
    });

    let maxim = 0;
    let minim;
    let indexMin;
    let secMin;
    let secIndex;

    for (let a = 0; a < result.length; a++) {
        if (result[a] > maxim) {
            maxim = result[a];
        }
        minim = maxim;
        if (result[a] < minim) {
            minim = result[a];
            indexMin = a;
        }
    }

    for (let b = 0; b < result.length; b++) {
        secMin = maxim;
        //  console.log(indexMin);
        if (result[b] < secMin) {
            if (result[b] !== minim) {
                secMin = result[b];
                secIndex = b;
            }
            if (b !== indexMin) {
                secMin = result[b];
                secIndex = b;
            }
        }
    }


    // console.log(secMin + 'index' + secIndex);

    console.log(allLocations[indexMin], allLocations[secIndex]);
}

findRestaurants([
    [3, 1],
    [4, 2],
    [-1, 1]
], 3);


findRestaurants([
    [-1, 2],
    [4, 2],
    [-1, 2]
], 3);

/*
 * Complete the 'routePairs' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER maxTravelDist
 *  2. 2D_INTEGER_ARRAY forwardRouteList
 *  3. 2D_INTEGER_ARRAY returnRouteList
 */

function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
    // Write your code here

}