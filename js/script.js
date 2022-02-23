'use strict';
// ハンバーガー
const ham = document.getElementById('ham');
const hamNav = document.getElementById('hamNav');

ham.addEventListener('click', ()=> {
    ham.classList.toggle('clickAction');
    hamNav.classList.toggle('clickOpen');
});

// スライダー
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider1.jpg'},
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider2.jpg'},
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider3.jpg'},
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider4.jpg'}
			];
		} else {
			var responsiveImage = [
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider1.jpg'},
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider2.jpg'},
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider3.jpg'},
				{ src: 'https://sy3312.github.io/portfolio-totonou/img/slider/slider4.jpg'}
			];
		}

//Vegas全体の設定

$('#slider').vegas({
	overlay: true,
	transition: 'blur',
	transitionDuration: 2000,
	delay: 10000,
	animationDuration: 20000,
	animation: 'kenburns',
	slides: responsiveImage,
});

// header表示
document.addEventListener('scroll', ()=> {
	const scrollYEvent = window.pageYOffset;

	if (0 < scrollYEvent) {
		document.getElementById('js-headerContainer-scroll').classList.add('header-show');
		document.getElementById('js-headerLeft').classList.add('headerToggle');
		document.getElementById('js-headerRight').classList.add('headerToggle');
	}else {
		document.getElementById('js-headerContainer-scroll').classList.remove('header-show');
		document.getElementById('js-headerLeft').classList.remove('headerToggle');
		document.getElementById('js-headerRight').classList.remove('headerToggle');
	}
});

// New Item
$('.slider').slick({
	autoplay: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	dots: true,
	responsive: [
		{
		breakpoint: 769,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
]
});
