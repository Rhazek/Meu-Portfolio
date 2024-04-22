const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn svg');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open');
}

