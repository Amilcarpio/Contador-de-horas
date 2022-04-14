import { calendarValue } from '/modules/home.js'

const dataSplit = calendarValue.split('/');
const day = dataSplit[0];
const month = dataSplit[1];
const year = dataSplit[2]

const data = new Date(year, month - 1, day)

console.log(calendarValue)

//calculando a diferença entre as datas em ms 
const data1 = new Date();
const data2 = data;

const diff = Math.abs(data1.getTime() - data2.getTime());

//Convertendo o valor da diferença entre as datas
const convertDays = () => {
    const days = Math.ceil(diff/(1000*60*60*24));
    document.getElementById('days').innerHTML = days;
}

const convertSeconds = () => {
    const seconds = Math.ceil(diff/1000);
    document.getElementById('seconds').innerHTML = seconds;
}

const convertMinutes = () => {
    const minutes = Math.ceil(diff/(1000 * 60));
    document.getElementById('minutes').innerHTML = minutes;
}    

const convertHours = () => {
    const hours = Math.ceil(diff/(1000*60*60));
    document.getElementById('hours').innerHTML = hours;
}

//Criando disparo do relógio pelo botão
let button = document.getElementById('start-btn');
button.addEventListener('click', convertDays)

convertDays();
convertSeconds();
convertMinutes();
convertHours();