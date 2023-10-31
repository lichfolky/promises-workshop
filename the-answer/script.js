import { algoritmoSuperComplesso } from "../utils.js";

// Questa operazione richiede molto tempo per terminare
const sum = algoritmoSuperComplesso();

// aggiorno il risultato sulla pagina
const resultElement = document.querySelector(".result");
resultElement.textContent = `Il risultato è ${sum}`;

console.log("Questa operazione è indipendente dal risultato");
