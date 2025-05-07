<?php
include '../db.php';
session_start();
$email = $_POST['email'];
$pass = $_POST['password'];
$result = $conn->query("SELECT * FROM users WHERE email='$email' AND password='$pass'");
if ($result->num_rows > 0) {
  $_SESSION['user_id'] = $result->fetch_assoc()['id'];
  header("Location: ../../frontend/pages/dashboard.html");
} else {
  echo "Login failed.";
}
?>