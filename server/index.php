<?php

    // Include the server
    require_once "server.php";

    // Process the URL
    $url = explode("/", str_replace(Server::get_instance()->get_config()['SERVER_DIRECTORY'], "", $_SERVER['REQUEST_URI']));
    $action = array(
        "method" => $url[0],
        "controller" => $url[1],
        "action" => $url[2],
        "data" => array_splice($url, 3)
    );

    // Run the REST Api
    RestApi::get_instance()->handle_request($action['method'], $action['controller'], $action['action'], $action['data']);