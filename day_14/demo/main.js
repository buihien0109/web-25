// // ******************** 1. Function expression
// // Function có thể gán cho biến

// // Regular function
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(10, 20));

// // Anonymous function : Function không có tên (vô danh, ẩn danh)
// const sum1 = function(a, b) {
//     return a + b;
// }
// console.log(sum1(3, 4));

// // ******************** 2. Higher Order Function (HOF) : Function bậc cao
// // Truyền vào làm tham số cho function khác

// const filterNumber = function(arr, func) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(func(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// // Lấy ra số lẻ
// let data1 = filterNumber([1,2,3,4,5,6], function(ele) {
//     return ele % 2 == 1;
// })
// console.log(data1);

// // Lấy ra số chẵn
// let data2 = filterNumber([1,2,3,4,5,6], function(ele) {
//     return ele % 2 == 0;
// })
// console.log(data2);

// // Lấy ra số > 3
// let data3 = filterNumber([1,2,3,4,5,6], function(ele) {
//     return ele > 3;
// })

// console.log(data3);

// // Lấy ra số nguyên tố
// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// let data4 = filterNumber([1,2,3,4,5,6], isPrime)
// console.log(data4);


// // Có thể được trả về từ functions khác.
// const sum2 = function(a, b) {
//     return function(c) {
//         return a + b + c;
//     }
// }

// // let func = sum2(10, 20);
// // console.log(func);

// // let data = func(30);
// // console.log(data);

// let data = sum2(10, 20)(30);
// console.log(data);

// // ******************** Arrow function ********************
// // function sum(a, b) {
// //     return a + b;
// // }

// // const sum3 = (a, b) => {
// //     return a + b
// // }

// const sum3 = (a, b) => a + b;
// console.log(sum3(5,6));

// // ******************** ForEach ********************
// // Khai báo mảng các số
// let numbers = [1, 2, 3, 4, 5, 6]

// // In ra các phần tử trong mảng
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// // Value : numbers[i]
// // Index : i
// numbers.forEach(function(value, index) {
//     console.log(`index : ${index} - value : ${value}`);
// })

// numbers.forEach((value, index) => {
//     console.log(`index : ${index} - value : ${value}`);
// })

// // Tính tổng
// let total = 0;
// numbers.forEach(value => {
//     total += value;
// })

// console.log(total);

// // In ra các giá trị số lẻ
// numbers.forEach(value => {
//     if(value % 2 == 0) {
//         return
//     }
//     console.log(value);
// })

// // ******************** for ... of ********************
// // In ra các giá trị của mảng
// for (const value of numbers) {
//     console.log(value);
// }

// Tìm số lớn nhất
let numbers = [1, 4, 11, 6, 2, 4, 7, 0]
console.log(Math.max(1, 4, 11, 6, 2, 4, 7, 0));
console.log(Math.max(...numbers)) // 11

// Nối mảng
let a1 = [1, 2];
let a2 = [3, 4];
let a3 = [...a1, ...a2]
console.log(a3)

let a4 = [5, 6, ...a1, 7, 8, ...a2, 9, 10];
console.log(a4);

// Copy
let numbersCopy = numbers.slice();
let numbersCopy1 = [...numbers];

numbersCopy.push(100);
numbersCopy1.pop();

console.log(numbers);
console.log(numbersCopy);
console.log(numbersCopy1);

function sumOther(...args) {
    console.log(args);
}

sumOther(1, 2, 3, 4);
sumOther(1, 2, 3, 4, 5, 6, 7);
sumOther(1, 2, 3, 4, 5, 6, 7, 10, 11, 12);