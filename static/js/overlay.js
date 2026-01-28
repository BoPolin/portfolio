// Project images data - add your project images here
const projectImages = {
  'music-playlist': [
    '/static/images/projects/1.png',
    '/static/images/projects/2.png',
    '/static/images/projects/3.png',
    '/static/images/projects/4.png',
    '/static/images/projects/5.png',
    '/static/images/projects/6.png',
    '/static/images/projects/7.jpg',
    '/static/images/projects/8.jpg',
    '/static/images/projects/9.jpg',
    '/static/images/projects/10.jpg',
    '/static/images/projects/11.jpg',
    '/static/images/projects/12.jpg',
    '/static/images/projects/13.jpg',
    '/static/images/projects/14.jpg',
    '/static/images/projects/15.jpg',
  ],
  'shopping-cart': [
    '/static/images/shopping_cart/1.png',
    '/static/images/shopping_cart/2.png',
    '/static/images/shopping_cart/3.png',
    '/static/images/shopping_cart/4.png',
    '/static/images/shopping_cart/5.png',
    '/static/images/shopping_cart/6.png',
    '/static/images/shopping_cart/7.png',

    // Add more images for this project
  ],
  'renting-home': [
    '/static/images/renting_system/1.png',
    '/static/images/renting_system/2.png',
    '/static/images/renting_system/3.png',
    '/static/images/renting_system/4.png',
    '/static/images/renting_system/5.png',
    '/static/images/renting_system/6.png',
    '/static/images/renting_system/7.png',
    '/static/images/renting_system/8.png',
    '/static/images/renting_system/9.png',
    '/static/images/renting_system/10.png',
    '/static/images/renting_system/11.png',


    // Add more images for this project
  ],
  'portfolio': [
    '/static/images/portfolio/1.png',
    '/static/images/portfolio/2.png',
    '/static/images/portfolio/3.png',
    '/static/images/portfolio/4.png',
    '/static/images/portfolio/5.png',
    '/static/images/portfolio/6.png',
    // Add more images for this project
  ],
  'mobile-ui': [
    '/static/images/mobile_app/1.png',
    '/static/images/mobile_app/2.png',
    '/static/images/mobile_app/3.png',
    '/static/images/mobile_app/4.png',
    '/static/images/mobile_app/5.png',
    '/static/images/mobile_app/6.png',
    '/static/images/mobile_app/7.png',
    '/static/images/mobile_app/8.png',
    '/static/images/mobile_app/9.png',
    '/static/images/mobile_app/10.png',
    '/static/images/mobile_app/11.png',
    '/static/images/mobile_app/12.png',
    '/static/images/mobile_app/13.png',
    '/static/images/mobile_app/14.png',
    '/static/images/mobile_app/15.png',

  ],

  'minimart-api': [
    '/static/images/comingsoon.jpg',
    // Add more images for this project
  ],
  'coffee_reservation': [
    '/static/images/comingsoon.jpg',
    // Add more images for this project
  ],
    'product-api': [
    '/static/images/product_api_java/1.png',
    // Add more images for this project
  ],

  'tire_pos': [
    '/static/images/tire_pos/1.png',
    '/static/images/tire_pos/2.png',
    '/static/images/tire_pos/3.png',
    '/static/images/tire_pos/4.png',
    '/static/images/tire_pos/5.png',
    '/static/images/tire_pos/6.png',
    '/static/images/tire_pos/7.png',
    '/static/images/tire_pos/8.png',
    '/static/images/tire_pos/9.png',
    '/static/images/tire_pos/10.png',
    '/static/images/tire_pos/11.png',
    // Add more images for this project
  ],


};

// Project titles
const projectTitles = {
  'music-playlist': 'Music Playlist Designs',
  'shopping-cart': 'Shopping Cart Web App Designs',
  'renting-home': 'Renting Home System Designs',
  'portfolio': 'Portfolio Website Designs',
  'mobile-ui': 'Mobile App / Website UI Designs'
};

// Get elements
const popup = document.getElementById('designPopup');
const closeBtn = document.getElementById('closePopup');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
const slideshowContainer = document.querySelector('.slideshow-container');
const popupTitle = document.getElementById('popupTitle');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');

let currentIndex = 0;
let currentImages = [];

// Function to open popup
function openPopup(projectKey) {
  currentImages = projectImages[projectKey] || [];
  
  if (currentImages.length === 0) {
    alert('No design images available for this project yet.');
    return;
  }
  
  // Set title
  popupTitle.textContent = projectTitles[projectKey] || 'Project Designs';
  
  // Clear previous images
  slideshowContainer.innerHTML = '';
  
  // Add images
  currentImages.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Design ${index + 1}`;
    img.className = 'slide' + (index === 0 ? ' active' : '');
    slideshowContainer.appendChild(img);
  });
  
  // Update counter
  currentIndex = 0;
  totalSlidesSpan.textContent = currentImages.length;
  currentSlideSpan.textContent = '1';
  
  // Show popup
  popup.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close popup
function closePopup() {
  popup.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Function to show specific slide
function showSlide(index) {
  const slides = slideshowContainer.querySelectorAll('.slide');
  
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;
  
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentIndex].classList.add('active');
  
  currentSlideSpan.textContent = currentIndex + 1;
}

// Previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  showSlide(currentIndex);
}

// Next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= currentImages.length) currentIndex = 0;
  showSlide(currentIndex);
}

// Event listeners for "View Design" buttons
document.querySelectorAll('.view-design-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const projectKey = btn.getAttribute('data-project');
    openPopup(projectKey);
  });
});

// Close button
closeBtn.addEventListener('click', closePopup);

// Navigation buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Close on background click
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!popup.classList.contains('active')) return;
  
  if (e.key === 'Escape') closePopup();
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});