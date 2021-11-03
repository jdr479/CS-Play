<?php

    // Write the following variables to be able to connect to database
    $servername = "csplay.c6gbous84apf.us-west-1.rds.amazonaws.com";
    $username = "admin";
    $password = "vnJkXxF1DHumFMIpvDts";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        echo "Connection failed";
        die("Connection failed: ".$conn->connect_error);
    }

?>
