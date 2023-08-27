document.addEventListener("DOMContentLoaded", function() {
  const ctaButton = document.querySelector(".cta-button");

  ctaButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
