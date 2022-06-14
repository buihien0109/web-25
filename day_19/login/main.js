const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    }
]

// Truy cập
const button = document.getElementById("btn-login")

button.addEventListener("click", function () {
    // Lấy dữ liệu ô input
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // 1. Kiểm tra thông tin không được để trống
    if (!username || !password) {
        if (!username && !password) {
            alert("Vui lòng điền thông tin")
        } else if (!username) {
            alert("Vui lòng nhập tên")
        } else {
            alert("Vui lòng nhập mật khẩu")
        }
    } else {
        // 2. Kiểm tra thông tin đăng nhập đúng hay không
        // Có thể sử dụng for để thay thế
        const isLogin = users.some(user => user.username == username && user.password == password);

        if(isLogin) {
            alert("Đăng nhập thành công")
        } else {
            alert("Tài khoản không chính xác")
        }
        
        // isLogin == true ? alert("Đăng nhập thành công") : alert("Tài khoản không chính xác")
    }
})