function reverseString(str) {

    let strArray = str.split('');
    
   
    let reversedArray = strArray.reverse();
    
    
    return reversedArray.join('');
}


console.log(reverseString("hello"));        
console.log(reverseString("JavaScript"));   
console.log(reverseString("12345"));        
function countCharacters(str) {
    return str.length;
}


console.log(countCharacters("hello"));       
console.log(countCharacters("JavaScript"));   
console.log(countCharacters("OpenAI GPT"));  
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("hello world"));       
console.log(capitalizeWords("javaScript is fun")); 
console.log(capitalizeWords("openai gpt model"));   

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}


let numbers = [3, 7, 1, 9, 4];

console.log(findMaximum(numbers));  
console.log(findMinimum(numbers));  

function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}


let numbers = [3, 7, 1, 9, 4];

console.log(findMaximum(numbers)); 
console.log(findMinimum(numbers));  
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


console.log(sumArray([1, 2, 3, 4, 5]));   
console.log(sumArray([10, -2, 8, 7]));    
 function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 === 0));  // [2, 4] (nombres pairs)
console.log(filterArray(["apple", "banana", "cherry"], word => word.length > 5));  

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  
console.log(factorial(7));  
console.log(factorial(0));  

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


console.log(isPrime(7));   
console.log(isPrime(10));  
console.log(isPrime(17));  
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}


console.log(fibonacci(5)); 
console.log(fibonacci(10));
