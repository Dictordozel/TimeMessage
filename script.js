window.addEventListener('DOMContentLoaded', () => {

'use strict';


const patyHard = () => {
    let dateNow = new Date().getTime(),
        newYear = new Date(2020, 11, 31).getTime(),
        wistfulness  = (newYear - dateNow) / 1000,
        boringSecunden = new Date().getSeconds(),
        boringMinuten = new Date().getMinutes(),  //Math.floor((dateNow / 60) % 60),
        boringHours = new Date().getHours(),
        boringDays = Math.floor(((wistfulness / 60) / 60) / 24),
        boringToday = new Date().getDay('ru'), 
        stringBoringDays = boringDays.toString(),
        postFix = stringBoringDays.slice(-1),
        postFixCorrect = stringBoringDays.slice(-2),
        getHour = new Date().getHours();
        console.log(postFix);
        
        return {wistfulness, boringDays, boringToday, postFix, postFixCorrect, getHour, boringSecunden, boringMinuten, boringHours};
        
    };

    const updateDay = () => {
       
        let printDay = patyHard();
        if(printDay.postFix === '1') {
        return 'До нового года остался ' + printDay.boringDays + ' день';
        } else if(printDay.postFix === '2' || printDay.postFix === '3' || printDay.postFix === '4') {
        return'До нового года осталось ' + printDay.boringDays + ' дня'; 
        } else if (printDay.postFixCorrect === '11') {
        return 'До нового года осталось ' + printDay.boringDays + ' дней';   
        } else if (printDay.postFixCorrect === '12' || printDay.postFixCorrect === '13' || printDay.postFixCorrect === '14') {
        return 'До нового года осталось ' + printDay.boringDays + ' дней';
        } else {
        return 'До нового года осталось ' + printDay.boringDays + ' дней'; 
        }
        
        
    };



const message = () => {

        let timeMessage = patyHard();
        if(timeMessage.getHour > 6 && timeMessage.getHour < 10) { 
        return 'Доброе утро!';
        } else if (timeMessage.getHour > 10 && timeMessage.getHour < 18){
        return'Добрый день!';
        } else if (timeMessage.getHour > 18 && timeMessage.getHour < 24){
        return'Добрый вечер!';
        } else {
        return 'Доброй ночи!';
        }

    };


    const addText = () => {
        let getTextElement1 = message(),
        getTextElement2 = patyHard(),
        getNewYear = updateDay(),
        getToday = patyHard();
        let element1 = document.createElement('div');
        document.body.appendChild(element1);
        element1.innerHTML = getTextElement1;

        let element2 = document.createElement('div');
        document.body.appendChild(element2);
        element2.innerHTML = `Текущее время: 
        ${getTextElement2.boringHours}:${getTextElement2.boringMinuten}
        :${getTextElement2.boringSecunden} PM`;
        let element4 = document.createElement('div');
        document.body.appendChild(element4);

        if(getToday.boringToday === 1) {
        element4.innerHTML = 'Сегодня понедельник!';
        } else if(getToday.boringToday === 2) {
        element4.innerHTML = 'Сегодня вторник!';  
        } else if(getToday.boringToday === 3) {
        element4.innerHTML = 'Сегодня среда!';  
        } else if(getToday.boringToday === 4) {
        element4.innerHTML = 'Сегодня четверг!';  
        } else if(getToday.boringToday === 5) {
        element4.innerHTML = 'Сегодня пятница';  
        } else if(getToday.boringToday === 6) {
        element4.innerHTML = 'Сегодня суббота';  
        } else { 
        element4.innerHTML = 'Сегодня воскресенье';
        }

        let element3 = document.createElement('div');
        document.body.appendChild(element3);
        element3.innerHTML = getNewYear;



    };    

updateDay();
message();
addText();


});