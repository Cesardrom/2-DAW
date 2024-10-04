# Tarea de creacion de base de datos

### Creacion de la base de datos desde localhost

Primero accedemos a localhost y a la pestaña base de dato

<img src="./img/Creacion base de datos.png">

Tras esto creamos la tabla despues de insertar el nombre de la base de datos y darle al boton crear 

<img src="./img/Creacion de tabla.png">

Le indicaremos el nombre de la tabla y el numero de columnas que deseamos que tenga esta y tras esto pondremos los valores como la id y los diferentes campos 

<img src="./img/Creacion de id.png">

En esta pestaña para crear la id pondremos el tipo de indice ne PRYMARY y le daremos a continuar y despues agregaremos los campos que queramos dando a las pestañas que se encuentra al lado del nombre de la columna 

<img src="./img/Creacion de la tabla completa.png">

Quedandonos al final una tabla de esta forma la cual guardaremos y se quedara almacenada en la base de datos para poder acceder despues a ella.

### Conexion a la base de datos a traves de php 

Para esto necesitaremos tener el siguiente php creado en nuestro equipo 

```php
<?php
$conn = mysqli_connect( 'localhost', 'root', 'mysql', 'prueba');

echo '<pre>';
print_r( $conn);
```

Y esto tras ponerlo en los directorios correctamente y acceder a la pagina creada en localhost gracias a este php nos aparecera lo siguiente.

<img src="./img/Resultado php.png">

Donde nos aparecera la informacion de la tabla creada.

###### Tarea Realizada por César Domínguez Romero.