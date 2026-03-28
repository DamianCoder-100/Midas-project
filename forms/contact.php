<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(403);
    echo "Error";
    exit;
}

$name    = strip_tags(trim($_POST["name"] ?? ''));
$email   = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
$subject = strip_tags(trim($_POST["subject"] ?? ''));
$message = trim($_POST["message"] ?? '');

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Error";
    exit;
}

// ✅ IMPORTANT: Only return OK
echo "OK";
?>