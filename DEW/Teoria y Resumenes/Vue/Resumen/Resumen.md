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

# Resumen del Archivo: Pyto Vue en VSC con npm y Vite

#### 1. Introducción a Vite

Vite es un entorno de desarrollo ligero y rápido que proporciona una experiencia de desarrollo optimizada para proyectos modernos de JavaScript, incluyendo Vue.js. Vite utiliza un servidor de desarrollo que proporciona recarga en caliente y un proceso de construcción optimizado.

#### 2. Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos en tu sistema:

- Node.js: Vite requiere Node.js. Puedes descargarlo desde nodejs.org.
- Visual Studio Code (VSC): Un editor de código recomendado para trabajar con proyectos de Vue.js.

#### 3. Creación de un Nuevo Proyecto Vue.js con Vite

Para crear un nuevo proyecto Vue.js utilizando Vite, sigue estos pasos:

- Abrir la Terminal: Puedes abrir la terminal integrada en Visual Studio Code.

- Crear un Proyecto Usando npm: Ejecuta el siguiente comando en la terminal:

```bash

npm create vite@latest nombre-del-proyecto --template vue

```

Esto creará un nuevo proyecto llamado nombre-del-proyecto utilizando la plantilla de Vue.

Navegar al Directorio del Proyecto:

```bash

cd nombre-del-proyecto

```

Instalar Dependencias: Una vez dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

```bash

    npm install

```

#### 4. Estructura del Proyecto

Una vez creado el proyecto, la estructura del directorio se verá similar a esto:

nombre-del-proyecto/

├── node_modules/

├── public/

├── src/

│   ├── assets/

│   ├── components/

│   ├── App.vue

│   └── main.js

├── index.html

├── package.json

└── vite.config.js

    src/: Contiene el código fuente de la aplicación.
    public/: Archivos estáticos que se sirven directamente.
    components/: Carpeta para almacenar componentes de Vue reutilizables.
    App.vue: Componente raíz de la aplicación.
    main.js: Archivo de entrada donde se crea la instancia de Vue.

#### 5. Iniciar el Servidor de Desarrollo

Para iniciar el servidor de desarrollo y ver tu aplicación en el navegador, ejecuta el siguiente comando:

```bash

npm run dev

```

Esto iniciará el servidor y te proporcionará una URL, típicamente http://localhost:5173, donde podrás ver tu aplicación Vue en acción.


#### 6. Modificar el Componente Principal

Abre src/App.vue y modifica el contenido para personalizar tu aplicación. Por ejemplo:

```vue

<template>

  <div id="app">

    <h1>¡Bienvenido a mi aplicación Vue con Vite!</h1>

    <p>Esta es una aplicación creada con Vite.</p>

  </div>

</template>


<script>

export default {

  name: 'App'

}

</script>


<style>

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;

  color: #2c3e50;

  margin-top: 60px;

}

</style>

```

#### 7. Agregar Componentes

Para agregar un nuevo componente, crea un nuevo archivo en la carpeta src/components/. Por ejemplo, crea un archivo llamado HelloWorld.vue:

```vue

<template>

  <div>

    <h2>Hola, Mundo!</h2>

  </div>

</template>


<script>

export default {

  name: 'HelloWorld'

}

</script>

```

Luego, importa y utiliza este componente en App.vue:

```vue

<template>

  <div id="app">

    <h1>¡Bienvenido a mi aplicación Vue con Vite!</h1>

    <HelloWorld />

  </div>

</template>


<script>

import HelloWorld from './components/HelloWorld.vue';


export default {

  name: 'App',

  components: {

    HelloWorld

  }

}

</script>

```

#### 8. Construcción para Producción

Cuando estés listo para desplegar tu aplicación, puedes construirla para producción ejecutando:

```bash

npm run build

```

Esto generará una carpeta dist/ que contiene los archivos optimizados para producción.

#### 9. Conclusión

Este archivo proporciona una guía completa para comenzar con Vue.js utilizando Vite en Visual Studio Code. Desde la instalación hasta la creación de componentes y la construcción para producción, cubre todos los aspectos esenciales para que los desarrolladores puedan iniciar sus proyectos de manera efectiva. Vite, con su enfoque en la velocidad y la simplicidad, se convierte en una herramienta valiosa para el desarrollo moderno de aplicaciones Vue.