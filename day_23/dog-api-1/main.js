
/*
1. Khái niệm API là gì?
Appication Programing Interface (giao diện lập trình ứng dụng)
Tập hợp các quy tắc mà qua đó cho phép các thành phần, hoặc các ứng kết tương tác như thế nào

2. Ví dụ thực tế
Đi ăn nhà hàng
Khách hàng : client (front end)
Nhà bếp : server (back end)
Khách hàng --> gọi món --> nhà bếp
Nhà bếp --> nấu món ăn --> Khách hàng
Nhân viên : lấy thực đơn từ khách hàng --> gửi cho nhà bếp
Nhà bếp nấu ăn xong --> nhân viên bưng món ăn lên khách hàng

3. Cấu trúc như thế nào
API = Http method + URL

Http method (động từ)
GET : Lấy thông tin : Lấy thông tin từ menu
POST : Tạo : Đặt món
PUT : Cập nhật : Thay đổi món ăn
DELETE : Xóa : Hủy món ăn

URL(danh từ - resouce) users
GET /users -> lấy danh sách tất cả user
GET /users/1 : lấy thông tin của user có id là 1
GET /users/1/blogs : lấy danh sách tất cả blog của user có id là 1
GET /users/1/blogs/2 : Lấy thông tin blogs có id = 2 của user có id = 1

POST /users -> Tạo user mới (/users/create --> Hợp lệ nhưng không đúng chuẩn restful API)
{
    name :
    email :
    ...
}

POST /users/1/blogs --> Tạo blogs mới cho user có id = 1
{
    title :
    content :
    ...
}

PUT /users/1 -> Cập nhật thông tin cho user có id = 1
{
    name : 
    email :
    ...
}

DELETE /users/1 --> Xóa user có id = 1

4. Thực hiện gọi API như thế
- axios (thư viện bên thứ 3, cần phải nối link vào để thực hiện) (khuyên dùng)
- fetch API (có sẵn của javascript)
- AJAX (có trong jQuery, cũng cần nối link để sử dụng)

5. Test API như thế nào
- Postman
- Extension VSCode : REST Client
- Test trực tiếp trên browser (Chỉ sử dụng với API GET)
*/


const imageEl = document.getElementById("image");
const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    try {
        // Gọi API -> https://dog.ceo/api/breeds/image/random
        let res = await axios.get("https://dog.ceo/api/breeds/image/random");
        console.log(res);
        console.log(res.data.message);

        imageEl.src = res.data.message;
    } catch (error) {
        console.log(error);
    }
})