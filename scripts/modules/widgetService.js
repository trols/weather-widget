import { fetchWeather } from './APIservice.js';
import { showError } from './render.js';
import {
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast
} from './render.js'

export const startWidget = async () => {
    //console.log('виджет запущен')
    const widget = document.createElement('div');
    widget.className = 'widget'

    const dataWeather = await fetchWeather('Калининград');
    //console.log('dataWeather', dataWeather)

    // проверяем как прошел запрос
    if(dataWeather.success){
        // верхний блок 
        renderWidgetToday(widget, dataWeather.data)
        renderWidgetOther(widget, dataWeather.data)
    }else{
        // в render.js
        showError();
    }

    renderWidgetForecast(widget)

return widget;
};

//export {startWidget};