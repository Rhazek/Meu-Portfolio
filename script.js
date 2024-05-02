const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn svg");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropdownMenu.classList.toggle("open");
};

// FORMULÁRIO DE CONTATO
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {

    var confirmation = document.createElement("div");
    confirmation.textContent = "Mensagem enviada com sucesso!";
    confirmation.style.backgroundColor = "#4CAF50";
    confirmation.style.color = "white";
    confirmation.style.padding = "10px";
    confirmation.style.marginTop = "10px";
    confirmation.style.borderRadius = "5px";
    confirmation.style.textAlign = "center";

    var submitButton = document.getElementById("submit");
    submitButton.parentNode.insertBefore(
      confirmation,
      submitButton.nextSibling
    );

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    event.preventDefault();
  });

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