<!DOCTYPE html>
<html>
<head>
	<title>CS-PLAY</title>

	<meta name="keywords" content="CS-PLAY"/>

<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
<link href="login.css"  rel='stylesheet' type='text/css' />

</head>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){

    include "connectDB.php";
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];

    $sql = "";  // Paste SQL query to retrive account information to check password
    $result = $conn->query($sql);

    $row = $result->fetch_assoc();
    $id = $row['ID']; // Change ID to whatever the row is called in our table


    if ($conn->query($sql) == TRUE) {
        echo "Query was successful";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    if($pwd != $row['Password']){ //Change Password to whatever the row is called in our table
        header("Location: http://johnathanray.com/cs-play/login.php");
        exit();
    }

    $cookie_name = "user";
    $cookie_value = $id;
    setcookie($cookie_name, $cookie_value, time() + (86400), "/");

    header("Location: http://johnathanray.com/cs-play/");
}
$conn->close();
?>


<body>
<!--User-Login-->
<h1>User Login</h1>
<div class="logo">
	<img src="images/logo.png"/>
</div>
	<div class="login-form">
		<p>New user?<a href="createUser.php">Register here!</a></p>
			<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
				<div class="form-text">
					<input type="text" class="text" id="email" name="email" value="USERNAME" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'USERNAME';}" >
					<input type="password" id="pwd" name="pwd" value="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}">
				</div>
					<input type="submit"value="GO" >
			</form>
	</div>
<!--/User-Login-->
<!--start-copyright-->
<div class="copy-right">
	<p>Designed by CS-PLAY</p>
</div>
<!--//end-copyright-->
</body>
</html>
