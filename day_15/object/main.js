// Khai báo object
let emptyObj = {};

// Khai báo object có giá trị
// property : Đặc điểm, tính chất của đối tượng
// method : Hành vi, hành động
let student = {
    id : 1,
    name : "Nguyễn Văn A",
    email : "a@gmail.com",
    status : false,
    address : {
        city : "Hà Nội",
        district : "Thanh Xuân"
    },
    // goToScholl() {
    //     console.log("Đi học");
    // }
    goToScholl : function() {
        console.log("Đi học");
    },
    showInfo : function() {
        console.log(`Name : ${this.name}, email : ${this.email}, point : ${this.point}`);
    }
}

// Lấy ra thông tin
console.log(student.email);
console.log(student["email"]);

console.log(student.name);
console.log(student.address.city);

// Set lại thông tin
student.email = "nguyena@gmail.com";
student.address.district = "Đống Đa";
console.log(student);

// Thêm thuộc tính
student.point = 9;
console.log(student);

// Xóa thuộc tính
delete student.status;
console.log(student);

// Gọi thương thức
student.goToScholl();
student.showInfo();

// Phương thức
// 1. Lấy danh sách key => Trả về mảng
console.log(Object.keys(student));

// Duyệt keys để in ra value tương ứng
let keys = Object.keys(student)
keys.forEach(key => {
    console.log(student[key]);
})

// Sử dụng for ... in
for (const key in student) {
    console.log(student[key]);
}

// 2. Lấy danh sách value => Trả về mảng
console.log(Object.values(student));

// 3. Kiểm tra 1 key có tồn tại trong object hay không => true/false
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("age"));
