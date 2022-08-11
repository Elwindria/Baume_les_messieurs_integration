<?php

$codeError = true;

try {
    include ('newPDO.php');

    $myRequestSQL = $db->prepare("SELECT mail, DATE_FORMAT(date_mail, '%d/%m/%Y') AS date_mail FROM mail ORDER BY date_mail");
    $myRequestSQL->execute();

    $resultSQL = $myRequestSQL->fetchAll(PDO::FETCH_ASSOC);
}
catch (PDOException $e){
    $codeError = $e->getCode();
}

echo json_encode($resultSQL);