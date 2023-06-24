import { startWidget} from "./scripts/modules/widgetService.js";
import { cityServiceSearch } from "./modules/cityServiceSearch.js";

const initWidget = async(app) => {
    const city = 'Сан-Франциско'
const widget =  await startWidget(city);
    app.append(widget)
    //console.log(app)

cityServiceSearch(widget);

}

initWidget( document.querySelector('#app'))