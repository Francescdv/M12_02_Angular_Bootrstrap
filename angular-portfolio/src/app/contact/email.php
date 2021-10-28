<?php

$destinatario = 'francescdv@gmail.com';

$titulo = $_POST['titulo'];
$nombre = $_POST['firstName'];
$apellido $_POST['lastName'];
$date = $_POST['date'];
$email = $_POST['email'];
$telefono = $_POST['telf'];
$mensaje = $_POST['message'];

$header = "Enviado desde mi portfolio";
$mensajeCompleto = $titulo . '<br>' . $nombre . '<br>'. $apellido . '<br>'. $date . '<br>' . $email .'<br>'. $telefono .'<br>'. $mensaje ;

mail($destinatario, $header, $mensajeCompleto );
echo "<script>alert('Correo enviado exitosamente')</script>";

?>
