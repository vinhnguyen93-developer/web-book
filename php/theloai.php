<?php
require_once("server.php");
$event = $_POST['event'];

switch ($event) {
	case "insert":
        $matl = $_POST['matl'];
	    $tentl = $_POST['tentl'];   

        $sql = "INSERT INTO `theloai` (matl,tentl) VALUES('".$matl."','".$tentl."')";
       
        if(mysqli_query($conn, $sql)) {
            $res[$event] = 1;
        } else {
            $res[$event] = 0;
        }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "delete":
        $matl = $_POST['matl'];

        $sql = "DELETE FROM `theloai` WHERE matl='".$matl."'";

        mysqli_query($conn, $sql);

        if (mysqli_affected_rows($conn)) {
            $res[$event] = true;
        } else {
            $res[$event] = false;
        }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "update":
        $matl = $_POST['matl'];
        $tentl = $_POST['tentl'];

        $sql="UPDATE  `theloai` SET tentl='".$tentl."' WHERE matl='".$matl."'";
       
        if (mysqli_query($conn, $sql)) {
            $res[$event] = 1;
        } else {
            $res[$event] = 0;
        }
        
        echo json_encode($res);
        mysqli_close($conn);
        break;
    case "getDSTheLoai":
		
		$mang = array();
      
        $record = $_POST['record'];
        $page = $_POST['page'];
      
		$vt = $page * $record;
        $limit = 'limit '.$vt.' , '.$record;
        $sql = mysqli_query($conn, "select * from theloai ".$limit); 

		while($rows = mysqli_fetch_array($sql))
        {
            $id = $rows['MaTL'];
            $usertemp['MaTL'] = $rows['MaTL'];
            $usertemp['TenTL'] = $rows['TenTL'];
            
            $mang[$id] = $usertemp;
        }

        $rs = mysqli_query($conn,"select COUNT(*) as 'total' from theloai");
        $row = mysqli_fetch_array($rs);

        $jsonData['total'] = (int)$row['total'];
		$jsonData['totalpage'] = ceil($row['total']/$record);
	    $jsonData['page'] = (int)$page;
        $jsonData['items'] = $mang;
		
        echo json_encode($jsonData);
		mysqli_close($conn);
        break;
    case "updateAvatar":
        $avatar = $_POST['avatar'];
        
        $username = $_POST['username']; 

        $sql = "update users set avatar='".$avatar."' where username='".$username."'";
            
        if (mysqli_query($conn, $sql)) {
            $res[$event] = 1;
        } else {
            $res[$event] = 0;
        }
            
        echo json_encode($res);

        mysqli_close($conn);
        
        break;     
    default:
        # code...
        break;
}
?>