<?php
$conn = new mysqli("localhost", "Josh Sunday", "123456789", "users");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nombre = $_POST['name'];
    $email = $_POST['email'];

    $sql = "UPDATE users SET nombre='$nombre', email='$email' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Registro actualizado correctamente";
    } else {
        echo "Error al actualizar: " . $conn->error;
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