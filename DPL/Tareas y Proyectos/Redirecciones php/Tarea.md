# Redirecciones en PHP
El archivo contendrá el HTML con el enlace al que realizaremos la redirección y al que pasaremos los datos que consideremos necesarios. En el caso del video:
```html
<a href="pagina2.php?name=alex">Redireccion</a>
```
El archivo pagina2.php contiene:
```html
header("location: pagina3.php?name=" . $_GET["name"]);
```

<img src="./img/Redireccion1.png">"
Para realizar la redirección hacia pagina3.php con todos los datos que queramos.

Y esto nos lleva al siguiente enlace:

<img src="./img/Redireccion2.png">