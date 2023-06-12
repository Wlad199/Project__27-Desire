
//////////////////////////////////////////////////////////////////
// aside menu

let buttonAsideOpen = document.querySelector('.open-menu');
let asideMenu = document.querySelector('.aside');
function activeAside() {
	asideMenu.classList.toggle('_active')
	buttonAsideOpen.classList.toggle('_active')
}
buttonAsideOpen.addEventListener('click', activeAside);

//////////////////////////////////////////////////////////////////////
// Pagination

let toSecondPage = document.querySelector('.pagination-second');
let toSecondSecondPage = document.querySelector('.pagination-secondd');
let toFirstPage = document.querySelector('.pagination-first');
let parentBlock = document.querySelector('.block__container');

function addClassSecond() {
	parentBlock.classList.add('_second-page')
}

function removeClassSecond() {
	parentBlock.classList.remove('_second-page')
}

toSecondPage.addEventListener('click', addClassSecond)
toSecondSecondPage.addEventListener('click', addClassSecond)
toFirstPage.addEventListener('click', removeClassSecond)