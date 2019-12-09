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