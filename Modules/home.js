//convertendo a data do input em milisegundo
const calendarEl = document.getElementById('calendar');
const calendarValue = calendarEl ? calendarEl.value : 0;

const btn = document.querySelector('#start-btn')

btn.addEventListener('click', function(){
    calendarValue

    console.log(calendarValue)
})

export { calendarEl };
export { calendarValue };
