<?php
    if(!isset($_SESSION['memberID'])){
        Header('Location:../login/login.php');
    }
    //회원가입이 안되어 있을때 --> 회원가입 하세요 
?>