/* Name: Ordered Count of Characters
 * Level: 7kyu
 * Instructions: Count the number of occurrences of each character and return it
 * as a list of tuples in order of appearance.
 * 
 * Example:
 * orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */

const orderedCount = text => {
    let counter = text.split('').reduce((counts, current) => (counts[current] = ++counts[current] || 1, counts), {});
    return text.split('').filter((val, idx, src) => idx === src.indexOf(val)).map(val => [val, counter[val]]);
};
