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
        for(let key in source){
            //console.log(key);
            if(collection[i].hasOwnProperty(key)){
                //so the 'key' of object source does exist in object collection[i], lets now check if they're equal
                if(source[key] == collection[i][key]){
                    //so the value of 'key' in object collection[i] and object source are equal
                    //do nothing
                }
                else{
                    keys_andValues_exist = false;
                }
            }
            else{
                keys_andValues_exist = false;
            }            
        }
        if(keys_andValues_exist){
            //so the keys and values of object source are the same in this object collection[i]
            arr.push(collection[i]);
        }
    }
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// should return [{ first: "Tybalt", last: "Capulet" }].
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
//should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
//should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
//should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
//should return []