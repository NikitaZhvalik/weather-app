const searchPanelContainer = document.querySelector('.weather-now');

const toggleSearchPanel = (e) => {
    if (e.target.matches('.weather-now__btn')) {
        searchPanelContainer.classList.add('burger-menu_active');
    } else if (e.target.matches('.burger-menu__close-cross')) {
        searchPanelContainer.classList.remove('burger-menu_active');
    }
}

searchPanelContainer.addEventListener('click', toggleSearchPanel)

const weatherInterval = document.querySelector('.weather-interval');
const weatherIntervalBtnActive = document.querySelector('.weather-interval__btn_active');
const weatherIntervalBtnNoActive = document.querySelector('.weather-interval__btn_no-active');
const weatherIntervalWeek = document.querySelector('.weather-card-box_active');
const weatherIntervalHours = document.querySelector('.weather-card-box_no-active');

const toggleInterval = (e) => {
    if (e.target.matches('.weather-interval__btn_no-active')) {
        weatherIntervalBtnActive.classList.toggle('weather-interval__btn_no-active');
        weatherIntervalBtnActive.classList.toggle('weather-interval__btn_active');
        weatherIntervalBtnNoActive.classList.toggle('weather-interval__btn_active');
        weatherIntervalBtnNoActive.classList.toggle('weather-interval__btn_no-active');
        weatherIntervalHours.classList.toggle('none');
        weatherIntervalWeek.classList.toggle('none');
    }
}

weatherInterval.addEventListener('click', toggleInterval)