const videoElement = document.querySelector("video");
const constraints = { video: true };

// Promise con await

const stream = await navigator.mediaDevices.getUserMedia(constraints);
videoElement.srcObject = stream;

// Sarebbe con "then"
/*
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        videoElement.srcObject = stream;
    });
*/

// Documentazione: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices