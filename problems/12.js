/**
 * Problem 12: Switch Statement
 * 
 * Given a fruit, return the price.
 * Here are the costs for each fruit:
 *  Orange - $1, Apple - $1.29, Grapes - $1.50, Banana - $0.75.
 *  All other food costs $2.
 * 
 * Use a switch statement.
 * 
 * @example "apple" -> "$1.29"
*/
function problem(fruit) {
    let price;

    switch (fruit) {
        case "orange":
            price = "$1";
            break;
        case "apple":
            price = "$1.29";
            break;
        case "grapes":
            price = "$1.50";
            break;
        case "banana":
            price = "$0.75";
            break;
        default:
            price = "$2";
            break;
    }

    return price;
}

const tests = [
    ["orange", "$1"],
    ["apple", "$1.29"],
    ["grapes", "$1.50"],
    ["banana", "$0.75"],
    ["grapefruit", "$2"],
    ["melon", "$2"]
]

module.exports = {problem, tests};