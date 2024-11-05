
// Enhanced slideshow.js
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
let autoSlideInterval;

// Function to show the selected slide and reset the automatic timer
function showSlides(n) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    // Show the current slide with wipe transition
    slides[n].classList.add("active");

    // Reset the automatic slideshow timer
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000);
}

// Function for manual navigation
function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides(slideIndex);
}

// Function for automatic slide transition
function autoSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
}

// Initial display and automatic slideshow setup
showSlides(slideIndex);
autoSlideInterval = setInterval(autoSlide, 5000);
