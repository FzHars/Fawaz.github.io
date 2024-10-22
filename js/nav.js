// mysc navbar
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const offcanvasMenu = document.getElementById("offcanvasMenu");
    const overlay = document.getElementById("overlay");
    const menuLinks = document.querySelectorAll("#offcanvasMenu .nav-link"); // Semua link dalam offcanvas
  
    function openMenu() {
      offcanvasMenu.classList.add("show");
      overlay.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  
    function closeMenuFunc() {
      offcanvasMenu.classList.remove("show");
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    }
  
    // Buka offcanvas saat menu toggle diklik
    menuToggle.addEventListener("click", openMenu);
  
    // Tutup offcanvas saat tombol tutup diklik
    closeMenu.addEventListener("click", closeMenuFunc);
  
    // Tutup offcanvas saat overlay diklik
    overlay.addEventListener("click", closeMenuFunc);
  
    // Tutup offcanvas saat salah satu menu diklik
    menuLinks.forEach((link) => {
      link.addEventListener("click", closeMenuFunc);
    });
  });