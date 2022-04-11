//convertendo a data do input em milisegundos
const input = document.getElementById('calendar')
const calendar = input.value;
 
const dataSplit = calendar.split('/');
const day = dataSplit[0];
const month = dataSplit[1];
const year = dataSplit[2]

const data = new Date(year, month - 1, day)

//calculando a diferença entre as datas em ms 
const data2 = data;
const data1 = new Date();

const diff = Math.abs(data1.getTime() - data2.getTime());

console.log(diff)

let button = document.querySelector('#str-btn');
button.addEventListener('click')

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

convertDays();
convertSeconds();
convertMinutes();
convertHours();