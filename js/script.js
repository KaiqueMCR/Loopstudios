$('.mobileMenu').click(() => {
	$('.navbar').animate({ width: 'toggle' }, 'fast')
	$('.close').toggleClass('hidden')
	$('.open').toggleClass('hidden')
})

$('.navbar').click(() => {
	$('.navbar').animate({ width: 'toggle' }, 'fast')
	$('.close').toggleClass('hidden')
	$('.open').toggleClass('hidden')
})

const images = $('.card_img').toArray()

function setImages() {
	if (window.innerWidth >= 992) {
		images.forEach(image => {
			image.src = image.dataset.srcsetDesktop
		})
	} else {
		images.forEach(image => {
			image.src = image.dataset.srcsetMobile
		})
	}
}

$(window).on('resize', setImages)
$(document).ready(setImages)
