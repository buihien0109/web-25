// // Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function () {
//     console.log("keydown");
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });

const inputEl = document.querySelector("input");
const textEl = document.querySelector("span");

inputEl.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        // let value = inputEl.value;
        let value = event.target.value;

        if(value == "") {
            alert("Nội dung không được để trống");
            return;
        }

        textEl.innerText = value;
        inputEl.value = "";
    }
})