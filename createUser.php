<!DOCTYPE html>
<html>
    <head>
        <title>CS-Play</title>
    </head>

    <?php
    include "connectDB.php";
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $firstName = $_POST['firstName'];
        $lastNname = $_POST['lastName'];
        $email = $_POST['email'];
        $pwd = $_POST['pwd'];


        $sql = "";  // Paste SQL query to insert information for a new account here

        if ($conn->query($sql) == TRUE) {
            //header("Location: http://johnathanray.com/cs-play/login.php");
            echo "New record created successfully";
        } else {
            $message = "E-mail unavailable.";
            echo "<script type='text/javascript'>alert('$message');</script>";
            //echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    $conn->close();
    ?>


    <body>
      <h2>Create an account</h2>

        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <label for="firstName">First name:</label><br>
        <input type="text" id="firstName" name="firstName"><br>

        <label for="lastName">Last name:</label><br>
        <input type="text" id="lastName" name="lastName"><br>

        <label for="email">E-mail:</label><br>
        <input type="email" id="email" name="email"><br>

        <label for="pwd">Password:</label><br>
        <input type="password" id="pwd" name="pwd"><br><br>

        <input type="submit" value="Create account">
        </form>



    </body>
</html>
