# Guia para configuracion y instalacion basicas de nginx

### Instalacion.

Primero instalamos el ngix a traves del comando sudo apt install nginx y despues confirmamos si esta activo con systemctl status nginx.

### Configuracion basica.

Prinero nos dirigimos a /etc/nginx/ y desde hay entramos a sites-available y donde encontramos un default hacemos un cat para observar el contenido y hacemos lo mismo en la carpeta sites-enabled.

Tras ello nos dirigimos a /var/www/html y borramos los dos archivos existentes y creamos con nano un index.html donde pondremos lo que queremos mostrar y tras ello hacemos un restart de el servicio de nginx con sudo systemctl restart nginx
