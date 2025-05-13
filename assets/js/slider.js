let currentSlide = 0;
let slides, dots;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
  slides = document.querySelectorAll('.slide');
  dots = document.querySelectorAll('.dot');
  showSlide(currentSlide);

  // Auto-slide every 4 seconds
  setInterval(nextSlide, 10000);
});
