<?php
$user='root';
$pass='';
$dsn='mysql:host=localhost;dbname=formalab';
try {
    $dbh= new PDO($dsn, $user, $pass);
    if ($dbh) {


    }
}
catch(PDOException $e)
{
    print "erreur de connection à mysql aaa !:"."<br/>"; die();
}

?>