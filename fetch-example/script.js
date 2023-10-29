// creo una promise di una fetch
const resultElement = document.querySelector(".result");

const fetchPromise = fetch(
    "https://raw.githubusercontent.com/lichfolky/promises/main/data/meteo.json",
);

fetchPromise
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        resultElement.textContent = `${data.city} ${data.temperature}`;
    });


/// simulate bandwidth throttling + disable cache