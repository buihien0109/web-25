// 1. Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

const para = document.querySelector('p');

// Lấy ra nội dung
let content = para.innerText;

// Tách nội dung ra mảng các từ
let words = content.split(" ")

let result = words
    .map(word => word.length >= 8 ? `<span style="background-color: yellow">${word}</span>` : word);

para.innerHTML = result.join(" ");


// 2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
// 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
// 4. Thay thế các ký hiệu ? => 🤔, ! => 😲

para.innerHTML = para.innerHTML.replaceAll("?" , "🤔");
para.innerHTML = para.innerHTML.replaceAll("!" , "😲");
