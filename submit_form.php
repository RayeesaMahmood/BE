<?php
$host = "localhost";
$dbUsername = "bizzapt9_contactuser";   // Replace if different
$dbPassword = "your_db_password";       // Replace with real password
$dbName = "bizzapt9_contactus";         // Use your actual DB name

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $conn->real_escape_string($_POST['name']);
$phone = $conn->real_escape_string($_POST['phone']);
$email = $conn->real_escape_string($_POST['email']);
$subject = $conn->real_escape_string($_POST['subject']);
$message = $conn->real_escape_string($_POST['message']);

$sql = "INSERT INTO messages (name, phone, email, subject, message) 
        VALUES ('$name', '$phone', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    header("Location: thankyou.html");
    exit();
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
