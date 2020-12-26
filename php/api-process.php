<?php 
    $dataFromClient = $_GET["event"];

    switch($dataFromClient) {
        case "send data":
            echo "Hello đã nhận được data.";
            break;
        default:
            break;
    }
?>