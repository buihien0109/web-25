const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", function() {
    // Mốc hiển thị : 300
    if(document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
})

btnTop.addEventListener("click", function() {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})