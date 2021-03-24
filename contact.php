<?php
$db_user = "root";
$db_pass = "";
$db = "testdb";

$db = new PDO('mysql:host=localhost;dbname' . $db . ';charset=utf8', $db_user,$db_pass);
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERR_NONE);

if(isset($_POST['register_btn'])){
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phonenumber = $_POST['phonenumber'];
    $comments = $_POST['comments'];

    $sql = "UINSERT INTO contact (fullname,email,phonenumber,comments) VALUES(?,?,?,?)";
    $stmtinsert = $db->prepare($sql);
    $result = $stmtinsert->execute([$fullname, $email, $phonenumber, $comments]);
    if($result){
        echo 'successfully saved';

    }else{
        echo 'erros whille saving';
    }
}

?>