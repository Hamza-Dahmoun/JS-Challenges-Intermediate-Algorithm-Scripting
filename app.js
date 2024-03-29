/************************************ 1. Sum All Numbers in a Range ************/
/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */
function sumAll(arr) {
    let sum = 0;
    let min = 0, max = 0;
    if (arr[0] > arr[1]) {
        max = arr[0];
        min = arr[1];
    }
    else {
        max = arr[1];
        min = arr[0];
    }
    for (let i = min; i <= max; i++) sum = sum + i;
    return sum;
}

//sumAll([1, 4]);

//
//
/************************************ 2. Diff Two Arrays ************/
/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order. */
function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) newArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) newArr.push(arr2[i]);
    }
    return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//
//
/************************************ 3. Seek and Destroy ************/
/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object. */

function destroyer(...args) {
    // Remove all the values
    //console.log(args.length);
    for (let i = 1; i < args.length; i++) {
        let index = args[0].indexOf(args[i]);
        while (index != -1) {
            args[0].splice(index, 1);
            index = args[0].indexOf(args[i]);
        }
    }
    console.log(args[0]);
    return args[0];
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//
//
/************************************ 4. Wherefore art thou ************/
/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that 
that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in 
the object from the collection if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, 
then you must return the third object from the array (the first argument), because it contains the name and its value, 
that was passed on as the second argument. */

function whatIsInAName(collection, source) {
    // We will use the Object.keys() which returns an array of object keys
    //We will also use array.indexOf() method to check whether element exist in array, to check whether a key exist in an object
    var arr = [];

    // Only change code below this line
    for (let i = 0; i < collection.length; i++) {
        //for each 'key' in the object source, we're going to check whether 'key' exist in object 'collection[i]', then, check if they have same value
        let keys_andValues_exist = true;
        for (let key in source) {
            //console.log(key);
            if (collection[i].hasOwnProperty(key)) {
                //so the 'key' of object source does exist in object collection[i], lets now check if they're equal
                if (source[key] == collection[i][key]) {
                    //so the value of 'key' in object collection[i] and object source are equal
                    //do nothing
                }
                else {
                    keys_andValues_exist = false;
                }
            }
            else {
                keys_andValues_exist = false;
            }
        }
        if (keys_andValues_exist) {
            //so the keys and values of object source are the same in this object collection[i]
            arr.push(collection[i]);
        }
    }
    // Only change code above this line
    return arr;
}

//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// should return [{ first: "Tybalt", last: "Capulet" }].
//console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
//should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
//should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
//console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
//console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
//should return []
//
//
/************************************ 5. Spinal Tap Case ************/
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins    
    let whiteSpaceRegEx = /\s/g;//Regex to check whether there are whiteSpaces
    let underScoreRegEx = /_/g;//Regex to check whether there are whiteSpaces
    if (whiteSpaceRegEx.test(str)) {
        //so there are white spaces, lets replace them by a dashes
        str = str.split(" ").join("-");
    }
    if (underScoreRegEx.test(str)) {
        //so there are underscores, lets replace them by dashes
        str = str.split("_").join("-");
    }
    let s = str[0];
    let i = 1;
    while (i < str.length) {
        //we assume that str contains uppercases in the middle, which means that uppercase letter is the start of a new word,
        //so we'll build out of that a new string that replaces the uppercase by a "an empty space + lowercase"
        if (str[i] == "-") {
            //since this is a dash then we know that the coming letter is upper case & first letter of a word, lets move to the second letter of that word 
            s = s + str[i] + str[i + 1];
            i = i + 2;
        }
        else {
            if (str[i] == str[i].toUpperCase()) {
                let letterRegex = /[a-z]/g;
                //lets check if the character before the upperCase letter is a letter or not
                if (letterRegex.test(str[i - 1])) {
                    //so the character before was a letter, it means that character str[i-1] is the last letter of a word, and str[i] is the first letter of a new word
                    s = s + "-" + str[i].toLowerCase();
                    i++;
                }
                else {
                    s = s + str[i].toLowerCase();
                    i++;
                }
            }
            else {
                s = s + str[i];
                i++;
            }
        }

    }

    return s.toLowerCase();
}

//console.log(spinalCase('This Is Spinal Tap'));
//console.log(spinalCase('This_Is SpinalTap'));
//
//
/************************************ 6. Pig Latin ************/
/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    if (vowelStart(str))
        //so it starts with a vowel, just add 'way' to the end
        return str + "way";
    else if (!vowelStart(str)) {
        //so two cases: 1- start with a consonant but include a vowel 2- doesn't include any vowel
        //lets check
        if (includeVowel(str)) {
            //so it includes a vowel, so it starts with a consonant, lets move the consonant part to the end and add 'ay'   
            let firstConsPart = getFirstConsonantPart(str);
            let remainingPart = str.slice(firstConsPart[0].length);
            return remainingPart + firstConsPart[0] + "ay";
        }
        else {
            //so it doesn't include any vowel, lets add 'ay' to the end
            return str + 'ay';
        }

    }

}
function vowelStart(str) {
    let reg = /^[aeiuo]/;//meaning: starts with vowel
    //reg explanation:
    //^: starts with
    //[aeiuo]: vowel
    return reg.test(str);
}
function consonantStart(str) {
    let reg = /^(?![aeiuo])/;//meaning: str starts with not vowel
    //reg explanation:
    //^: starts with
    //(?!): not
    //[aeiuo]: vowel
    return reg.test(str);
}
function includeVowel(str) {
    let reg = /[aeiuo]/g;//meaning: include one or more vowel
    //reg explanation:
    // /[aeiuo]/: includes vowel
    //g: may be more than once
    return reg.test(str);
}
function getFirstConsonantPart(str) {
    //regex matches words that starts with consonant
    let reg = /^([^aeiou])+/g;//meaning: str starts with one ore more consonant
    //reg explanation:
    //^: starts with
    //([^aeiou]): not a vowel
    //+: more than once

    //console.log(reg.test(str));//true if str starts with consonant - false if str starts with a vowel
    //console.log(str.match(reg));//prints the first consonant part of the word
    return str.match(reg);
}
//console.log(translatePigLatin("california"));//aliforniacay
//console.log(translatePigLatin("algorithm"));//algorithmway
//console.log(translatePigLatin("schwartz"));//artzschway
//console.log(translatePigLatin("rhythm"));//rhythmay
//
//
/************************************ 7. Search and Replace ************/
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {
    //lets convert the text into array of words
    let arr = text_to_wordsArray(str);

    //we'll start iterating thru each item of the array to build the new array 'newarr' from them
    let newarr = arr.map(item => {
        //for current item of arr, lets see if is equal to the word stored in the variable 'before' 
        if (item == before) {
            //so it is the word we're looking for

            //lets check if the first letter in this word is a capital letter or not
            if (item.charAt(0) == item.charAt(0).toUpperCase()) {
                //so it is a capital letter

                //lets replace this word by the word stored in the variable 'after' but using a capital letter as first letter
                item = after.charAt(0).toUpperCase() + after.substring(1);
            }
            else {
                //so it is not a capital letter

                //lets replace this word by the word stored in the variable 'after'
                item = after;
            }
        }
        return item;
    })
    return newarr.join(" ");
}

function text_to_wordsArray(str) {
    //let regex = /([a-z])/g;//returns the text as an array of letters
    //let regex = /(\w)/g;//returns the text as an array of letters
    let regex = /(\w+)/g;//returns the text as an array of words
    //regex explanation:
    //\w: any character
    //\w+: any character at least once
    //(\w+): a word or a group of a characters that aren't seperated by a whitespace
    //(\w+)/g: a group of words

    return str.match(regex);
}

//console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));//returns "A quick brown fox jumped over the lazy dog"
//console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));//returns "He is Sitting on the couch"
//
//
/************************************ 8. DNA Pairing ************/
/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
}
function pairElement(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let onePair = [str[i]];
        onePair.push(pairs[str[i]]);
        arr.push(onePair);
    }
    return arr;
}
//console.log(pairElement("GCG"));//[["G", "C"], ["C", "G"], ["G", "C"]]

//
//
/************************************ 9. Missing letters ************/
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
let allLetters = "abcdefghijklmnopqrstuvwxyz";
function fearNotLetter(str) {
    //first of all lets use the allLetters variable to get the index of the first letter of 'str' variable
    let startIndex = allLetters.indexOf(str[0]);

    //lets use startIndex to start looking for each letter of 'str' in 'allLetters'
    for (let i = 1; i < allLetters.length; i++) {
        if (str[i] != allLetters[startIndex + i]) {
            return allLetters[startIndex + i];
        }
    }
}

//console.log(fearNotLetter("bce"));//returns 'd'
//console.log(fearNotLetter("abce"));// should return "d".
//console.log(fearNotLetter("abcdefghjklmno"));// should return "i".
//console.log(fearNotLetter("stvwx"));// should return "u".
//console.log(fearNotLetter("bcdf"));// should return "e".
//console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));// should return undefined.

//
//
/************************************ 10. Sorted Union ************/
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

//we'll use Rest parameter in function to pass variable number of arguments in uniteUnique function
function uniteUnique(...arrays) {
    //console.log("you have passed " + arrays.length + " arrays");
    let uniqueArr = [];
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            if (uniqueArr.indexOf(arrays[i][j]) == -1) {
                //so this is a new number, lets push it to our array
                uniqueArr.push(arrays[i][j]);
            }
        }
    }
    return uniqueArr;
}

//console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) ;//should return [1, 3, 2, 5, 4]
//console.log(uniteUnique([1, 2, 3], [5, 2, 1]));// should return [1, 2, 3, 5].
//console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));// should return [1, 2, 3, 5, 4, 6, 7, 8]

//
//
/************************************ 11. Convert HTML Entities ************/
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
//
let htmlResult = ["Result", "&", "<", ">", "\"", "\'"];
let htmlEntities_andResult = [
    ["Result", "EntityName"],
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ["\"", "&quot;"],
    ["\'", "&apos;"]
];
function convertHTML(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let index = htmlResult.indexOf(str[i]);
        if (index != -1) {
            //so this character represents an html entity

            //lets find its name and put it in the new string
            res = res + htmlEntities_andResult[index][1];
        }
        else {
            res = res + str[i];
        }
    }
    return res;
}

//console.log(convertHTML("Dolce & Gabbana"));// should return Dolce &amp; Gabbana.
//console.log(convertHTML("Hamburgers < Pizza < Tacos"));// should return Hamburgers &lt; Pizza &lt; Tacos.
//console.log(convertHTML("Sixty > twelve"));// should return Sixty &gt; twelve.
//console.log(convertHTML('Stuff in "quotation marks"'));// should return Stuff in &quot;quotation marks&quot;.
//console.log(convertHTML("Schindler's List"));// should return Schindler&apos;s List.
//console.log(convertHTML("<>"));// should return &lt;&gt;.
//console.log(convertHTML("abc"));// should return abc.

//
//
/************************************ 12. Sum All Odd Fibonacci Numbers ************/
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

- The first two numbers in the Fibonacci sequence are 1 and 1.
- Every additional number in the sequence is the sum of the two previous numbers. 
- So the first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let result = 0;
    if (num == 0) {
        result = 0;
    }
    else if (num == 1) {
        result = 0;
    }
    else {
        result = sumOfOddInArray(getPreviousFibNumbers(num));
    }
    return result;
}
function getPreviousFibNumbers(num) {
    let arr = [1, 1];
    let newFib = arr[1] + arr[0];
    while (newFib <= num) {
        newFib = arr[arr.length - 2] + arr[arr.length - 1];
        if (newFib <= num) {
            arr.push(newFib);
        }
    }
    return arr;
}
function isOdd(number) {
    if (number % 2 != 0) return true;
    else return false;
}
function sumOfOddInArray(arra) {
    let s = 0;
    for (let i = 0; i < arra.length; i++) {
        if (isOdd(arra[i]))
            s = s + arra[i];
    }
    return s;
}

//console.log(sumFibs(10));
//console.log(sumFibs(1000));// should return 1785.
//console.log(sumFibs(4000000));// should return 4613732.
//console.log(sumFibs(4));// should return 5.
//console.log(sumFibs(75024));// should return 60696.
//console.log(sumFibs(75025));// should return 135721.

//
//
/************************************ 13. Sum All Primes ************/
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function sumPrimes(num) {
    let sum = 0;
    //lets iterate thru all numbers greater than one and less or equal to num, check if they are prime and calculate their sum
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum = sum + i;
        }
    }
    return sum;
}
function isPrime(num) {
    //1 and 0 are not prime
    if (num == 1 || num == 0) {
        return false;
    }
    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                //so num is divisible by i ... num is not a prime number
                return false;
            }
        }
        //num is not divisible by any number greater than 1 and less than num .... num is prime
        return true;
    }
}

//console.log(sumPrimes(7));  
//console.log(sumPrimes(10));// should return 17.
//console.log(sumPrimes(977));// should return 73156.

//
//
/************************************ 14. Smallest Common Multiple ************/
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both,
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by
all numbers between 1 and 3. The answer here would be 6.
*/
function smallestCommons(arr) {
    //arr is an array contians two numbers: min and max
    let max, min;
    if (arr[0] > arr[1]) {
        max = arr[0];
        min = arr[1];
    }
    else {
        max = arr[1];
        min = arr[0];
    }


    //basically we'll check if min*max*counter is divisible by all numbers between min and max, knowing that 'counter' is incrementing from 1 and up
    //we'll keep doing this until we found a number (= min*max*counter) which is divisible by all numbers between min and max
    let notFound = true;
    let counter = 0;
    let result;
    while (notFound) {
        let divisible = true;
        counter++;
        for (let j = min + 1; j < max; j++) {
            if (!isDivisible(min * max * counter, j)) {
                divisible = false;
            }
        }
        if (divisible) {
            notFound = false;
            result = min * counter * max;
        }
    }
    return result;
}

function isDivisible(number, divider) {
    //this function checks if number is divisible by divider and returns boolean
    if (number % divider == 0) {
        return true;
    }
    return false;
}

//console.log(smallestCommons([1, 5]));// should return 60.
//console.log(smallestCommons([5, 1]));// should return 60.
//console.log(smallestCommons([2, 10]));// should return 2520.
//console.log(smallestCommons([1, 13]));// should return 360360.
//console.log(smallestCommons([23, 18]));// should return 6056820.

//
//
/************************************ 15. Drop it ************/
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index)
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let newArr = arr.slice();//newArr is a copy of arr
    let resultArray = newArr.filter((currentElement) => func(currentElement));
    if (resultArray.length != 0) {
        let indexOf_firstElementSatisfied = arr.indexOf(resultArray[0]);
        return arr.slice(indexOf_firstElementSatisfied);
    }
    else {
        return [];
    }
}

//console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
//console.log(dropElements([1, 2, 3, 4], function (n) { return n >= 3; }));// should return [3, 4].
//console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));// should return [1, 0, 1].
//console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));// should return [].
//console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));// should return [7, 4].
//console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));// should return [3, 9, 2].

//
//
/************************************ 16. Steamroller ************/
/*
Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
    // I'm a steamroller, baby
    let newArr = arr.slice();//newArr is a copy of arr
    var result = [];//this is going to be the flatted array
    checkArray(newArr, result);
    return result;
}
function checkArray(myArray, resultedArray) {
    //this function is a a recursion
    return myArray.map(elt => {
        if (!Array.isArray(elt)) {
            //so this is a simple element, it is not an array, lets push it
            resultedArray.push(elt);
            return elt;
        }
        else {
            return checkArray(elt, resultedArray);
        }
    });
}


//console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([[["a"]], [["b"]]]));// should return ["a", "b"].
//console.log(steamrollArray([1, [2], [3, [[4]]]]));// should return [1, 2, 3, 4].
//console.log(steamrollArray([1, [], [3, [[4]]]]));// should return [1, 3, 4].
//console.log(steamrollArray([1, {}, [3, [[4]]]]));// should return [1, {}, 3, 4].
//
//
/************************************ 17. Binary Agents ************/
/*
 Return an English translated sentence of the passed binary string.

The binary string will be space separated. 
 */

function binaryAgent(str) {
    let array = str.split(" ");//this makes an array that each element in it is a binary code
    //foreach element in the array:
    //1- parse it into Integer using 'parseInt()',
    //2- build a character out of it using 'String.fromCharCode()',
    //3- join all the characters built using 'Array.join()'
    return array.map(code => String.fromCharCode(parseInt(code, 2))).join("");
}

//console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// should return "Aren't bonfires fun!?"

//console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
// should return "I love FreeCodeCamp!"

//
//
/************************************ 18. Everything Be True ************/
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects.
The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
    return collection.every(obj => check(obj, pre));
}
function check(object, property) {
    if (object.hasOwnProperty(property) && object[property]) return true;
    else return false;
}
/* 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"},
  {"user": "Dipsy", "sex": "male"},
   {"user": "Laa-Laa", "sex": "female"},
    {"user": "Po", "sex": "female"}],
     "sex");
 // should return true.

 truthCheck([{"user": "Tinky-Winky", "sex": "male"},
 {"user": "Dipsy"},
 {"user": "Laa-Laa", "sex": "female"},
 {"user": "Po", "sex": "female"}],
 "sex");
 // should return false.

 truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0},
 {"user": "Dipsy", "sex": "male", "age": 3},
 {"user": "Laa-Laa", "sex": "female", "age": 5},
 {"user": "Po", "sex": "female", "age": 4}],
 "age");
 // should return false.

 truthCheck([{"name": "Pete", "onBoat": true},
 {"name": "Repeat", "onBoat": true},
 {"name": "FastFoward", "onBoat": null}],
 "onBoat");
 // should return false
 truthCheck([{"name": "Pete", "onBoat": true},
 {"name": "Repeat", "onBoat": true, "alias": "Repete"},
 {"name": "FastFoward", "onBoat": true}],
 "onBoat");
 // should return true
 truthCheck([{"single": "yes"}], "single");// should return true
 truthCheck([{"single": ""}, {"single": "double"}], "single");// should return false
 truthCheck([{"single": "double"}, {"single": undefined}], "single");// should return false
 truthCheck([{"single": "double"}, {"single": NaN}], "single");// should return false
*/
//
//
/************************************ 19. Arguments Optional ************/
/*
Create a function that sums two arguments together.
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
 */
function addTogether(...args) {
    if (args.length == 0) {
        //there is no args provided to the function .. lets return undefined
        return undefined;
    }
    else {
        //so there are arguments provided to the function
        if (args.length >= 2) {
            //there are two or more arguments provided to the function, lets consider only the first two arguments
            if (typeof (args[0]) != "number" || typeof (args[1]) != "number") {
                //so at least one of the first two arguments is not a number, lets return undefined
                return undefined;
            }
            else {
                //so both of the first two arguments are numbers, lets return their sum
                return args[0] + args[1];
            }
        }
        else {//handling input of one argument
            if (typeof (args[0]) != "number") {
                //the only argument provided is not even a number, lets return undefined
                return undefined;
            }
            else {
                //lets return a function that will wait for another argument 'y' to be summed with the currently provided argument 'args[0]'
                return function (y) {
                    //first lets check if the second argument newly provided is a number or not
                    if (typeof (y) != "number") return undefined;
                    else return args[0] + y;
                };
            }
        }
    }
}


//console.log(addTogether(2, 3));// should return 5.
//console.log(addTogether(2)(3));// should return 5.
//console.log(addTogether("http://bit.ly/IqT6zt"));// should return undefined.
//console.log(addTogether(2, "3"));// should return undefined.
//console.log(addTogether(2)([3]));// should return undefined.

//
//
/************************************ 20. Make a Person ************/
/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
*/
var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    //'firstName' is a private variable
    let firstName = firstAndLast.split(" ")[0];
    //'lastName' is a private variable
    let lastName = firstAndLast.split(" ")[1];
    //'fullName' is a private variable
    let fullName = firstAndLast;
    this.getFullName = function () {
        //return the fullName starting from the private variables
        return firstName + " " + lastName;
    };
    this.getFirstName = function () {
        //return the firstName which is a private variable
        return firstName;
    };
    this.getLastName = function () {
        //return the lastName which is a private variable
        return lastName;
    };
    this.setFirstName = function (newFirstName) {
        //update the private variable firstName
        firstName = newFirstName;
    };
    this.setLastName = function (newLastName) {
        //update the private variable lastName
        lastName = newLastName;
    };
    this.setFullName = function (newFullName) {
        //update the private variable fullName
        fullName = newFullName;
        firstName = newFullName.split(" ")[0];
        lastName = newFullName.split(" ")[1];
    };
};


var bob = new Person('Bob Ross');
bob.getFullName();

console.log(Object.keys(bob).length);// should return 6.
console.log(bob.getFirstName());// should return "Bob".
console.log(bob.getLastName());// should return "Ross".
console.log(bob.getFullName());// should return "Bob Ross".
bob.setFirstName("Haskell");
console.log(bob.getFullName());// should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.setLastName("Curry");
console.log(bob.getFullName());// should return "Haskell Curry" after bob.setLastName("Curry").
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());// should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.setFullName("Haskell Curry");
console.log(bob.getFirstName());// should return "Haskell" after bob.setFullName("Haskell Curry").
bob.setFullName("Haskell Curry");
console.log(bob.getLastName());// should return "Curry" after bob.setFullName("Haskell Curry").