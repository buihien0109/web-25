console.log("Hello main.js");

// Khai báo biến
let name;
console.log(name);

name = "Bùi Hiên";
console.log(name);

// Vừa khai biến, vừa khởi tạo giá trị cho biến
let email = "hien@gmail.com";
let number = 10;
let isStatus = true;

// Kiểu dữ liệu nguyên thủy (primative type)
// undefined, string, number, boolean, null...

// Khai báo hằng số
const PI = 3.14;
console.log(PI);

email = "a@gmail.com";
console.log(email);

let firstName = "Bùi";
let lastName = "Hiên";

// Kiểm tra kiểu dữ liệu của 1 biến
console.log(typeof email);
console.log(typeof number);
console.log(typeof isStatus);

// Chuỗi
let message = 'Xin chào các bạn, mình tên là "Bùi Hiên". Mình sinh năm 1997';
console.log(message);

let message1 = "Xin chào các bạn, " +
    "mình tên là \"Bùi Hiên\". " +
    "Mình sinh năm 1997";
console.log(message1);

// Cộng chuỗi
let fullName = firstName + " " + lastName;
console.log(fullName);

// Template String
let address = "Thái Bình";
let age = 25;

// Có sử dụng Template String
console.log(`Xin chào các bạn, mình tên là ${fullName}. Mình sinh năm ${2022 - age}, quê quán ở ${address}`);

// Không sử dụng Template String
console.log("Xin chào các bạn, mình tên là " + fullName + ". Mình sinh năm " + (2022 - age) + ", quê quán ở " + address);

// Hiển thị text theo nhiều dòng
console.log(`
    Dòng 1
    Dòng 2  
    Dòng 3
`);

// Math Object
console.log(Math.PI);


