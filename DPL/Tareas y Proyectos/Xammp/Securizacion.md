# Securizacion de Xamp.

#### Inicializacion de Xammp

Utilizamos el siguiente comando para inicar todo lo que conlleva xammp

sudo opt/lampp/xampp start

---

<br>

#### Cambiar la contraseña

Después del paso anterior, pondremos en el navegador localhost/phpmyadmin y nos saldrá lo siguiente:

<img src="./img/4.png">

Hay que cambiar la contraseña al root para segurizar el servidor. Se cambiaría desde el propio panel del phpmyadmin. Después de cambiarlo dejará de funcionar.
Mediante el siguiente comando se pararán los servicios y se ingresará el documento a cambiar:

sudo /opt/lampp/xampp stop
cd opt/lampp/phpmyadmin 
sudo nano config.inic.php

Cambiamos la contraseña a la que sea necesario.


---

<br>

#### Creacion de usuarios.

Crearemos un usuario y le pondremos contraseña y permisos.
<img src="./img/5.png">

<img src="./img/6.png">


Cambiaremos el fichero config otra vez para poder darle al panel de php que pregunte antes de entrar que usuario usar.

cd opt/lampp/phpmyadmin
sudo nano config.inic.php

Modificaremos el apartado de $Cfg['Server']['Aut_type']='http'
