// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Product filter pills (products page only)
  var pills = document.querySelectorAll(".pill");
  var cards = document.querySelectorAll(".product-grid .card");
  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) { p.setAttribute("aria-pressed", "false"); });
      pill.setAttribute("aria-pressed", "true");
      var category = pill.dataset.category;
      cards.forEach(function (card) {
        var show = category === "all" || card.dataset.category === category;
        card.style.display = show ? "" : "none";
      });
    });
  });

  // Contact form: static demo submit (no backend/payment per assignment scope)
  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".status");
      status.textContent = "Thanks — your message has been noted. We'll reply within one business day.";
      form.reset();
    });
  }
});
