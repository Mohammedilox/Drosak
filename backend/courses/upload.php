<?php
include '../db.php';
$title = $_POST['title'];
$desc = $_POST['description'];
$conn->query("INSERT INTO courses (title, description) VALUES ('$title', '$desc')");
echo "Course uploaded.";
?>