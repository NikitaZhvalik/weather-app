function burgerMenu() {
	const btn = document.querySelector('.weather-now__btn');
	const menu = document.querySelector('.burger-menu');
	const btnClose = document.querySelector('.burger-menu__close-panel');

	btn.addEventListener('click', (e) => {
		e.preventDefault();
		toggleMenu();
	})

	btnClose.addEventListener('click', (e) => {
		e.preventDefault();
		toggleMenu();
	})

	function toggleMenu() {
		menu.classList.toggle('burger-menu_active');
	}
}

burgerMenu();