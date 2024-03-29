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
