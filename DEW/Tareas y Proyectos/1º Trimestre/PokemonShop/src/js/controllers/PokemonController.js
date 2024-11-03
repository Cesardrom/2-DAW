import PokemonModel from "../models/PokemonModel.js";
import PokemonView from "../views/PokemonView.js";
import UserController from "./UserController.js";

export default class PokemonController {
    constructor() {
        this.model = new PokemonModel();
        this.view = new PokemonView();
        this.user = new UserController();
        this.init()
    }

    // Inicializa la aplicación en varios pasos 
    async init() {
        await this.model.loadPokemons();
        const urlParameter = window.location.search.substring(4)
        await this.user.fetchData(urlParameter)
        this.view.hideLoading();
        this.view.displayUser(this.user)
        this.view.displayPokemons(this.model.getAllPokemons())
        this.bindingEvents();
    }

    async bindingEvents() {

        // Name filter
        const nameFilter = document.getElementById("filter-by-name");
        nameFilter.addEventListener("input", this.filterPokemons.bind(this))

        // Type filter
        const typeFilter = document.getElementById("filter-by-type");
        typeFilter.addEventListener("input", this.filterPokemons.bind(this))

        // Añadir a lista de deseos
        document.querySelectorAll('.wishlist-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que se active la selección de la carta
                const pokemonId = button.getAttribute('data-id');
                this.addToWishlist(pokemonId);
            });
        });

        // Añadir al carrito
        document.querySelectorAll('.cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Evita que se active la selección de la carta
                const pokemonId = button.getAttribute('data-id');
                this.addToCart(pokemonId);
            });
        });

        // Show wishlist function
        const btnWishlist = document.getElementById("wishlist");
        btnWishlist.addEventListener("click", this.showWishlist.bind(this));

        // Show shopping cart
        const btnShoppingCart = document.getElementById("shopping-cart");
        btnShoppingCart.addEventListener("click", this.showShoppingCart.bind(this))

        // Show profile
        const userProfile = document.getElementById("username")
        userProfile.addEventListener("click", this.showProfile.bind(this))
        
    }

    addToWishlist(pokemonId) {
        if (!this.user.wishlist.includes(pokemonId)) {
            this.user.wishlist.push(pokemonId);
            this.user.updateWishlist();
            alert('Pokemon añadido a la lista de deseos!');
        } else {
            alert('Este Pokemon ya está en tu lista de deseos');
        }
    }
    
    addToCart(pokemonId) {
        if (!this.user.shoppingCart.includes(pokemonId)) {
            this.user.shoppingCart.push(pokemonId);
            this.user.updateShoppingCart();
            alert('Pokemon añadido al carrito!');
        } else {
            alert('Este Pokemon ya está en tu carrito');
        }
    }

    showWishlist() {
        window.open(`./whishlist.html?id=${this.user.id}`)
    }

    showProfile() {
        window.open(`./user-profile.html?id=${this.user.id}`)
    }

    showShoppingCart() {
        window.open(`./shopping-cart.html?id=${this.user.id}`)
    }

    filterPokemons() {
        const nameFilterValue = document.getElementById("filter-by-name").value.toLowerCase();
        const typeFilterValue = document.getElementById("filter-by-type").value.toLowerCase();

        const filteredPokemons = this.model.getAllPokemons().filter((pokemon) => {
            const matchName = pokemon.name.toLowerCase().includes(nameFilterValue);
            const matchType = pokemon.types.some(type => type.type.name.toLowerCase().includes(typeFilterValue));

            return matchName && matchType
        });

        this.view.displayPokemons(filteredPokemons);
    }
}