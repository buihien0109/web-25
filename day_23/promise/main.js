// Promise : Lời hứa

// Pending : Đang chờ thực hiện
let promise = new Promise((resolve, reject) => {});
console.log(promise);

// Thành công
// Lời hứa : Cuối tuần nếu có tiền thì đi chơi
// resolve được gọi nếu lời hứa thành công
let hasMoney = true;
let promiseSuccess = new Promise((resolve, reject) => {
    if (hasMoney == true) {
        resolve("Cuối tuần đi chơi");
    }
});
console.log(promiseSuccess);

// Thất bại
// Lời hứa : Nếu cuối tháng có tiền thì trả nợ
hasMoney = false;
let promiseError = new Promise((resolve, reject) => {
    if (hasMoney == false) {
        reject("Không có tiền trả nợ");
    }
});
console.log(promiseError);

// Ví dụ 2
// Lời hứa 1: Cuối năm nếu có 30 triệu thì mua Iphone 13 pro max
// Lời hứa 2: Sau khi mua Iphone, nếu còn đủ 5 triệu thì mua Airpod

let money = 30;
const buyIphone = () => {
    return new Promise((resolve, reject) => {
        if(money >= 30) {
            resolve("Đủ tiền mua Iphone");
        } else {
            reject("Không đủ tiền mua Iphone, cày tiếp thêm thời gian nữa");
        }
    })
}

const buyAirpod = () => {
    return new Promise((resolve, reject) => {
        if(money - 30 >= 5) {
            resolve("Mua thêm Airpod");
        } else {
            reject("Không đủ tiền mua Airpod");
        }
    })
}

// console.log(buyIphone());
buyIphone()
    .then(res => {
        console.log(res);
        return buyAirpod()
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
    .finally(() => console.log("Về nhà"));
