<?php
try {
    include ('newPDO.php');

    $sth = $db->prepare("DELETE FROM `mail` WHERE `mail`=:email;");
    $sth->bindParam(':email', $_POST["value"], PDO::PARAM_STR);
    $sth->execute();
    echo json_encode(["responseSQL"=>true]);
}
catch (PDOException $e){
    $codeError = $e->getCode();
    echo json_encode($codeError);
}


