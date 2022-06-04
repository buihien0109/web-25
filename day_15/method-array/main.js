// Map
function modulo2(array) {
    let num = [];

    for (let i = 0; i < array.length; i++) {
        num.push(array[i] % 2);
    }

    return num;
}

function modulo2_01(array) {
    return array.map(ele => ele % 2);
}

console.log(modulo2_01([1, 2, 3, 4, 5]));

// Filter = for + if

// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

const getElementGreater = (arr, number) => {
    return arr.filter(ele => ele > number);
}

console.log(getElementGreater([1, 2, 3, 4, 5], 3));
console.log(getElementGreater([1, 2, 3, 4, 5], 5));

// Find

// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7])); // 6

// FindIndex

// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7])); // 5

// Some
function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false
console.log(getNumberGreater1([1, 2, -3, -4])); // true

// Every
function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false

// Reduce
// Sử dụng reduce
function mutil(arr) {
    let result = arr.reduce( (total, elem) => total * elem, 1);
    return result
}

console.log(mutil([1,2,3,4]));