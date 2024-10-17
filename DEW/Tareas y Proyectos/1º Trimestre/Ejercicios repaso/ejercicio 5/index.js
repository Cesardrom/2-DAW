let luminoso = document.getElementById("luminoso").addEventListener("click", () => electionFuerza());
let oscuro = document.getElementById("oscuro").addEventListener("click", () => electionOscuro());
let body = document.getElementById("body");

function electionFuerza(){
    body.style.backgroundColor = "white"
}

function electionOscuro(){
    body.style.backgroundColor = "black"
}