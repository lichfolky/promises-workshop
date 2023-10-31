import { sleep } from "../utils.js";
const resultElement = document.querySelector(".result");

// la funzione sleep restituisce una promise che
// restituisce un messaggio dopo il numero di secondi 
// paassato come parametro
const fetchPromise = sleep(2);
console.log('fetch fuori dal then: ', fetchPromise);

const test = fetchPromise.then((msg) => {
    console.log('fetch dentro al then: ', fetchPromise);

    resultElement.textContent = msg;
})

