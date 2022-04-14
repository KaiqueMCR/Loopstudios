$('.mobileMenu, .navbar').click(() => {
	$('.navbar').animate({ width: 'toggle' }, 'fast')
	$('.close').toggleClass('hidden')
	$('.open').toggleClass('hidden')
})
