/*
Write function avg which calculates average of numbers in given list.
*/

function find_average(array) {
    let sum = 0;
    sum = array.reduce((acc, val) => {
        return acc + val;
    });
    return (sum / array.length);
}