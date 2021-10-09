<?php
    include '../connect/connect.php';

    $sql = "CREATE TABLE myComment (";
	$sql .= "ID int(10) unsigned NOT NULL AUTO_INCREMENT,";
	$sql .= "youName varchar(20) NOT NULL,";
	$sql .= "youText varchar(50) NOT NULL,";
	$sql .= "regTime int(11) NOT NULL,";
	$sql .= "PRIMARY KEY (ID)";
	$sql .= ") CHARSET=utf8";

    $result = $connect -> query($sql);

    if($result){
        echo 'create Comment Complete';
    }else{
        echo 'create Comment False';
    }
?>

