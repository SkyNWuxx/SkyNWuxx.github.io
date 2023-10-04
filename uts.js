var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".text-box, .heading, .contact-right", {
  origin: "top",
});

ScrollReveal().reveal(".about-text, .products-container", {
  origin: "bottom",
});

ScrollReveal().reveal(".about-img, .contact-left", {
  origin: "left",
});
ScrollReveal().reveal(".about-img2, .about-text2", {
  origin: "right",
});

// ScrollReveal().reveal(
//   ".products-container, .customers-container, .footer, .btn-home",
//   {
//     origin: "bottom",
//   }
// );

// ScrollReveal().reveal(".about-text", {
//   origin: "right",
// });
