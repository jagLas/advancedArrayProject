/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let lastVowel = vowels.reduce(function(accum, char){
        let accumIndex = word.toLowerCase().lastIndexOf(accum);
        let charIndex = word.toLowerCase().lastIndexOf(char);

        if (charIndex > accumIndex) {
            return char;
        }
        return accum;
    })
    let indexLastVowel = word.lastIndexOf(lastVowel);
    return word.slice(0, indexLastVowel) + word.slice(indexLastVowel + 1);
};

console.log(removeLastVowel('should'))

let hipsterfy = function(sentence) {
    let words = sentence.split(' ');
    words = words.map(removeLastVowel);
    return words.join(' ');
};

// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
