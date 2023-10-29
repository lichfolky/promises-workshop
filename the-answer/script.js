import { algoritmoSuperComplesso } from "../utils.js";
const resultElement = document.querySelector(".result");

// Questa operazione richiede molto tempo per terminare
const sum = algoritmoSuperComplesso();

// quando ha terminato aggiorno il testo
resultElement.textContent = `Il risultato è ${sum}`;
