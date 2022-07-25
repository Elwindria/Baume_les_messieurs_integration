<?php

// Chargement des données sensibles via phpdotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
define('SERVER', $_ENV['SERVER']);
define('DATABASE', $_ENV['DATABASE']);
define('USERNAME', $_ENV['USERNAME']);
define('PASSWORD', $_ENV['PASSWORD']);


phpversion();
#Je verifie en Php si le mail : existe et NOT NULL // N'est pas vide // Corresponds au filtre "validate_email" (c'est un filtre auto)
if (isset($_POST['input_newsletter']) && !empty($_POST['input_newsletter']) && filter_var($_POST['input_newsletter'], FILTER_VALIDATE_EMAIL)){
    
    //On initialise la variable $codeError, pour l'instant tout va bien
    $codeError = "no_error_MYSQL";

    //Si c'est bon, alors on essaye de crée un objet PDO qui sert de lien entre Php à mysql
    try{
        $db = new PDO("mysql:host=".SERVER.";dbname=".DATABASE."", USERNAME, PASSWORD);
        // Les attributes suivantes permetent d'avoir un msg d'erreur sql bien plus précis
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //On prépare une request SQL, avec les paramètres puis on execute
        $myRequestSQL = $db->prepare("INSERT INTO mail (mail) VALUES ( :email )");
        $myRequestSQL->bindParam(':email', $_POST['input_newsletter'], PDO::PARAM_STR);
        $myRequestSQL->execute();
    }
    //Si il y a une erreur, alors php va dans catch et la variable $codeError récupère l'erreur
    catch (PDOException $e){
        // $codeError = $e->getCode();
        $codeError = $e->getCode();
    }

    $db = null;

    // On envoit la réponse du php et Mysql en Json
    echo json_encode(["responsePhp"=>"mail_is_good", "responseMYSQL"=>$codeError]);

    
} else {
    //Si le mail n'a pas réussi les test, alors il n'est pas valide. On envoit l'info à JS via un Json
    echo json_encode(["responsePhp"=>"mail_is_not_good", "responseMYSQL"=>"no_error_MYSQL"]);
}

?>