const searchPanelContainer = document.querySelector('.weather-now');

const toggleSearchPanel = (e) => {
    if (e.target.matches('.weather-now__btn')) {
        searchPanelContainer.classList.add('burger-menu_active');
    } else if (e.target.matches('.burger-menu__close-cross')) {
        searchPanelContainer.classList.remove('burger-menu_active');
    }
}

searchPanelContainer.addEventListener('click', toggleSearchPanel)