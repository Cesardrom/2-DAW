import Pokemon from "./Pokemon.js";

export default class PokemonModel {
    constructor() {
        this.pokemons = []
    }

    async fetchPokemon(id) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
          const data = await response.json();
          return new Pokemon(data);
        } catch (error) {
          throw new Error(`Error fetching Pokémon with ID ${id}: ${error}`);
        }
    }
    
    async loadPokemons() {
        for (let i = 1; i <= 151; i++) {
          const pokemon = await this.fetchPokemon(i);
          console.log(pokemon)
          this.pokemons.push(pokemon);
        }
    }
    
    getAllPokemons() {
        return this.pokemons;
    }
}