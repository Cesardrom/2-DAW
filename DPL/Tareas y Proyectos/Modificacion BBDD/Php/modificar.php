<?php
$conn = new mysqli("localhost", "Josh Sunday", "123456789", "users");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
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