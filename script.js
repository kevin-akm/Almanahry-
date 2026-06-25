function toggleMenu(e) { var t = document.getElementById("mobileMenu").classList.toggle("open"); e.setAttribute("aria-expanded", t) } function closeMenu() { document.getElementById("mobileMenu").classList.remove("open") } if ("loading" in HTMLImageElement.prototype) document.querySelectorAll("img[data-src]").forEach(function (e) { e.src = e.dataset.src }); else { var e = document.createElement("script"); e.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js", document.body.appendChild(e) }
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

document.querySelectorAll(
  ".product-card, .service-card, .offer-card, .why-card, .review-card, .contact-item"
).forEach(el => {
  el.classList.add("animate");
  observer.observe(el);
});

document.querySelectorAll(
  ".product-card, .service-card, .offer-card, .why-card, .review-card"
).forEach((el, index) => {
  el.classList.add("animate");
  
  observer.observe(el);
});