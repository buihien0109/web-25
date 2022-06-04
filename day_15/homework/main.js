// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
//  => [‘Tuấn’, ‘Nam’, ‘Hoa’]
function sortStudents(array) {
    // return array.sort().reverse()
    return array.sort((a, b) => b.localeCompare(a, "vi"));
}
console.log(sortStudents(["Nam", "Hoa", "Tuấn", "Đức", "Dương"]));
// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]

const shuffle = (arr) => {
    // return arr.sort(function () {
    //     return 0.5 - Math.random();
    // })
    return arr.sort(() => 0.5 - Math.random());
};

console.log(shuffle([1, 2, 5, 9, 7]));

// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
function symmetricDifference(arr1, arr2) {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// c => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function union(arr1 = [], arr2 = []) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (newArr.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (newArr.indexOf(arr2[i]) == -1) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]));
console.log(union([1, 2, 3, 2, 3, 4], [1, 2, 3, 1, 2, 5]));
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));
