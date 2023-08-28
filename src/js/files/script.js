// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.main-screen__box').slick({
		dots: true, // точки
		arrows: false,
		autoplay: true,
	});
})

$(document).ready(function () {
	$('.comment-slider').slick({
		dots: false, // точки
		arrows: true,
		slidesToShow: 1,
	});
})


$(document).ready(function () {
	$('.gallery-contact__box').slick({
		dots: true, // точки
		arrows: false,
		slidesToShow: 6,
		autoplay: true, // автовоспроизведение (false)
		autoplaySpeed: 3000, // скорость (3000)
		variableWidth: true,
	});
})

//////////////////////////////////////////////////////////////////
//aside menu
/*

let buttonAsideOpen = document.querySelector('.open-menu');
let asideMenu = document.querySelector('.aside');
function activeAside() {
	asideMenu.classList.toggle('_active')
	buttonAsideOpen.classList.toggle('_active')
}
buttonAsideOpen.addEventListener('click', activeAside);
*/

//////////////////////////////////////////////////////////////////////
// Pagination
/*

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
*/


