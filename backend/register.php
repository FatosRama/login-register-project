<?php 

$host = "localhost";
$username = "postgres";
$dbname = "backendtest";
$password = "fatos2005";
$port = 5432;

$conn_string = "host=$host port=$port dbname=$dbname user=$username password=$password";
$conn = pg_connect($conn_string);
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}


$email = trim($_POST['email']);
$password = trim($_POST['password']);
$name = trim($_POST['name']);
$surname = trim($_POST['surname']);
$phone_number = trim($_POST['phone_number']);

if (empty($email) || empty($password) || empty($name) || empty($surname) || empty($phone_number)) {
    die("All fields are required.");
}

$same_email_query = "SELECT * FROM registered_user WHERE email = $1 OR phone_number = $2";
$same_email_result = pg_query_params($conn, $same_email_query, array($email, $phone_number));
if (pg_num_rows($same_email_result) > 0) {
    die("Email or phone number already exists.");
}


$query = "INSERT INTO registered_user (name, surname, email, phone_number, password) VALUES ($1, $2, $3, $4, $5)";
$result = pg_query_params($conn, $query, array($name, $surname, $email, $phone_number, $password));

if ($result) {
    echo "Registration successful!";
} else {
    echo "Error: " . pg_last_error($conn);
}




























?>