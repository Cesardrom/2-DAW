document.querySelector("#button").addEventListener("click", () => findRing());

function findRing(){
    document.querySelectorAll(".personas").forEach(persona => {
        if (persona.textContent === "Frodo"){
            console.log(persona)
        }
    })
}