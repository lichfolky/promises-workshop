// una fetch restituisce una promise
const fetchPromise = fetch(
    "https://raw.githubusercontent.com/lichfolky/promises/main/data/meteo.json",
);

fetchPromise
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong: ', response);
        }
    })
    .then((data) => {
        console.log(data);
        const resultElement = document.querySelector(".result");
        resultElement.textContent = `${data.city} ${data.temperature}`;
    })
    .catch((err) => { console.log(err); });