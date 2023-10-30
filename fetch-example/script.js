// creo una promise di una fetch
const resultElement = document.querySelector(".result");

const fetchPromise = fetch(
    "https://raw.githubusercontent.com/lichfolky/promises/main/data/meteo.json",
);

console.log(fetchPromise);

fetchPromise
    .then((response) => {
        console.log(fetchPromise);
        console.log(response);
    });









/*
fetchPromise
    .then((response) => {

        console.log(fetchPromise);

        response.json().then((data) => {
            console.log(data);

            resultElement.textContent = `${data.city} ${data.temperature}`;
        });
    });
*/

/*
fetchPromise
    .then((response) => {

        console.log(fetchPromise);

        return response.json();
    })
    .then((data) => {
        console.log(data);

        resultElement.textContent = `${data.city} ${data.temperature}`;
    });
*/

/// simulate bandwidth throttling + disable cache