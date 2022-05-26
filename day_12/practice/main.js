// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120


// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh


// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”


// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”


// Bài 5: Viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.
// Gợi ý : sử dụng document.write()

// In chữ màu đỏ
// document.write(`<span style="color: red;">Hiên</span>`)

// Quyển sách - Trang sách
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log(`i = ${i} - j = ${j}`);
//     }
// }

// In ra hình chữ
function printRectangle(row, col) {
    let content = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            content += "* "
        }
        content += "<br>"
    }
    document.write(`<pre>${content}<pre>`)
}
printRectangle(5, 4)

function printRectangleEmpty(row, col) {
    let content = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 || i == row - 1 || j == 0 || j == col - 1) {
                content += "* "
            } else {
                content += "  "
            }
        }
        content += "<br>"
    }
    document.write(`<pre>${content}<pre>`)
}

printRectangleEmpty(10, 8)

function printX(side) {
    let content = "";
    for (let i = 0; i < side; i++) {
        for (let j= 0; j < side; j++) {
            if (i == j || i == side - j - 1) {
                content += "* "
            } else {
                content += "  "
            }
        }
        content += "<br>"
    }
    document.write(`<pre>${content}<pre>`)
}
printX(4);
printX(5);