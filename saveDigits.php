<?php
$url = $_GET['url']; // Get the restricted URL from the query parameter

$content = file_get_contents($url); // Fetch the content from the restricted URL

header('Content-Type: text/html'); // Set the content type to text/html
echo $content; // Display the fetched content on your website
?>
