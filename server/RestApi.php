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
                $authorized_token = !$class_name::REQUIRES_AUTH_TOKEN;

                if (!$authorized_token) {
                    $token = \Models\UserSession::get_with_user_id($this->data->user_id);
                    $authorized_token = $token != null && $token->get_token() == $this->data->token && !$token->is_expired();
                }

                if ($authorized_token) {
                    $class = new $class_name();
                    $result = $class->get_result();
                } else {
                    $result['message'] = "Unauthorized request";
                }
            }

            echo json_encode($result);
        }
    }

    $api = new RestApi();
    $api->handle_request();