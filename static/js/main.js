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