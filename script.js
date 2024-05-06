const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn svg");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
};

// FORMULÁRIO DE CONTATO

  //
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.cabecalho__menu__link');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector('.cabecalho').offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});

