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

//outra coisa  

// Obtém a posição final do último card
var lastCardPosition = document
  .querySelector("#cardRow")
  .lastElementChild.getBoundingClientRect().bottom;
console.log(lastCardPosition);

// Encontra todas as linhas
var rows = document.querySelectorAll(".row");
console.log(rows);

// Procura a próxima linha após #cardRow
var nextRow = null;
for (var i = 0; i < rows.length; i++) {
  if (rows[i].id === "cardRow") {
    nextRow = rows[i + 1];
    break;
  }
}

if (nextRow) {
  // Define a margem superior do primeiro col-md-6 do próximo elemento de linha
  var nextCol = nextRow.querySelector(".col-md-6");
  console.log(nextCol);
  if (nextCol) {
    nextCol.style.marginTop = "-" + lastCardPosition + "px";
  }
}
