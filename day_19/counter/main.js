// Yêu cầu
// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

const prev = document.querySelector(".prevBtn")
const next = document.querySelector('.nextBtn')
const counter = document.getElementById('counter')

let count = 0;

next.addEventListener('click', function () {
    count++;
    counter.innerText = count;

    changeColor();
})
prev.addEventListener('click', function () {
    count--;
    counter.innerText = count;

    changeColor();
})

const changeColor = () => {
    if (count > 0) {
        counter.style.color = 'green'
    } else if (count == 0) {
        counter.style.color = '#333333'
    } else {
        counter.style.color = 'red'
    }
}