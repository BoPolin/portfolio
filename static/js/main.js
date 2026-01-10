const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  sessionStorage.setItem("pendingFormData", JSON.stringify(formData));
});


document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed-text", {
    strings: ["Welcome to my Portfolio"],
    typeSpeed: 100,   // speed of typing in milliseconds
    backSpeed: 0,     // no backspace
    loop: false       // type only once
  });
});



  // Optional: Ensure collapse uses max-height animation
  document.addEventListener('DOMContentLoaded', () => {
  const collapseEl = document.getElementById('appBarMenu');
  const bsCollapse = new bootstrap.Collapse(collapseEl, {toggle: false});

  const toggler = document.querySelector('.navbar-toggler');
  toggler.addEventListener('click', () => {
  collapseEl.classList.toggle('show');
});
});
