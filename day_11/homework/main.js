function checkNumber(number) {
    if (number % 15 === 0) {
        console.log('FizzBuzz')
    } else if (number % 3 === 0 && number % 5 !== 0) {
        console.log('Fizz')
    } else if (number % 3 !== 0 && number % 5 === 0) {
        console.log('Buzz')
    }
}

checkNumber(30);
checkNumber(33);
checkNumber(35);

// xong r thay

// Bài 2:

// Viết function giải phương trình bậc nhất (ax + b= 0)

function ptbac1(a, b) {
    // if(a==0 && b==0){
    //     console.log('phương trình vô số nghiệm');
    // }else if(a!==0 && b==0){
    //     console.log('phương trình có nghiệm x=0');
    // }else if(a!==0 && b!==0){
    //     console.log('phương trình có nghiệm x=' -b/a);
    // }else if(a==0 && b!==0){
    //     console.log('phương trình vô nghiệm');
    // }
    if (a == 0) {
        if (b == 0) {
            console.log("Vô số nghiệm");
        } else {
            console.log("Vô nghiệm");
        }
    } else {
        console.log('Phương trình có nghiệm x = ', -b / a); // 3x + 0 = 0
    }
}

// Bài 4:
// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?
// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”

// year % 4 == 0 && year % 100 != 0
// year % 400 == 0
function checkLeapYear(year) {
    // if (a % 4 == 0) {
    //     if (a % 100 == 0) {
    //         if (a % 400 == 0) {
    //             console.log("là năm nhuận")
    //         } else {
    //             console.log("Không là năm nhuận")
    //         }
    //     } else {
    //         console.log("Là năm nhuận")
    //     }
    // } else {
    //     console.log("Không là năm nhuận")
    // }

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("là năm nhuận")
    } else {
        console.log("Không là năm nhuận")
    }
}

checkLeapYear(2000);
checkLeapYear(2001);
checkLeapYear(2020);
checkLeapYear(1900);


// Bài 5:
// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

function calculateBmi(weight, height) {
    let bmi = weight / (height * height)
    return bmi
}

// Bài 6:
// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

function convertCtoF(c) {
    let doF = (1.8 * c) + 32
    return doF
}