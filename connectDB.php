<?php

    // Write the following variables to be able to connect to database
    $servername = "";
    $username = "";
    $password = "";
    $db = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $db);

    // Check connection
    if ($conn->connect_error) {
        echo "Connection failed";
        die("Connection failed: ".$conn->connect_error);
    }

?>
