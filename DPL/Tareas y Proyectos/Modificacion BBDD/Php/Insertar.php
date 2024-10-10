<?php
$conn = new mysqli("localhost", "Josh Sunday", "123456789", "users");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contraseña')";

    if ($conn->query($sql) === TRUE) {
        echo "Nuevo registro insertado correctamente";
    } else {
        echo "Error al insertar: " . $conn->error;
    }

    $conn->close();
}
?>