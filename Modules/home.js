//convertendo a data do input em milisegundos
const input = document.querySelector('#calendar')
const calendar = input.value;
 
const dataSplit = calendar.split('/');
const day = dataSplit[0];
const month = dataSplit[1];
const year = dataSplit[2]

const data = new Date(year, month - 1, day)

export { data };