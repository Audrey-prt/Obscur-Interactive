// Menu
function toggleMenu(el) {
  el.classList.toggle("active");
  document.getElementById("menu").classList.toggle("active");
}

// Thème
function toggleTheme() {
  document.body.classList.toggle("light");
  const btn = document.getElementById('themeBtn');
  btn.innerText = document.body.classList.contains('light') ? '☀️' : '🌙';
}

// Carousel
document.addEventListener("DOMContentLoaded", () => {

  let currentIndex = 0;
  const track = document.getElementById("carouselTrack");
  const slides = track.children;

  function updateCarousel() {

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active", "prev", "next");
    }

    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
    slides[prevIndex].classList.add("prev");
    slides[nextIndex].classList.add("next");
  }

  window.nextSlide = function() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  };

  window.prevSlide = function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  };

  updateCarousel();
});

