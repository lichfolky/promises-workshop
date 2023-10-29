const elementButton = document.querySelector("button");

function miaCallback() {
    console.log("click!");
    elementButton.classList.toggle("green");
};

elementButton.addEventListener("click", miaCallback);
console.log("Questo console log lo sto facendo mentre aspetto che venga cliccato il pulsante");

/*
function funzioneAsincrona(callback) {
    callback();
}
*/