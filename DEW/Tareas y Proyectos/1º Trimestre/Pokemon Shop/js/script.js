import DBConnection from "./modelos/database.js";

const database = new DBConnection()
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");

loginButton.addEventListener("click", login);

signupButton.addEventListener("click", register);

async function login() {
    const inputUsername = document.getElementById("login-username").value;
    const inputPassword = document.getElementById("login-password").value;

    const allUsers = await database.readAll()

    for (const user of allUsers) {
        if (user["username"] == inputUsername && user["password"] == inputPassword) {
            window.open(`shop.html?id=${user["id"]}`);
            return
        }
        else {
            alert('El usuario o la contraseña son incorrectas')
        }
    }
}

async function register() {
    const inputUsername = document.getElementById("signup-username").value
    const inputPassword = document.getElementById("signup-password").value
    const repeatPassword = document.getElementById("signup-r-password").value

    const allUsers = await database.readAll()

    for (const user of allUsers) {
        if (user["username"] == inputUsername) {
            alert("El nombre de usario ya existe elija otro por favor")
            return
        }
    } 

    if (inputPassword == repeatPassword) {
        const data = {
            username: inputUsername,
            password: inputPassword,
            balance: 5000,
            wishlist: [],
            inventory: [],
            shoppingCart: []
        }
        await database.addFile(data)
        alert(`El nuevo usuario ${inputUsername} se ha creado exitosamente`)
    } else {
        alert("Las contraseñas son diferentes")
    }
}
