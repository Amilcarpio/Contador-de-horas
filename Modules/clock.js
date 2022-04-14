import { data } from '/modules/home.js'
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