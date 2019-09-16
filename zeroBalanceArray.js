/*
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/

function ìsZeroBalanced(n) {
    if(n.length == 0) {
        return false;
    }
    let indexOfOpposite = 0;
    while(n.length > 0) {
        if(n[0] == 0) {
        n.shift();
        } else if(!(n.includes(n[0] * (-1)))) {
        return false;
        } else {
        indexOfOpposite = n.indexOf(n[0] * (-1));
        n.splice(indexOfOpposite, 1);
        n.shift();
        }
    }
    return true;
}