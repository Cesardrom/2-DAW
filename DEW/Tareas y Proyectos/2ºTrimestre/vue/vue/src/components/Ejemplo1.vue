<script setup>
    import { ref } from 'vue'

    defineProps({
    msg: String,
    })

</script>

<template>

    <h1>Ejemplo de Javascript dentro de Vue</h1>

    <p>El texto del 'message' de la instancia de Vue se junta con otro
    texto y una expresión JavaScript. La expresión JavaScript crea
    un número entero aleatorio entre 1 y 6.</p>

    <!--  2.- Creaciónn del div -->
    <div id="app">

    <!--  5.- Añado la interpolación de message -->
    {{ msg }} <br>
    {{'Random number: ' + Math.ceil(Math.random()*6) }}
    </div>
</template>

<style scoped>
    #app {
            display: inline-block;
            padding: 10px;
            font-size: x-large;
            background-color: lightgreen;
        }
</style>