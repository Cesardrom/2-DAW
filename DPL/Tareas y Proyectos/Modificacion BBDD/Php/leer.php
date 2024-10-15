<?php
$conn = new mysqli("localhost", "Josh Sunday", "123456789", "users");


$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Nombre</th><th>Correo</th><th>Contraseña</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['nombre'] . "</td>";
        echo "<td>" . $row['email'] . "</td>";
        echo "<td>" . $row['contraseña'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No hay registros en la tabla";
}

$conn->close();
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