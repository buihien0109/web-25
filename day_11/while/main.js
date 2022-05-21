// In ra các giá trị từ 1 -> 10;

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Thực hiện in ra 1 số ngẫu nhiên từ 0 -> 100;
// Nếu gặp số > 90 thì dừng lại

// while (true) {
//     let rdNumber = Math.floor(Math.random() * 101)

//     if (rdNumber > 90) {
//         break;
//     }

//     console.log(rdNumber);
// }


// Viết chương trình sinh 1 số ngẫu nhiên từ 0->100 (randomNumber)

// Sử dụng vòng lặp while cho người dùng nhập vào 1 số bất kỳ từ bàn phím (userNumber) để đoán số vừa random

// Thực hiện so sánh hai số randomNumber với userNumber

// Nếu userNumber > randomNumber -> Bạn nhập số lớn hơn rồi, cho nhập lại
// Nếu userNumber < randomNumber -> Bạn nhập số nhỏ hơn rồi, cho nhập lại
// Nếu userNumber == randomNumber -> Chúc mừng bạn nhập đúng rồi

// let randomNumber = Math.floor(Math.random() * 101);

// while (true) {
//     let userNumber = Number(prompt("Mời nhập số : "));

//     if (userNumber > randomNumber) {
//         console.log("Bạn nhập số lớn hơn rồi, cho nhập lại");
//     } else if (userNumber < randomNumber) {
//         console.log("Bạn nhập số nhỏ hơn rồi, cho nhập lại");
//     } else {
//         console.log("Chúc mừng bạn nhập đúng rồi");
//         break;
//     }
// }

// DO-WHILE
// In ra các giá trị từ 1 -> 10;
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10)
