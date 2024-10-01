# Creacion de repositorio y gestion de el a traves de visual

##### Debido a que lo e echo mil veces solo lo detallare con pasos pero no sacare fotos 

## 1. Crear una cuenta en GitHub

Ve a GitHub.
Haz clic en “Sign up” (Registrarse) en la esquina superior derecha.
Introduce tu correo electrónico y haz clic en “Continue” (Continuar).
Crea una contraseña y haz clic en “Continue”.
Elige un nombre de usuario y haz clic en “Continue”.
Sigue las instrucciones adicionales para completar el registro, como verificar tu correo electrónico.

## 2. Crear un repositorio llamado “banco”

Inicia sesión en tu cuenta de GitHub.
Haz clic en el ícono de “+” en la esquina superior derecha y selecciona “New repository” (Nuevo repositorio).
Introduce “banco” en el campo “Repository name” (Nombre del repositorio).
Opcionalmente, añade una descripción.
Elige si el repositorio será público o privado.
Haz clic en “Create repository” (Crear repositorio).

## 3. Clonar el repositorio desde la línea de comandos

Abre la terminal o línea de comandos.
Navega a la carpeta donde quieres clonar el repositorio usando el comando cd:

```bash
cd ruta/a/tu/carpeta
```

Ejecuta el siguiente comando para clonar el repositorio (reemplaza tu-usuario con tu nombre de usuario de GitHub):

```bash
git clone https://github.com/tu-usuario/banco.git
```

## 4. En otra carpeta, crea un proyecto llamado “banco”

Crea una nueva carpeta en tu sistema llamada “banco”.
Añade los archivos y carpetas necesarios para tu proyecto dentro de esta carpeta.

## 5. Copiar la carpeta del proyecto del banco a la carpeta en la que has clonado el repositorio

Copia todos los archivos y carpetas del proyecto “banco” a la carpeta banco que clonaste desde GitHub.
Asegúrate de que todos los archivos se hayan copiado correctamente.

## 6. Hacer un commit y push desde Visual Studio

Abre Visual Studio y carga el proyecto desde la carpeta clonada.
Ve a la pestaña “Source Control” (Control de código fuente) o “Team Explorer”.
Añade todos los archivos al control de versiones:
Haz clic en “Changes” (Cambios).
Selecciona los archivos que quieres añadir y haz clic en el botón “+” para añadirlos.
Escribe un mensaje descriptivo para el commit en el campo “Message”.
Haz clic en “Commit All” (Confirmar todo).
Luego, haz clic en “Push” para subir los cambios a GitHub.

## 7. Borrar del disco duro todo el código del banco

Navega a la carpeta del proyecto “banco” en tu disco duro.
Elimina la carpeta del proyecto.

## 8. Clonar el proyecto del banco de GitHub a local

Abre la terminal o línea de comandos.
Navega a la carpeta donde quieres clonar el repositorio nuevamente usando el comando cd:
cd ruta/a/tu/carpeta

Ejecuta el comando de clonación:

```bash
git clone https://github.com/tu-usuario/banco.git
```

## 9. Hacer una modificación del código y subirlo a GitHub

Abre el proyecto clonado en Visual Studio.
Realiza alguna modificación en el código.
Guarda los cambios.
Ve a la pestaña “Source Control” (Control de código fuente) o “Team Explorer”.
Añade los archivos modificados al control de versiones.
Escribe un mensaje descriptivo para el commit.
Haz clic en “Commit All” (Confirmar todo).
Luego, haz clic en “Push” para subir los cambios a GitHub