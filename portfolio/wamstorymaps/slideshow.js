// script.js
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[n].classList.add("active");
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides(slideIndex);
}

function autoSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
}

// Initial display and auto-slide setup
showSlides(slideIndex);
setInterval(autoSlide, 5000); // Change image every 5 seconds
