<?php

    require_once "server.php";

    header("Content-Type: application/json");

    Class RestApi {
        private mixed $post_data;
        public static RestApi $instance;

        public function __construct() {
            $this->post_data = json_decode(file_get_contents("php://input")) ?? new stdClass();
        }

        public function handle_request(string $method, string $controller, string $action, array $data): void {
            // Result
            $result = array(
                "success" => false,
                "message" => "Unknown request",
            );

            $controller_class_name = "Controllers\\" . $controller;
            $controller = new $controller_class_name($data, $this->post_data);
            $result = $controller->{$action}()->get_result();

            /*
            if (property_exists($this->data, "controller")) {
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
            */

            echo json_encode($result);
        }

        public static function get_instance(): RestApi {
            if (!isset(self::$instance)) {
                self::$instance = new RestApi();
            }

            return self::$instance;
        }
    }