let swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    slidesPerView: 3,
});
let blogs = document.querySelector(".blogs");
window.onscroll = function () {
    if (window.scrollY >= blogs.offsetTop - 400) {
        blogs.classList.remove("hidden");
    }
};
document.querySelector(".date").textContent = new Date();
