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
    document.querySelector('#champion_list').style.visibility = 'visible';
    // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
    startChampions();
});

const startChampions = async () => {
    const api = "https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json"
    try{
        const response = await fetch(api);
        if (!response.ok){
            throw new Error('Fallo en la lectura de la api')
        }

        const data = await response.json()
        const all_warriors = data.data

        Object.keys(all_warriors).forEach(character => {
            let champion = new Champion(all_warriors[character]);
            pushChampion(champion);
        });

        console.log(Champions)
    } catch (error){
        console.error('Error', error);
    }

    showChampions();
}

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
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        ChampionsList.innerHTML +=    `<div class="card">
                                    <img class="front" src="${Champions[i].sprite}">
                                    <br>
                                    <p class="name">${Champions[i].name}</p>
                                    <p class="title">${Champions[i].title}</p>
                                    <br>
                                    <div class="attributes"> 
                                    <p>${Champions[i].attack} attack</p>
                                    <p>${Champions[i].magic} magic</p>
                                    <p>${Champions[i].defense} defense</p>
                                    <p>${Champions[i].difficulty} difficulty</p> 
                                    </div>
                                    <div class="tags">
                                        ${Champions[i].tags}
                                    </div>
                                    <div class="partype">
                                        ${Champions[i].partype}                        
                                    </div>
                                </div>`
    }
}


