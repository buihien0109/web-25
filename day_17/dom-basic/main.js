// Truy cập thông qua id
const heading = document.getElementById("heading");
console.log(heading);

// Truy cập thông qua tag name
// HTMLCollection -> Giống như mảng, nhưng bản chất không phải là mảng
// HTMLCollection là tập hợp các Node ở dạng Element Node
// Node : Element Node, Text Node, Comment Node, Attribute Node, ...
const paras = document.getElementsByTagName("p");
console.log(paras);

console.log(paras[0]); // Truy cập para1
console.log(paras.length);

// Duyệt HTMLCollection
for (let i = 0; i < paras.length; i++) {
    console.log(paras[i]);
    paras[i].style.color = "blue";
}

Array.from(paras).forEach(element => {
    console.log(element);
});

// Truy cập thông qua class name
const parasClassName = document.getElementsByClassName("para");
console.log(parasClassName);

// Truy cập thông qua CSS Selector
const h1 = document.querySelector("#heading");
console.log(h1);

const para1 = document.querySelector("p");
console.log(para1);

const para2 = document.querySelector(".para");
console.log(para2);

// .para + .para
const para3 = document.querySelector("body p:nth-child(4)");
console.log(para3);

const ul2 = document.querySelector("body > ul");

const ul1 = document.querySelector(".box ul");

// Lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

// Thêm phần tử
const box = document.querySelector(".box");

// Tạo phần tử DOM
// Ví dụ : Tạo ra thẻ a (google)
const link = document.createElement("a");
link.innerText = "Trang google";
link.href = "https://www.google.com/";

console.log(link);

// Tạo thẻ input, type="text", placeholder="Enter name"
// Vị trị : Đằng trước para2

// document.body.insertAdjacentElement("afterbegin", link);
heading.insertAdjacentElement("beforebegin", link);


// Sử dụng vòng lặp để tạo nội dung và insert

let links = [
    {
        link : "https://www.facebook.com/",
        title : "Trang facebook"
    },
    {
        link : "https://twitter.com/?lang=vi",
        title : "Trang Twitter"
    },
    {
        link : "https://www.instagram.com/",
        title : "Trang Instagram"
    }
]

// Truy cập
const socialMedia = document.querySelector(".social-media");

// Cách 1 : Tạo thẻ -> chèn
// links.forEach(ele => {
//     const link = document.createElement("a");
//     link.innerText = ele.title;
//     link.href = ele.link;

//     socialMedia.appendChild(link);
// })

// Cách 2 : Insert trực tiếp html -> insertAdjacentHTML
// links.forEach(ele => {
//     socialMedia.insertAdjacentHTML("beforeend", `<a href="${ele.link}">${ele.title}</a>`)
// })

// Cách 3 : Insert trực tiếp html -> innerHTML
// let html = "";
// links.forEach(ele => {
//     html += `<a href="${ele.link}">${ele.title}</a>`
// })
// socialMedia.innerHTML = html;

// Cách 4 : Insert trực tiếp html -> innerHTML
// links.forEach(ele => {
//     socialMedia.innerHTML += `<a href="${ele.link}">${ele.title}</a>`
// })

// Thay thế
const h3 = document.createElement("h3");
h3.innerText = "Đây là thẻ h3";

document.body.replaceChild(h3, para3);

// Sao chép
const boxCopyTrue = box.cloneNode(true);
const boxCopyFalse = box.cloneNode(false);

console.log(boxCopyTrue);
console.log(boxCopyFalse);

document.body.prepend(boxCopyTrue);
