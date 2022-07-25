<?php

// Chargement des log de co. Ces log sont caché dans un fichier .env grâce à la bibliothèque phpdotenv
require __DIR__ .'/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
define('SERVER', $_ENV['SERVER']);
define('DATABASE', $_ENV['DATABASE']);
define('USERNAME', $_ENV['USERNAME']);
define('PASSWORD', $_ENV['PASSWORD']);

//Initialisation du PDO
$db = new PDO("mysql:host=".SERVER.";dbname=".DATABASE."", USERNAME, PASSWORD);

// Les attributes suivantes permetent d'avoir un msg d'erreur sql bien plus précis
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
