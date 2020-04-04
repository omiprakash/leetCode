// Program to find the smaller number count than the current number
let inputArray = [7,7,7,7];
let outPutArray = [];
for(let i =0; i< inputArray.length; i++){
    let count = 0;
    for(let j =0; j< inputArray.length; j++){
        if(inputArray[i] > inputArray[j]){
            count++;
        }
    }
    outPutArray.push(count);
}
console.log(outPutArray);