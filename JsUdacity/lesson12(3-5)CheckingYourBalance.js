/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance =  250.00;
var checkBalance = true;
var isActive = true ;

// your code goes here
if (checkBalance===true) {
    if (isActive===true) {
        if (balance>0) {
        console.log("Your balance is $"+balance.toFixed(2)+".");
        }
        else if (balance===0) {
        console.log("Your account is empty.");
        }
        else {
        console.log("Your balance is negative. Please contact bank.");
        }
    }
    else {
        console.log("Your account is no longer active.");
    }
}
    else {
        console.log("Thank you. Have a nice day!");
    }