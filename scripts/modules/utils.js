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
//console.log('day :', dayOfWeek);

const dayOfMonth = date.getDate();
//console.log('date: ', dayOfMonth)

//const month = date.getMonth();дает только цифру
const month = months[date.getMonth()]
//console.log('month: ', month)

const year = date.getFullYear();
//console.log('year: ', year)

// получим время в переменные
 let hours = date.getHours();
 //console.log('часы:  ' ,hours)
if(hours < 10){
hours = `0${hours}`
}
let minutes = date.getMinutes();
//console.log('минуты: ', minutes)
if(minutes < 10){
minutes = `0${minutes}`
}
// возвращается в currentDateTime , выводим в консоль в файле render
return {dayOfMonth, month, year,  dayOfWeek, hours, minutes};

};
