const videoElement = document.querySelector("video");
const constraints = { video: true };

// Promise con "then"
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        videoElement.srcObject = stream;
    }).catch((err) => {
        console.error(err);
    });

// Promise con await (senza gestione errore)
/*
const stream = await navigator.mediaDevices.getUserMedia(constraints);
videoElement.srcObject = stream;
*/

// Documentazione: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices