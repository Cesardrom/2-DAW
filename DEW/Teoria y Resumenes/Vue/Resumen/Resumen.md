# Resumen del Archivo de Teoría de Vue.js
#### 1. Introducción a Vue.js

Vue.js es un framework progresivo para construir interfaces de usuario. Se centra en la vista y es fácil de integrar con otras bibliotecas o proyectos existentes. Vue es conocido por su facilidad de uso y su enfoque en la reactividad de los datos.

#### 2. Instalación de Vue.js

Para comenzar a usar Vue.js, puedes incluirlo a través de un CDN o instalarlo mediante npm.

Ejemplo de inclusión a través de CDN:

```bash

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>

```
Ejemplo de instalación con npm:

```bash

npm install vue

```

#### 3. Creando una Instancia de Vue

La instancia de Vue es el núcleo de una aplicación Vue. Se crea utilizando el constructor de Vue y se pasa un objeto de configuración.

Ejemplo:

```javascript

const app = new Vue({

    el: '#app',

    data: {

        message: '¡Hola, Vue!'

    }

});

```

HTML:

```bash

<div id="app">

    {{ message }}

</div>

```

#### 4. Directivas

Vue.js utiliza directivas para enlazar datos y manipular el DOM. Algunas de las directivas más comunes son:

    v-bind: Enlaza atributos de HTML a datos de la instancia de Vue.

Ejemplo:

```bash

<div id="app">

    <a v-bind:href="url">Visita mi sitio</a>

</div>

```

```javascript

const app = new Vue({

    el: '#app',

    data: {

        url: 'https://www.ejemplo.com'

    }

});

```

v-model: Crea un enlace bidireccional entre el input y la propiedad de datos.

Ejemplo:

```bash

<div id="app">

    <input v-model="nombre" placeholder="Escribe tu nombre">

    <p>Hola, {{ nombre }}!</p>

</div>

```

```javascript

const app = new Vue({

    el: '#app',

    data: {

        nombre: ''

    }

});

```

#### 5. Condicionales

Las directivas v-if, v-else-if y v-else permiten mostrar u ocultar elementos basados en condiciones.

Ejemplo:

```bash

<div id="app">

    <p v-if="isVisible">Este párrafo es visible.</p>

    <button @click="toggle">Toggle Visibilidad</button>

</div>

```

```javascript

const app = new Vue({

    el: '#app',

    data: {

        isVisible: true

    },

    methods: {

        toggle() {

            this.isVisible = !this.isVisible;

        }

    }

});

```

#### 6. Listas

La directiva v-for se utiliza para renderizar listas de elementos.

Ejemplo:

```bash

<div id="app">

    <ul>

        <li v-for="item in items" :key="item.id">{{ item.name }}</li>

    </ul>

</div>

```

```javascript

const app = new Vue({

    el: '#app',

    data: {

        items: [

            { id: 1, name: 'Elemento 1' },

            { id: 2, name: 'Elemento 2' },

            { id: 3, name: 'Elemento 3' }

        ]

    }

});

```

7. Manejo de Eventos

Vue.js permite manejar eventos de manera sencilla utilizando la directiva v-on o su atajo @.

Ejemplo:

```bash

<div id="app">

    <button @click="saludar">Saludar</button>

</div>

```

```javascript

const app = new Vue({

    el: '#app',

    methods: {

        saludar() {

            alert('¡Hola!');

        }

    }

});

```

#### 8. Componentes

Vue.js permite la creación de componentes reutilizables que encapsulan la lógica y la presentación.

Ejemplo de un Componente:

```javascript

Vue.component('mi-componente', {

    template: '<p>Este es un componente reutilizable.</p>'

});

```

Uso del Componente:

```bash

<div id="app">

    <mi-componente></mi-componente>

</div>

```

#### 9. Reactividad

Vue.js es reactivo, lo que significa que cuando cambian los datos, la vista se actualiza automáticamente.

Ejemplo: javascript const app = new Vue({ el: '#app', data: { contador: 0 }, methods: { incrementar() { this.contador++; } } });

```bash

<div id="app">

    <p>Contador: {{ contador }}</p>

    <button @click="incrementar">Incrementar</button>

</div>

```

#### 10. Conclusiones

Vue.js es una herramienta poderosa y flexible para desarrollar aplicaciones web interactivas y dinámicas. Su enfoque en la reactividad y la simplicidad en la creación de componentes permite a los desarrolladores construir interfaces de usuario de manera eficiente y organizada. Con su amplia gama de directivas y su capacidad para manejar datos y eventos, Vue.js se ha convertido en una opción popular para el desarrollo frontend.