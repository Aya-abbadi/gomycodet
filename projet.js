function isSymmetrical(num) {
    
    let strNum = num.toString();

    
    let reversedStr = strNum.split('').reverse().join('');

    
    return strNum === reversedStr;
}


console.log(isSymmetrical(121));  
console.log(isSymmetrical(123));  
console.log(isSymmetrical(888));   
console.log(isSymmetrical(1001));  
console.log(isSymmetrical(10));   
