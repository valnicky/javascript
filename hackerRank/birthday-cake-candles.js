/*You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.*/

function birthdayCakeCandles(candles) {

    let count = 0;
    let max = candles[0];

    for (let j = 0; j < candles.length; j++) {
        if (candles[j] > max) {
            max = candles[j];
        }
    }

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) {
            count++;
        }
    }

    // console.log(count);
    return count;
}


birthdayCakeCandles([4, 4, 1, 3]);
birthdayCakeCandles([3, 2, 1, 3]);
birthdayCakeCandles([4, 4, 4, 3, 5]);
birthdayCakeCandles([4, 4, 4, 3, 2]);