let currentSlideIndex = 1;

function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
  showSlides(currentSlideIndex);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function currentSlide(n) {
  showSlides((currentSlideIndex = n));
}

function changeSlide(n) {
  showSlides((currentSlideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("lightbox-slide");
  if (n > slides.length) {
    currentSlideIndex = 1;
  }
  if (n < 1) {
    currentSlideIndex = slides.length;
  }

  // Remove a classe 'active' de todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  // Exibe o slide atual e adiciona a classe 'active'
  slides[currentSlideIndex - 1].style.display = "block";
  slides[currentSlideIndex - 1].classList.add("active");
}
