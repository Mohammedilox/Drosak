<?php
include '../db.php';
session_start();
$course_id = $_POST['course_id'];
$user_id = $_SESSION['user_id'];
$conn->query("INSERT INTO purchases (user_id, course_id) VALUES ('$user_id', '$course_id')");
echo "Course purchased.";
?>