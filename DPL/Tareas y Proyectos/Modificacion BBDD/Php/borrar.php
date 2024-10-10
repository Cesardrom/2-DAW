<?php
$conn = new mysqli("localhost", "Josh Sunday", "123456789", "users");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $sql = "DELETE FROM users WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Registro eliminado correctamente";
    } else {
        echo "Error al eliminar: " . $conn->error;
    }

    $conn->close();
}
?>