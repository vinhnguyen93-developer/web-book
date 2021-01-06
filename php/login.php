<?php
require_once("server.php");
$event = $_POST['event'];

switch ($event) {
    case "login":
        $u = $_POST['username'];
        $p = md5($_POST['pass']);
        
		$sql = mysqli_query($conn, "select avatar, username, password from users where username='".$u."' and password='".$p."'"); 

        $t = '';

		while($rows = mysqli_fetch_array($sql))
        {
            
            $userTemp['username'] = $rows['username'];
            $userTemp['password'] = $rows['password'];
            $userTemp['avatar'] = $rows['avatar'];

            $t=$rows['username'];
        }

		if($t != '') {
			$jsonData["event"] = 1;
			$jsonData["items"] = $userTemp;
		
			echo json_encode($jsonData);
		} else {
			$jsonData["event"] = 0;
		
			echo json_encode($jsonData);
        }
        
		mysqli_close($conn);
        break;
}
?>