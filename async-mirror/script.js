const videoElement = document.querySelector("video");
const constraints = { video: true };

// Promise con await

const stream = await navigator.mediaDevices.getUserMedia(constraints);
videoElement.srcObject = stream;


// Promise con "then"
/*
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        videoElement.srcObject = stream;
    }).catch((err) => {
        console.error(err);
    });
*/

// Documentazione: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices