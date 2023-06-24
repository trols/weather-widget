import { startWidget } from "./modules/widgetService.js";

export const cityServiceSearch = (widget) => {
    const button = document.querySelector('.widget__change-city');

    button.addEventListener('click', () => {
        const form = document.createElement('form');
        form.classList.add('widget__form');

        const inputCity = document.createElement('input');
        inputCity.classList.add('widget__input');
        inputCity.name = 'city';
        inputCity.type = 'search';
        inputCity.placeholder = 'Введите город';

        // вставим в форму
        form.append(inputCity);
        // форму вставим в app
        app.append(form);

        // возможность при вызове сразу печатать
        inputCity.focus();

        // отправка формы
        form.addEventListener('submit', async (e) => {
            // не перезагружать сразу страницу
            e.preventDefault();

            // очистить widget 3 строка 
             widget.textContent = '';
             await startWidget(inputCity.value);
             cityServiceSearch(widget);

        })
   });
};