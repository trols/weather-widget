// функция для добавления нуля перед часами и минутами
const addZero = (n) => n < 10 ? `0${n}` : n;


export const getcurrentDateTime = () => {
const months = [
'янв',
'фев',
'мар',
'апр',
'май',
'июн',
'июл',
'авг',
'сен',
'окт',
'ноя',
'дек'
];

const weekdays = [
'воскресенье',
'понедельник',
'вторник',
'среда',
'четверг',
'пятница',
'суббота',
];

const date = new Date()
//console.log('date: ', date); выводится сегодняшняя дата
//const day = date.getDay() дает в консоли только цифру
const dayOfWeek = weekdays[date.getDay()]
// для проверки в консоли
//date.setHours(3);
//date.setMinutes(5)
//console.log('day :', dayOfWeek);

const dayOfMonth = date.getDate();
//console.log('date: ', dayOfMonth)

//const month = date.getMonth();дает только цифру
const month = months[date.getMonth()]
//console.log('month: ', month)

const year = date.getFullYear();
//console.log('year: ', year)

// получим время в переменные
 const hours = addZero(date.getHours());
//console.log('часы:  ' ,hours)
//if(hours < 10){
//hours = `0${hours}`
//}
const minutes = addZero(date.getMinutes());
//console.log('минуты: ', minutes)
//if(minutes < 10){
//minutes = `0${minutes}`
//}

// возвращается в currentDateTime , выводим в консоль в файле render
return {dayOfMonth, month, year,  dayOfWeek, hours, minutes};

};
/*
export const getWindDirection = (deg) => {
    const directions = [
        // направление ветра - откуда дует ветер
        '&#8593',
        '&#8598',
        '&#8592',
        '&#8601',
        '&#8595',
        '&#8600',
        '&#8594',
        '&#8599',
    ];

//console.log(deg / 45)
    const i = Math.round(deg / 45) % 8
     return  directions[i]
    }
*/
    export const calculateDewPoint = (temp, humidity) => {
// считаем точку росы  dewPoint
        const a = 17.27;
        const b = 237.7;

        const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
        const dewPoint = (b * ft) / (a - ft);
        return dewPoint.toFixed(1);
    }

    // вычисление для давления
   export const convertPressure = (pressure) => {
    const mmHg = pressure * 0.750063755419211;
    return mmHg.toFixed(2);

   }
export const getWeatherForecastData = (data) => {
    const  forecast = data.list.filter(
        item => 
        new Date(item.dt_txt).getHours() === 12 && 
        new Date(item.dt_txt).getDate() > new Date().getDate() &&
        new Date(item.dt_txt).getDate() < new Date().getDate() + 5,
    );
    //console.log(forecast)

const forecastData = forecast.map((item) => {
 const date = new Date(item.dt_txt);
 const weekdaysShort = [
    'вс',
'пн',
'вт',
'ср',
'чт',
'пт',
'сб',
 ];

 const dayOfWeek = weekdaysShort[date.getDay()];
 const weatherIcon = item.weather[0].icon;

 let minTemp = Infinity;
 let maxTemp = -Infinity;

 for(let i = 0; i < data.list.length; i++){
    const temp = data.list[i].main.temp;
    const tempDate = new Date(data.list[i].dt_txt);

    if(tempDate.getDate() === date.getDate()){
       if(temp < minTemp){
        minTemp = temp;
    }
    if(temp > maxTemp) {
        maxTemp = temp;
  }
 }


 //  второй вариант
 //if(tempDate.getDate() === date.getDate() && temp < minTemp){
 //   minTemp = temp;
// }else if(tempDate.getDate() === date.getDate() && temp < maxTemp){
 //    maxTemp = temp;
//}
}


    
    return {
        dayOfWeek,
        weatherIcon,
        minTemp,
        maxTemp
    };
});
return forecastData;
}