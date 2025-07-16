const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
if (burger) {
  burger.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}
// Close nav on link click (mobile)
Array.from(navbar.querySelectorAll("a")).forEach((link) => {
  link.addEventListener("click", () => navbar.classList.remove("show"));
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
