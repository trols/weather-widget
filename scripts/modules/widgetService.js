import { fetchForecast, fetchWeather } from './APIservice.js';
import { showError } from './render.js';
import {
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast
} from './render.js'

export const startWidget = async () => {
const city = 'Калининград';

    //console.log('виджет запущен')
    const widget = document.createElement('div');
    widget.className = 'widget'

    const dataWeather = await fetchWeather(city);
    //console.log('dataWeather', dataWeather)

    // проверяем как прошел запрос
    if(dataWeather.success){
        // верхний блок 
        renderWidgetToday(widget, dataWeather.data)
        renderWidgetOther(widget, dataWeather.data)
    }else{
        // в render.js
        showError(dataWeather.error);
    }

    const dataForecast = await fetchForecast(city);

    if(dataForecast.success){
        renderWidgetForecast(widget, dataForecast.data)
}else{
showError(dataForecast.error);
    }
    
return widget;
};

