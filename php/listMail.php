<?php

$codeError = "no_error_MYSQL";

try {
    include ('newPDO.php');

    $myRequestSQL = $db->prepare("SELECT mail, date_mail FROM mail");
    $myRequestSQL->execute();

    $resultSQL = $myRequestSQL->fetchAll(PDO::FETCH_ASSOC);
}
catch (PDOException $e){
    $codeError = $e->getCode();
}

echo json_encode($resultSQL);