// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

// Cách 1
function repeatString(str) {
    let s = "";
    for (let i = 0; i < 10; i++) {
        s += str;
    }
    return s;
}
console.log(repeatString("a"));

// Cách 2
function repeatString_01(str) {
    return str.repeat(10);
}
console.log(repeatString_01("a"));

// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

// Cách 1
function repeatString(str) {
    let sum = "";
    for (let i = 0; i < 9; i++) {
        sum += `${str}-`;
    }
    sum += str;
    return sum;
}
console.log(repeatString("a"));

// Cách 2
function repeatString_01(str) {
    let sum = str;
    for (let i = 0; i < 9; i++) {
        sum += `-${str}`;
    }
    return sum;
}
console.log(repeatString_01("a"));

// Cách 3
function repeatString_02(str) {
    let sum = "";
    for (let i = 0; i < 10; i++) {
        if(i == 9) {
            sum += str;
        } else {
            sum += `${str}-`;
        }
    }
    return sum;
}
console.log(repeatString_02("a"));

// Cách 4
function repeatString_03(str) {
    let sum = "";
    for (let i = 0; i < 10; i++) {
        sum += `${str}-`;
    }
    return sum.slice(0, sum.length - 1);
}
console.log(repeatString_03("a"));

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

// Cách 1
function repeatString(str, count) {
    let res = str;
    for (let i = 0; i < count - 1; i++) {
        res += '-' + str;
    }
    return res;
}

console.log(repeatString('hi', 10));

// Cách các khác thì tham khảo bài tập số 2

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum0To100() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sum0To100());

// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function volume(r) {
    let v = (4 * Math.PI * r * r * r) / 3;
    return v;
}
console.log(volume(4));

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
// Ví dụ :
// sum(3,8) = 22
// sum(8,3) = 22

// Cách 1
function sum(num1, num2) {
    total = 0;
    if (num1 < num2) {
        for (let i = num1 + 1; i < num2; i++) {
            total += i;
        }
    } else {
        for (let i = num2 + 1; i < num1; i++) {
            total += i;
        }
    }
    return total;
}
console.log(sum(3, 8));
console.log(sum(8, 3));

// Cách 2
function sum_01(num1, num2) {
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    let total = 0;
    for (let i = min + 1; i < max; i++) {
        total += i;
    }
    return total;
}
console.log(sum_01(3, 8));
console.log(sum_01(8, 3));

// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(11));
console.log(isPrime(10));

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function tongNT(number) {
    let sum = 0;
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(tongNT(8));

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function sumWish(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumWish(10));
