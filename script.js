document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Показати або приховати кнопку при прокрутці
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Прокрутити сторінку вверх при кліку на кнопку
    scrollToTopBtn.addEventListener("click", () => {
        document.body.scrollTop = 0; // Для Safari
        document.documentElement.scrollTop = 0; // Для інших браузерів
    });
});
