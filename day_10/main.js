// Định nghĩa function
function sayHello() {
    console.log("Xin chào ...");
}

sayHello();

// Function có 1 tham số
function sayHelloWithName(name) {
    console.log(`Xin chào ${name}`);
}

sayHelloWithName("Nguyễn Văn A");
sayHelloWithName("Trần C");
sayHelloWithName("Ngô B");

// Function có 2 tham số
function showInfo(name, year) {
    console.log(`Xin chào, tôi tên là ${name}, năm nay tôi ${2022 - year} tuổi.`);
}

showInfo("Bùi Hiên", 1997);
showInfo("Đức Thịnh", 1996);

// Function có trả về kết quả
// Ví dụ : Tính tổng 2 số a, b
function sum(a, b) {
    let result = a + b;
    // console.log(a);
    // console.log(b);
    return result;
}

let data = sum(3, 4);
console.log(data); // 7

console.log(sum(10, 20)); // 30
console.log(sum(data, 10)); // 17

// Default Parameter
function sum1(a = 10, b = 20) {
    let result = a + b;
    return result;
}

console.log(sum1(3)); // 23;
console.log(sum1()); // 30;
console.log(sum1(5, 6)); // 11

// Tính toán thế kỷ của 1 năm bất kỳ
function getCentury() {
    // Tính toán thế kỷ
    let century = 21;
    console.log(century);

    // Trả về kết quả
    // return century
}

// console.log(getCentury(2022));
// console.log(getCentury(1346));

// Biến global : Định nghĩa bên ngoài function
let name = "Nguyễn Văn A";

getCentury();
console.log(century);

{
    let email = "a@gmail.com";
    console.log(email);
}

let email = "b@gmail.com";

console.log(email);
