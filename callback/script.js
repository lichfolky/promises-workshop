const elementButton = document.querySelector("button");

function miaCallback() {
    console.log("click!");
    elementButton.classList.toggle("green");
};

elementButton.addEventListener("click", miaCallback);
console.log("Aspetto che venga cliccato il pulsante");