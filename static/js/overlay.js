// ============================================
// PROJECT IMAGES DATA
// ============================================
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
  ],
  'portfolio': [
    '/static/images/portfolio/1.png',
    '/static/images/portfolio/2.png',
    '/static/images/portfolio/3.png',
    '/static/images/portfolio/4.png',
    '/static/images/portfolio/5.png',
    '/static/images/portfolio/6.png',
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
  ],
  'coffee_reservation': [
    '/static/images/comingsoon.jpg',
  ],
  'product-api': [
    '/static/images/product_api_java/1.png',
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
  ],
};

// Project titles
const projectTitles = {
  'music-playlist': 'Music Playlist Designs',
  'shopping-cart': 'Shopping Cart Web App Designs',
  'renting-home': 'Renting Home System Designs',
  'portfolio': 'Portfolio Website Designs',
  'mobile-ui': 'Mobile App / Website UI Designs',
  'minimart-api': 'Minimart API Designs',
  'coffee_reservation': 'Coffee Reservation Designs',
  'product-api': 'Product API Designs',
  'tire_pos': 'Tire POS System Designs'
};

// ============================================
// PROJECT SLIDESHOW POPUP
// ============================================
let currentIndex = 0;
let currentImages = [];
let popup, closeBtn, prevBtn, nextBtn, slideshowContainer, popupTitle, currentSlideSpan, totalSlidesSpan;

// Function to open popup
function openPopup(projectKey) {
  currentImages = projectImages[projectKey] || [];

  if (currentImages.length === 0) {
    alert('No design images available for this project yet.');
    return;
  }

  // Set title
  if (popupTitle) {
    popupTitle.textContent = projectTitles[projectKey] || 'Project Designs';
  }

  // Clear previous images
  if (slideshowContainer) {
    slideshowContainer.innerHTML = '';

    // Add images with loading animation
    currentImages.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Design ${index + 1}`;
      img.className = 'slide' + (index === 0 ? ' active' : '');
      img.loading = 'lazy'; // Lazy load images
      slideshowContainer.appendChild(img);
    });
  }

  // Update counter
  currentIndex = 0;
  if (totalSlidesSpan) totalSlidesSpan.textContent = currentImages.length;
  if (currentSlideSpan) currentSlideSpan.textContent = '1';

  // Show popup with animation
  if (popup) {
    popup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

// Function to close popup
function closePopup() {
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Function to show specific slide
function showSlide(index) {
  if (!slideshowContainer) return;

  const slides = slideshowContainer.querySelectorAll('.slide');

  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove('active'));
  if (slides[currentIndex]) {
    slides[currentIndex].classList.add('active');
  }

  if (currentSlideSpan) {
    currentSlideSpan.textContent = currentIndex + 1;
  }
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

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// ============================================
// CONTACT FORM - SESSION STORAGE
// ============================================
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };
    sessionStorage.setItem("pendingFormData", JSON.stringify(formData));
  });
}

// ============================================
// DOM CONTENT LOADED - ALL INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {

  // ============================================
  // INITIALIZE POPUP ELEMENTS
  // ============================================
  popup = document.getElementById('designPopup');
  closeBtn = document.getElementById('closePopup');
  prevBtn = document.getElementById('prevSlide');
  nextBtn = document.getElementById('nextSlide');
  slideshowContainer = document.querySelector('.slideshow-container');
  popupTitle = document.getElementById('popupTitle');
  currentSlideSpan = document.getElementById('currentSlide');
  totalSlidesSpan = document.getElementById('totalSlides');

  // Event listeners for "View Design" buttons
  document.querySelectorAll('.view-design-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectKey = btn.getAttribute('data-project');
      openPopup(projectKey);
    });
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }

  // Navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  // Close on background click
  if (popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });
  }

  // ============================================
  // TYPEWRITER ANIMATION FOR HERO TITLE
  // ============================================
  const typedElement = document.getElementById("typed-text");

  if (typedElement && typeof Typed !== 'undefined') {
    var typed = new Typed("#typed-text", {
      strings: ["Welcome to My Portfolio"],
      typeSpeed: 100,      // speed of typing in milliseconds
      backSpeed: 0,        // no backspace
      loop: false,         // type only once
      showCursor: true,    // show blinking cursor
      cursorChar: '|',     // cursor character
      onComplete: function(self) {
        // Remove cursor after typing completes
        setTimeout(() => {
          if (self.cursor) {
            self.cursor.style.display = 'none';
          }
        }, 1000); // Wait 1 second before hiding cursor
      }
    });
  }

  // ============================================
  // NAVBAR COLLAPSE (BOOTSTRAP)
  // ============================================
  const collapseEl = document.getElementById('appBarMenu');

  if (collapseEl && typeof bootstrap !== 'undefined') {
    const bsCollapse = new bootstrap.Collapse(collapseEl, {toggle: false});

    const toggler = document.querySelector('.navbar-toggler');
    if (toggler) {
      toggler.addEventListener('click', () => {
        collapseEl.classList.toggle('show');
      });
    }
  }

  // ============================================
  // STAGGER ANIMATION FOR PROJECT CARDS
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.animationPlayState = 'paused';
    observer.observe(card);
  });

  // ============================================
  // FORM INPUT ANIMATIONS
  // ============================================
  const formInputs = document.querySelectorAll('.glass-form input, .glass-form textarea');

  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      if (this.parentElement) {
        this.parentElement.classList.add('focused');
      }
    });

    input.addEventListener('blur', function() {
      if (this.value === '' && this.parentElement) {
        this.parentElement.classList.remove('focused');
      }
    });
  });
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if href is just "#"
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// ============================================
// KEYBOARD NAVIGATION FOR POPUP
// ============================================
document.addEventListener('keydown', (e) => {
  if (!popup || !popup.classList.contains('active')) return;
  
  if (e.key === 'Escape') closePopup();
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});