// Bài tập:

// Bài 1: Tìm số lớn nhất trong mảng
function findLargestNumber(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// [1, 3, 6, 2 4];
// max = 1
// 1 -> max = 3;
// 2 -> max = 6;

// Cách 2 : Sắp xếp tăng dần hoặc giảm dần -> lấy ra giá trị đầu tiên hoặc cuối cùng

// Bài 2: Tìm số nhỏ nhất trong mảng

function findSmallestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// baiài 4
// function textStr(str) {
//     return str.repeat(10);
// }
// console.log(textStr("hello"));

function copyString(str, num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(str);
    }
    return arr.join("");
}
console.log(copyString("a", 10));

//bài 5
// function repeatString(str) {
//     let result = `${str}-`.repeat(10);
//     return result.slice(0, result.length - 1);
// }
// console.log(repeatString("hello"));
console.log(copyString("a", 10));

//bài 5
// function repeatString(str) {
//     let result = `${str}-`.repeat(10);
//     return result.slice(0, result.length - 1);
// }
// console.log(repeatString("hello"));
//     return result.slice(0, result.length - 1);
// }
// console.log(repeatString("hello"));

function copyStringWithDash(str, num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(str);
    }
    return arr.join("-");
}
console.log(copyStringWithDash("a", 10));

//Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function chiaMang(array) {
    let num = [];

    for (let i = 0; i < array.length; i++) {
        num.push(array[i] % 2);
    }
 
    return num;
}

let num1 = [4, 2, 5, 6, 2, 7];
console.log(chiaMang(num1));
