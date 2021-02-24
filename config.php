<?php
    echo '<pre>';
    var_dump($_SERVER);
    echo '</pre>';

    $HOST = $_SERVER['SERVER_NAME'];
    $DOMAIN_NAME = $HOST;

    if($HOST !== 'localhost'){
        return;
    }

    $prefix = 'C:/xampp/htdocs/';

    $DOMAIN_NAME = $prefix.$HOST.$_SERVER['REQUEST_URI'];