// script.js

// Toggle navigation drawer
const toggleBtn = document.getElementById("nav-toggle");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Typed text animation (simple version)
const typedText = document.querySelector(".typed-text");
const roles = ["Web Developer", "ML Enthusiast", "Streamlit Expert"];
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      typedText.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Smooth scroll for all links
const navLinks = document.querySelectorAll("nav a, .scroll-top");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
