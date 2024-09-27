const button = document.querySelector('button');

<<<<<<< HEAD
=======
function mostrarPokemon(){
    document.querySelector('.cargandoDatos').style.visibility = "visible";

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", (e) =>{
        if (e.target.readyState === 4){
            const datos = JSON.parse(e.target.responseText);
            console.log(datos)
        }
    })
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/")
    request.send();
};

>>>>>>> origin/main
button.addEventListener('click', () => {
    document.querySelectorAll("#filtro").forEach( (e) =>{
        e.style.visibility = "visible";
    });

    document.querySelectorAll('#btn_lista_deseo').forEach((e) => {
        e.style.visibility = "visible";
    });

    let listaPokemon  = document.querySelector('listaPokemon');
    listaPokemon.style.visibility = "visible";
<<<<<<< HEAD
    startPokemon();
});

const request = new XMLHttpRequest();

request.addEventListener("readystatechange", (e) =>{
    if (e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        console.log(datos)
    }
})
request.open("GET", "https://pokeapi.co/api/v2/pokemon/")
request.send();

const startPokemon = async () => {
    for (var i = 1; i <= 151; i++) {
        try{
            await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
            .then(function (result){
                return result.json();
            })
            .then(function (data){
                console.log(data);
            })
        } catch (error) {
            alert('There is an error: ${error}')
        }
    }
}
=======
    mostrarPokemon();
});

>>>>>>> origin/main
