/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {

    // get rid of space and case
    str = str.toLowerCase().split(" ").join("");
    let i = Math.floor(str.length / 2);

    let first = str.substring(0, i);
    let second = (str.length % 2 == 0) ? str.substring(i) : str.substring(i+1);

    // reverse the second string to compare to first
    second = second.split("").reverse().join("")

    return first == second;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};