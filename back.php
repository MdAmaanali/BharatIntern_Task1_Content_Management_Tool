<?php
// Database connection
$host = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$database = "your_db_name";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// API routes
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        // Get a specific content item
        $id = $_GET['id'];
        $sql = "SELECT * FROM content WHERE id = $id";
        $result = $conn->query($sql);
        $content = $result->fetch_assoc();
        echo json_encode($content);
    } else {
        // Get all content items
        $sql = "SELECT * FROM content";
        $result = $conn->query($sql);
        $content = [];
        while ($row = $result->fetch_assoc()) {
            $content[] = $row;
        }
        echo json_encode($content);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Create a new content item
    $data = json_decode(file_get_contents('php://input'));
    $title = $data->title;
    $body = $data->body;
    $sql = "INSERT INTO content (title, body) VALUES ('$title', '$body')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Content created successfully']);
    } else {
        echo json_encode(['error' => 'Error creating content']);
    }
}

// Implement PUT and DELETE routes similarly

$conn->close();
?>
