const tableContentEl = document.querySelector("tbody");

// Tạo mảng để lưu ds user sau khi lấy dữ liệu từ API
let users = [];

// Gọi API lấy ds user -> Hiển thị
const getUsers = async () => {
    try {
        // Gọi API
        let res = await axios.get("https://api.github.com/users");
        console.log(res);

        // Lưu lại dữ liệu trả về từ API
        users = res.data

        // Hiển thị ds user
        render(users);
    } catch (error) {
        console.log(error)
    }
}

// Render dữ liệu user và phân trang
const render = arr => {
    $('.pagination-container').pagination({
        dataSource: arr,
        pageSize: 5,
        // showPrevious: false,
        // showNext: false,
        // className: 'paginationjs-theme-blue',
        callback: function (data, pagination) {
            console.log(pagination);
            renderUser(data, pagination);
        }
    })
}

// Hiển thị danh sách user
const renderUser = (arr, pagination) => {
    // B1 : Clear hết dữ liệu trước khi hiển thị
    tableContentEl.innerHTML = "";

    // B2 : Sử dụng vòng lặp để tạo dữ liệu
    let html = "";
    arr.forEach((user, index) => {
        const { id, login, avatar_url, html_url, repos_url } = user;
        const { pageNumber, pageSize } = pagination;

        // pageNumber, pageSize, index => Công thức
        html += `
        <tr>
            <td>${(pageNumber - 1) * pageSize + (index + 1)}</td>
            <td>
                <img src="${avatar_url}" alt="${login}">
            </td>
            <td>${login}</td>
            <td>${html_url}</td>
            <td>${repos_url}</td>
        </tr>
        `
    });

    // B3 : Insert dữ liệu sau khi tạo
    tableContentEl.innerHTML = html;
}

getUsers();