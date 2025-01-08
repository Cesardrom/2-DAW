### Activación de las Configuraciones

Regresé al directorio principal de configuración de Nginx y creé enlaces simbólicos para habilitar los sitios:

```bash

ln -s /etc/nginx/sites-available/empresal /etc/nginx/sites-enabled/

ln -s /etc/nginx/sites-available/empresa2 /etc/nginx/sites-enabled/

ln -s /etc/nginx/sites-available/empresa3 /etc/nginx/sites-enabled/
```
Eliminé la configuración predeterminada para evitar posibles conflictos:

```bash

rm /etc/nginx/sites-enabled/default
```
### Verificación y Recarga de Nginx

Verifiqué que la configuración no presentara errores:

```bash

nginx -t
```
Si no se encontraron errores, recargué el servicio para aplicar los cambios:

```bash

nginx -s reload
```
### Configuración del Archivo /etc/hosts

Modifiqué el archivo /etc/hosts para que los nombres de dominio dirigieran al localhost (127.0.0.1):

```bash

nano /etc/hosts
```

Agregué las siguientes líneas:

```bash

127.0.0.1 empresal.com www.empresal.com

127.0.0.1 empresa2.com www.empresa2.com

127.0.0.1 empresa3.com www.empresa3.com
```

### Creación de Páginas de Inicio

Finalmente, creé un archivo index.html para cada sitio con el fin de verificar que los hosts virtuales funcionaban correctamente. Por ejemplo, para empresal:

```bash

cd /var/www/empresa1

nano index.html

```

Escribí un contenido simple, como:

```bash

<h1>Bienvenido a Empresa 1</h1>
```

Repetí el mismo proceso para empresa2 y empresa3.

### Comprobación Final

Realicé una última recarga de Nginx:

```bash

nginx -s reload
```
