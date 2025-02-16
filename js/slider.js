let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const paginationDotsContainer = document.querySelector('.pagination-dots');
const formButton = document.getElementById('form-button'); // Кнопка "Try now"

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('pagination-dot');
  dot.addEventListener('click', () => {
    showSlide(i);
    stopSlider();
    activateButton();
  });
  paginationDotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.pagination-dot');

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

let sliderInterval;
function startSlider() {
  sliderInterval = setInterval(nextSlide, 5000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

function activateButton() {
  formButton.disabled = false;
  formButton.style.backgroundColor = '#ffcf2d'; 
  formButton.style.color = 'black'; 
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

startSlider();
showSlide(0);

