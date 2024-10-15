# Tarea 1.3 - Trabajando con Git y Markdown

### Crear un directorio de trabajo
```bash
mkdir ~/bloggalpon
cd ~/bloggalpon
```

### Inicializar el repositorio vacío
```bash
git init
```
### Crear el archivo index.htm
```bash
touch index.htm
```
### Añadir la estructura básica de una web
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Galpón</title>
</head>
<body>
    <header>
        <h1>Bienvenidos a Blog Galpón</h1>
    </header>
    <section>
        <article>
            <h2>Primer Post</h2>
            <p>Contenido del primer post.</p>
        </article>
    </section>
    <footer>
        <p>&copy; 2024 Blog Galpón</p>
    </footer>
</body>
</html>
```

### Crear un commit indicando que se crea el esqueleto básico del index.htm
```bash
git add index.htm
git commit -m "Se crea el esqueleto básico del index.htm"
```
### Añadir el contenido al <head>
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Galpón</title>
    <link rel="stylesheet" href="style.css">
</head>
```
### Crear un commit indicando que se añade la cabecera del index.htm
```bash
git add index.htm
git commit -m "Se añade la cabecera del index.htm"
```
### Añadir el contenido al <body>
```html
<body>
    <header>
        <h1>Bienvenidos a Blog Galpón</h1>
    </header>
</body>
```
### Crear un commit indicando que se añade la estructura básica del body
```bash
git add index.htm
git commit -m "Se añade la estructura básica del body"
```
### Añadir el contenido de <section>
```html
<section>
    <article>
        <h2>Primer Post</h2>
        <p>Contenido del primer post.</p>
    </article>
</section>
```
### Crear un commit indicando que se añade toda la estructura de la zona de posts
```bash
git add index.htm
git commit -m "Se añade toda la estructura de la zona de posts"
```
### Crear un archivo style.css
```bash
touch style.css
```
### Añadir la siguiente información al style.css
```css
html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}
```
### Crear un commit indicando que se añaden las CSS de html y de body
```bash
git add style.css
git commit -m "Se añaden las CSS de html y de body"
```
### Añadir la siguiente información al style.css
```css
header, section, article, aside, footer {
    display: block;
    margin: 0;
    padding: 0;
}
```
### Crear un commit indicando que se añaden las CSS de varios elementos HTML5
```bash
git add style.css
git commit -m "Se añaden las CSS de varios elementos HTML5: header, section, article, aside y footer"
```
### Añadir el logotipo logo.png en el directorio raíz del proyecto
```bash
cp /ruta/al/logo.png ~/bloggalpon/logo.png
```
### Crear un commit indicando que se añade el logotipo de Galpón
```bash
git add logo.png
git commit -m "Se añade el logotipo de Galpón"
```
### Añadir la siguiente información al style.css
```css
section {
    padding: 20px;
}
```
### Crear un commit indicando que se añaden las CSS de section
```bash
git add style.css
git commit -m "Se añaden las CSS de section"
```
### Añadir la siguiente información al style.css
```css
footer {
    background-color: #f1f1f1;
    text-align: center;
    padding: 10px;
}
```
### Crear un commit indicando que se añaden las CSS del footer
```bash
git add style.css
git commit -m "Se añaden las CSS del footer"
```
### Añadir la siguiente información al style.css
```css
h1 {
    color: #333;
}
a {
    color: #0066cc;
    text-decoration: none;
}
```
### Crear un commit indicando que se añaden las CSS del H1 y de los enlaces
```bash
git add style.css
git commit -m "Se añaden las CSS del H1 y de los enlaces"
```
### Crear una etiqueta de v1.0
```bash
git tag v1.0
```
### Crear una rama “desarrollo”
```bash
git checkout -b desarrollo
```
### Crear un directorio de images y mover allí el logotipo logo.png
```bash
mkdir images
git mv logo.png images/
git commit -m "Se mueve el logotipo a la carpeta images"
```
### Crear un directorio de CSS y mover allí las CSS style.css
```bash
mkdir CSS
git mv style.css CSS/
git commit -m "Se mueve la CSS a la carpeta CSS"
```
### Cambiar las referencias a la CSS en el index.htm y al logotipo
```html
<head>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body>
    <header>
        <img src="images/logo.png" alt="Logo de Galpón">
        <h1>Bienvenidos a Blog Galpón</h1>
    </header>
</body>
```
### Crear un commit indicando que se actualizan las referencias en index.htm
```bash
git add index.htm
git commit -m "Se actualizan las referencias a la CSS y al logotipo en index.htm"
```
### Crear una rama “bugfix” a partir de la “master” para resolver fallos
```bash
git checkout master
git checkout -b bugfix
```
### Quitar los comentarios en las CSS de los dos punteados
```css
/* En style.css, eliminar los comentarios de las líneas que empiezan por //border */
.barra-derecha {
    border: 1px dotted #000;
}
footer {
    border: 1px dotted #000;
}
```
### Crear un commit indicando que se introducen los punteados en la barra derecha y en el footer
```bash
git add CSS/style.css
git commit -m "Se introducen los punteados en la barra derecha y en el footer"
```
### Introducir como título “Galpon”
```html
<title>Galpon</title>
```
### Crear un commit indicando que se introduce el título en la página
```bash
git add index.htm
git commit -m "Se introduce el título en la página"
```
### Cambiar 2012 por 2014 en el footer y quitar ©
```html
<footer>
    <p>2024 Blog Galpón</p>
</footer>
```
### Crear un commit indicando que se realizan pequeños ajustes en el footer
```bash
git add index.htm
git commit -m "Se realizan pequeños ajustes en el footer"
```
### Crear una etiqueta de v1.1
```bash
git tag v1.1
```
### Llevar estos cambios a la rama master
```bash
git checkout master
git merge bugfix
```
### Borrar la rama bugfix
```bash
git branch -d bugfix
```
### Llevar los cambios de la rama “desarrollo” a la rama “master” y resolver conflictos
```bash
git checkout master
git merge desarrollo
```
### Si hay conflictos, resolverlos manualmente y luego:
```bash
git add .
git commit -m "Se resuelven los conflictos al fusionar desarrollo en master"
```
### Crear una etiqueta de v1.2
```bash
git tag v1.2
```
---

##### Creado por César Domínguez