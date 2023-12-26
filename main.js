// // bai tap 1 is here (made by Long)
function modifyString(input) {
    if (input.length >= 3) {
        if (input.endsWith("ing")) {
            return input + "ly";
        } else {
            return input + "ing";
        }
    } else {
        return input;
    }
}

console.log(modifyString("Watch"));      
console.log(modifyString("Swimming"));        
console.log(modifyString("Do"));    

// // bai tap 3 is here (made by Long)
function filterNonNumbers(inputArray) {
    return inputArray.filter(item => !isNaN(item));
}

console.log(filterNonNumbers([4, "a", 5, "b", 6]));  // Ket qua: [4,5,6]


// bai tap 4 is here (made by Long)
function sortDescending(inputArray) {
    return inputArray.sort((a, b) => b - a);
}

console.log(sortDescending([1, 8, 4, 3]));  // Kết quả là: [8, 4, 3, 1]


// // bai tap 5 is here (made by Long)
function multiplyByTwo(inputArray) {
    return inputArray.map(item => item * 2);
}

console.log(multiplyByTwo([2, 4, 3, 5, 4, 6]));  // Output: [2, 4, 6]


// // bai tap 6 is here (made by Long)

function filterOddNumbers(inputArray) {
    let result = [];
    inputArray.forEach(item => {
        if (item % 2 !== 0) {
            result.push(item);
        }
    });
    return result;
}

console.log(filterOddNumbers([2, 3, 4, 6, 7, 8, 9, 11, 12]));  // kết quả là [ 3, 7, 9, 11 ]


// // bai tap 7 is here (made by Long)

function removeDuplicates(inputArray) {
    let result = [];
    inputArray.forEach(item => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    });
    return result;
}

console.log(removeDuplicates([1, 3, 4, 5, 3, 4, 5, 3, 6, 7, 8, 2, 3]));  // kết quả là như này nè man:  [1, 3, 4, 5, 6, 7, 8, 2]




 //===== bài 2 is so bad, and the reason for that is em vẫn chưa biết làm ặc=====

  //Bài 2 : This is bài 2

Console.log('Heloooo Quộc!')
