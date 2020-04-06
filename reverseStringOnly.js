// String reverse without changing the special character place.
let x = "Test1ng-Leet=code-Q!";
let letters = /^[a-zA-Z]+$/;
let inputArray = x.split('');
let i =0;
let j = inputArray.length-1;
while(i<j){
    if(!inputArray[i].match(letters)){
        i++;
    }
    else if(!inputArray[j].match(letters)){
        j--;
    } else {
        let temp = inputArray[i];
            inputArray[i] = inputArray[j]
            inputArray[j] = temp;
            i++;
            j--;
    }
}

console.log(inputArray.join(''))