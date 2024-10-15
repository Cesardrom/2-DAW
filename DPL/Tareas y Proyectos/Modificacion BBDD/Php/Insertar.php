<?php
$conn = new mysqli("localhost", "Josh Sunday", "123456789", "users");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $contraseña = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contraseña')";

    if ($conn->query($sql) === TRUE) {
        echo "Nuevo registro insertado correctamente";
    } else {
        echo "Error al insertar: " . $conn->error;
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Actualizar Usuario</title>
</head>
<body>
    <form method="get" action="../Interfaz.html">
        <button type="submit">Volver a la Página HTML</button>
    </form>
</body>
</html>