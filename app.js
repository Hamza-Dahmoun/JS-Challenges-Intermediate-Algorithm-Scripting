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
    for(let i=0; i<str.length; i++){
        let onePair = [str[i]];
        onePair.push(pairs[str[i]]);
        arr.push(onePair);
    }
    return arr;
  }
  
  //console.log(pairElement("GCG"));
