// Truy cập vào các thành phần
const productListEl = document.querySelector(".product-list");

const shoppingCartEl = document.querySelector(".shopping-cart");
const messageEl = document.querySelector(".message");

// Lấy danh sách sản phẩm đang có trong giỏ hàng
let items = getDataFromLocalStorage();


// Hiển thị danh sách sản phẩm ra ngoài giao diện
const renderProduct = arr => {
    productListEl.innerHTML = "";

    // Kiểm tra không có sản phẩm nào trong giỏ --> hiển thị thông tin
    if(arr.length == 0) {
        messageEl.classList.remove("d-none");
        shoppingCartEl.classList.add("d-none");
        return;
    }

    messageEl.classList.add("d-none");
    shoppingCartEl.classList.remove("d-none");

    let html = "";
    arr.forEach(p => {
        html += `
            <div class="product-item d-flex border mb-4">
                <div class="image">
                    <img src="${p.image}" alt="${p.name}" />
                </div>
                <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                    <div>
                        <div class="d-flex justify-content-between align-items-center">
                            <h2 class="text-dark fs-5 fw-normal">${p.name} (${p.size})</h2>
                            <h2 class="text-danger fs-5 fw-normal">${formatMoney(p.price)}</h2>
                        </div>
                        <p class="text-black-50">
                            <span class="border d-inline-block me-3">
                                <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick="minusCount(${p.id}, '${p.size}')">-</span>
                                <span class="py-2 px-3 d-inline-block fw-bold count">${p.count}</span>
                                <span class="py-2 px-3 d-inline-block fw-bold bg-light" onclick="plusCount(${p.id}, '${p.size}')">+</span>
                            </span>
                        </p>
                    </div>
                    <div>
                        <button class="text-primary border-0 bg-transparent fw-light" onclick="deleteProduct(${p.id}, '${p.size}')">
                            <span><i class="fa-solid fa-trash-can"></i></span>
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        `
    });

    productListEl.innerHTML = html;
}

// Xóa sản phẩm
const deleteProduct = (id, size) => {
    // Xác nhận xem có muốn xóa không
    let isConfirm = confirm("Bạn có muốn xóa không?");
    if(isConfirm) {
        // Tìm kiếm sản phẩm trùng id và size
        items = items.filter(p => p.id != id || p.size != size);

        // Lưu lại vào trong localStorage
        setDataToLocalStorage(items);

        // Cập nhật lại số lượng
        updateTotalCart();

        // Hiển thị lại trên giao diện;
        renderProduct(items);
    }
}

// Tăng số lượng
const plusCount = (id, size) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find(p => p.id == id && p.size == size);

    // Tăng số lượng
    product.count++;

    // Lưu lại vào trong localStorage
    setDataToLocalStorage(items);

    // Hiển thị lại trên giao diện;
    renderProduct(items);
}

// Giảm số lượng
const minusCount = (id, size) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find(p => p.id == id && p.size == size);

    // Giảm số lượng
    product.count--;

    if(product.count < 1) {
        product.count = 1
    }

    // Lưu lại vào trong localStorage
    setDataToLocalStorage(items);

    // Hiển thị lại trên giao diện;
    renderProduct(items);
}

// Format tiền - VND
const formatMoney = number => {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

renderProduct(items);