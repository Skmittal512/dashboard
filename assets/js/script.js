document.addEventListener("DOMContentLoaded", function () {
  const hamBurger = document.querySelector(".toggle-btn");
  const sidebar = document.getElementById("sidebar");
  const navbar = document.getElementById('nav');
  const navbarBrand = document.querySelector('.navbar-brand');

  hamBurger.addEventListener("click", function () {
      sidebar.classList.toggle("expand");
      navbarBrand.classList.toggle("navbar-brand-expanded");
  });

  window.addEventListener('scroll', function () {
      const scrolled = window.scrollY > 50;
      if (scrolled) {
          navbar.classList.add('navbar-scrolled');
      } else {
          navbar.classList.remove('navbar-scrolled');
      }
  });
});
