/* Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings. */

let input = "RLLLLRRRLR";
let inputArray = input.split('');
let arrayLength = inputArray.length;
let i =0;
let totalCount = 0;
let stringCount = 0;
while(i < arrayLength){
    if(inputArray[i] == 'R'){
        stringCount++;
    }else {
        stringCount--
    }
    if(stringCount === 0){
        totalCount++
    }
    i++;
}
console.log(totalCount);
