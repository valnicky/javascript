function simpleArraySum(ar) {

    let z = 0;
    for (let i = 0; i < ar.length; i++) {
        z += ar[i];
    }
    return z;
}


simpleArraySum([5, 4, 1]);