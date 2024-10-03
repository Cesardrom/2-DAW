// Importamos la clase Pokemon desde el archivo Pokemon.js
import Champion from './champions.js';

var Champions = [];
// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");
// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", () => {
    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
    document.querySelector('#pokedex').style.visibility = 'visible';
    // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
    startChampions();
});

// Función asíncrona que va a realizar operaciones con promesas para realizar la llamada a la API
const startChampions = async () => {
    // Bucle for que itera desde 1 hasta 151, que son los primeros 151 Pokemon
    for(var i = 1; i <= 151; i++) {
        // Utilizamos fetch para hacer una solicitud a la API donde i representa el número de Pokemon
        await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
            .then(function(result) {
                return result.json();
            // Convertimos la respuesta de la API en un objeto JSON
            }).then(function(result) {
                const data = result;
                const Champion = new Champion (data);
                pushChampion(Champion);
                console.log(data);
                //Guardamos el resultado en data y creamos una nueva instancia de Pokemon con los datos obtenidos
                // almacenamos los resultados en el array
               // console.log(pokemon);
            });
    }
    // Una vez que todos los Pokemon se han añadido al array, llamamos a la función showPokedex
    await showChampion();
};

// Esta función añade el Pokemon que se le pasa como parámetro al array
function pushChampion(Champion) {
    Champions.push(Champion);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showChampions = async () => {
    // Se obtiene una referencia al elemento con el ID pokedex en el DOM donde se insertarán las tarjetas de los Pokemon.
    const ChampionsList = document.getElementById("champion_list");
    // Iteramos sobre cada elemento del array pokemons
    for(var i = 0; i < Champions.length; i++) {
        var aux =  0;
        while (aux != Champions[i].tags.length) {
            if (aux == 0)
                var tag1 = Champions[i].Champion.tags[aux];                       
            if (aux == 1)   
                var tag2 = Champions[i].Champion.tags[aux];
            else 
                tag2 = "";          
            aux++; 
        }
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        ChampionsList.innerHTML +=    `<div class="card">
                                    <img src="${Champions[i].sprite}"><br>
                                    ${Champions[i].name}<br>
                                    <div class="tags">
                                        ${tag1} ${tag2}
                                    </div>
                                    <div class="partype">
                                        ${Champions[i].partype}                        
                                    </div>
                                </div>`
    }
}

