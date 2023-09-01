const carousel = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));

let currentIndex = 0;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Auto-advance every 5 seconds

showSlide(currentIndex);
