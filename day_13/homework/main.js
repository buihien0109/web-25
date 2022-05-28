// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ:
// checkStringExist(“i love you”, “you”) => true
// checkStringExist(“i love you”, “hate”) => false
// Cách 1
function checkStringExist(str, sub) {
    return str.includes(sub);
}
console.log(checkStringExist("i love you", "love"));

// Cách 2
function checkStringExist_01(str, sub) {
    if (str.indexOf(sub) != -1) {
        return true;
    }
    return false;
}
console.log(checkStringExist_01("i love you", "love"));

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
// Ví dụ:
// shortenString(“Xin chào các bạn”) => “Xin chào…”
// shortenString("hello’) => “hello”

function shortenString(str) {
    if (str.length > 8) {
        return str.slice(0, 8) + "...";
    }
    return str;
}
console.log(shortenString("xin chao cac ban"));
console.log(shortenString("hello"));

// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
// Ví dụ

// “Race car” => true,
// “hello world” => false.
function isString(str = "") {
    // Format chuỗi (in thường, loại bỏ khoảng trống) (replace , replaceAll)
    let str2 = str.toLowerCase().split(" ").join("");

    //Tìm chuỗi đảo ngược
    // (Tách thành mảng (split) -> đảo ngược mảng (reverse) -> Gộp thành chuỗi (join))
    let str3 = "";
    for (let i = str2.length - 1; i >= 0; i--) {
        str3 += str2[i];
    }

    // So sánh chuỗi ban đầu với chuỗi đảo ngược của nó
    // Nếu bằng nhau -> chuỗi đối xứng
    // if (str2 == str3) {
    //     return true;
    // }
    // return false;

    return str2 == str3;
}

console.log(isString("Race car"));

// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
// Ví dụ
// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359

function smallestNumber(num) {
    // Chuyển số -> chuỗi -> tách thành mảng -> sắp xếp các giá trị trong mảng
    let numArray = num.toString().split("").sort();
    if (numArray[0] != "-") {
        for (let i = 0; i < numArray.length; i++) {
            // Nếu có ký tự khác 0
            if (numArray[i] != 0) {
                // Lưu lại giá trị khác 0 đầu tiên
                let removedItem = numArray[i];

                // Cắt ra ký tự đó ra khỏi mảng
                numArray.splice(i, 1);

                // Chèn giá trị đã lưu vào đầu mảng
                numArray.unshift(removedItem);
                break;
            }
        }
    } else {
        numArray = numArray.reverse();
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] == "-") {
                let removedItem = numArray[i];
                numArray.splice(i, 1);
                numArray.unshift(removedItem);
                break;
            }
        }
    }

    return Number(numArray.join(""));
}

console.log(smallestNumber(53121));
console.log(smallestNumber(53021));
console.log(smallestNumber(50101));
console.log(smallestNumber(-53121));
console.log(smallestNumber(-530021));

// Cách 2
function smallestNumber2(num) {
    // Chuyển số -> chuỗi -> tách thành mảng -> sắp xếp các giá trị trong mảng
    let numArray = num.toString().split("").sort(),
        temp = "",
        i = 0;

    while (numArray[0] == "0") {
        i++;
        temp = numArray[0];
        numArray[0] = numArray[i];
        numArray[i] = temp;
    }

    return Number(numArray.join(""));
}
console.log(smallestNumber2(870092));
console.log(smallestNumber2(53121));
console.log(smallestNumber2(53021));

// check ho em voi

// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// “” => “hello_world”
// “Xin CXhào Các BẠN” => “xin_chào_các_bạn”
function snake_case(string) {
    // let str = string.toLowerCase();
    // return str.replace(/ /g, "_")
    // return str.replaceAll(" ", "_");

    return string.toLowerCase().split(" ").join("_");
}
console.log(snake_case("Xin chao cac Ban"));
