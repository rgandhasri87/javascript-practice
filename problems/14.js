/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {

    let counts = {};
    let majorityNumber;

    for (num of numbers) {
        // if number exists
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    }

    for (num in counts) {
        if (counts[num] > numbers.length / 2) {
            majorityNumber = num;
        }
    }

    // keys of JS object are strings
    return parseInt(majorityNumber);
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};