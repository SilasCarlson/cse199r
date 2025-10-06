<?php

    require_once "server.php";

    header("Content-Type: application/json");

    Class RestApi {
        private mixed $data;

        public function __construct() {
            $this->data = json_decode(file_get_contents("php://input"));
        }

        public function handle_request(): void {
            // Result
            $result = array(
                "success" => false,
                "message" => "Unknown request",
            );

            if (property_exists($this->data, "handler")) {
                $class_name = "Handlers\\" . $this->data->handler;
                $class = new $class_name();
                $result = $class->get_result();
            }

            echo json_encode($result);
        }
    }

    $api = new RestApi();
    $api->handle_request();