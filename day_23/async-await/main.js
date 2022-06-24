// Ví dụ 2
// Lời hứa 1: Cuối năm nếu có 30 triệu thì mua Iphone 13 pro max
// Lời hứa 2: Sau khi mua Iphone, nếu còn đủ 5 triệu thì mua Airpod

let money = 40;
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

// Cách 1: Regular function
// async function demo () {}

// Cách 2: Function expresstion
// const demo = async function() {}

// Cách 3: Arrow function
const buy = async () => {
    try {
        let res = await buyIphone();
        console.log(res);

        let res1 = await buyAirpod();
        console.log(res1);
    } catch (error) {
        console.log(error);
    }
    return "Về nhà";
}

const data = buy();
console.log(data);

data.then(res => console.log(res));