
ciao a tutti
se avete domande o non capite qualcosa segnalatelo con la manina, è importante seguire tutti i passaggi, webcam

questo è un argomento, complicato vi fornirò 
delle basi ma ci vorrà un po' per utilizzare questi strumenti con disinvoltura

spiego **programmazione sincrona** , inizializzazione che operazione algebrica, stessa cosa con funzioni

faccio vedere **domanda** poi esperimento `the-answer` e poi **risposta**

parlo della **moka**

testo introduttivo alla **programmazione asincrona**

solitamente le funzioni asincrone sono web api fornite dal browser a funzionalità del linguaggio

la **le callback** è una funzione che possiamo passiamo come parametro ad una funzione
e questa verrà eseguita callback

un esempio molto comune di utilizzo di callback è un eventlistener `callback`

```js
function funzioneAsincrona(callback) {
    setTimeout(callback, 1000);
}

funzioneAsincrona(() => console.log("ciao"));
```

**callback hell** rende il codice poco leggibile, succede quando usiamo funzioni asincrone 
come callback per eseguirle una dopo l'altra

Per far fronte a questo problema è stato introdotto un nuovo modo per gestire l'asincronicità: **le promises**
la promise è un oggetto che rappresenta lo *stato di esecuzione* della nostra chiamata asincrona, e conterrà il risultato della operazione

la funzione *then* ci permette di accedere al risultato e di definire le operazioni da eseguire quando il risultato sarà disponibile
```js
console.log('fetch fuori dal then: ',fetchPromise);
console.log('fetch dentro al then: ', fetchPromise);

``` 

`fetch-example`

/// simulate bandwidth throttling + disable cache
// controlla network

fetch serve a richiedere dati in modo asincrono ad un server remoto

```js
fetchPromise
    .then((response) => response.json())
    .then((data) => {
        const resultElement = document.querySelector(".result");
        resultElement.textContent = `${data.city} ${data.temperature}`;
    });
```



