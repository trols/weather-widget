const API_URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = '459a7e31a5f1ac9a6f893d2404ac1a5d';

export const fetchWeather = async (city) => {

    try{
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);

        if(!response.ok){
           throw new Error ("Ошибка запроса")

        }

        //console.log('response:', response);
        const data = await response.json();
        //console.log(data)
        // возвращаем объект 
       return { success: true, data }
    }catch(error){
    // если произошла ошибка вернуть
   return { success: false, error}
   }
    }

    // третий блок с иконками
    export const fetchForecast = async (city) => {

        try{
            const response = await fetch(`${API_URL}forecast?q=${city}&appid=${API_KEY}&lang=ru`);
    
            if(!response.ok){
               throw new Error ("Ошибка запроса")
    
            }
            const data = await response.json();
           return { success: true, data }
        }catch(error){
       return { success: false, error}
       }
        }