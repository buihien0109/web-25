// 1. Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

// Tạo nút button add
const addBtn = document.createElement('button')
addBtn.textContent = 'Add'
document.body.appendChild(addBtn)

// Tạo ô input
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Item abc'
input.style.marginLeft = '20px'
document.body.appendChild(input)


const lists = document.getElementById("list")

addBtn.addEventListener('click', () => {
    if (input.value) {
        const newItem = document.createElement('li')
        newItem.textContent = input.value
        lists.appendChild(newItem)
    } else {
        alert('Input field cannot be blank!!!')
    }

    // Clear dữ liệu trong ô input
    input.value = ""
})

// 2. Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul