const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn svg');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open');
}

// Obtém a posição final do último card
var lastCardPosition = document.querySelector("#cardRow").lastElementChild.getBoundingClientRect().bottom;
console.log(lastCardPosition)

// Encontra todas as linhas
var rows = document.querySelectorAll(".row");
console.log(rows)

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
  var nextCol = nextRow.querySelector('.col-md-6');
  console.log(nextCol)
  if (nextCol) {
    nextCol.style.marginTop = "-" + lastCardPosition + "px";
  }
}