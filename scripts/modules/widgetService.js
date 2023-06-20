import {
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast
} from './render.js'

export const startWidget = () => {
    //console.log('виджет запущен')
    const widget = document.createElement('div');
    widget.className = 'widget'

// верхний блок 
    renderWidgetToday(widget)
    renderWidgetOther(widget)
    renderWidgetForecast(widget)

return widget;
};

//export {startWidget};