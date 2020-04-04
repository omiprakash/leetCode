// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
let inputArray = [1];
let x1=0;
for (let i = 0; i < inputArray.length; i++) {
    x1 ^= (i+1)^inputArray[i];
}
return x1;