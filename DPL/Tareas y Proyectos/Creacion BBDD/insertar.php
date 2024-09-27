<?php

$conn = mysqli_connect( 'localhost', 'root', 'mysql', 'prueba');

echo '<pre>';
print_r( $conn);

$insert = "insert into users(name, email) values ('César', 'example@gmail.com')";

$return = mysql_query ( $conn, $insert);

print_r($return);

mysqli_close ($conn);
