/************************************ 1. Sum All Numbers in a Range ************/
/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */
function sumAll(arr) {
    let sum=0;
    let min=0, max=0;
    if(arr[0]>arr[1]){
      max = arr[0];
      min = arr[1];
    }
    else{
      max = arr[1];
      min = arr[0];
    }
    for(let i=min; i<=max; i++) sum=sum+i;
    return sum;
  }
  
  sumAll([1, 4]);

//
//
/************************************ 2. Diff Two Arrays ************/
/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order. */
function diffArray(arr1, arr2) {
    var newArr = [];
    for(let i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])==-1) newArr.push(arr1[i]); 
    }
    for(let i=0; i<arr2.length; i++){
      if(arr1.indexOf(arr2[i])==-1) newArr.push(arr2[i]);
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//
//